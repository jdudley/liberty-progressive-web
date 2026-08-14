#!/usr/bin/env node
// Generates docs/figures/figure-1.svg and figure-2.svg from axes.json + people.json.
// No dependencies. Run: node figures/generate.js

const fs = require("fs");
const path = require("path");

const axes = JSON.parse(fs.readFileSync(path.join(__dirname, "axes.json"), "utf8"));
const peopleData = JSON.parse(fs.readFileSync(path.join(__dirname, "people.json"), "utf8"));
const S = axes.style;
const R = axes.range;

const W = 940, H = 680;
const cx = W / 2, cy = H / 2;
const halfX = 292, halfY = 262; // plot half-extents in px at |value| = range
const sx = (v) => cx + (v / R) * halfX;
const sy = (v) => cy - (v / R) * halfY;
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function frame(children) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" font-family="${S.fontBody}">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="${S.ink}"/>
    </marker>
  </defs>
  <rect x="1" y="1" width="${W - 2}" height="${H - 2}" fill="${S.paper}" stroke="${S.frame}" stroke-width="1.5"/>
  <line x1="${sx(-R)}" y1="${cy}" x2="${sx(R)}" y2="${cy}" stroke="${S.ink}" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <line x1="${cx}" y1="${sy(R)}" x2="${cx}" y2="${sy(-R)}" stroke="${S.ink}" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="${cx}" y="${sy(R) - 14}" text-anchor="middle" font-family="${S.fontDisplay}" font-size="21" font-weight="700" fill="${S.ink}">${esc(axes.poles.top)}</text>
  <text x="${cx}" y="${sy(-R) + 32}" text-anchor="middle" font-family="${S.fontDisplay}" font-size="21" font-weight="700" fill="${S.ink}">${esc(axes.poles.bottom)}</text>
  <text x="${sx(-R) - 12}" y="${cy + 6}" text-anchor="end" font-family="${S.fontDisplay}" font-size="21" font-weight="700" fill="${S.ink}">${esc(axes.poles.left)}</text>
  <text x="${sx(R) + 12}" y="${cy + 6}" text-anchor="start" font-family="${S.fontDisplay}" font-size="21" font-weight="700" fill="${S.ink}">${esc(axes.poles.right)}</text>
  ${children}
</svg>
`;
}

// ---------- Figure 1: quadrant labels ----------
function figure1() {
  const anchors = {
    "top-left": { x: cx - halfX / 2 - 20, y: cy - halfY / 2 - 30 },
    "top-right": { x: cx + halfX / 2 + 20, y: cy - halfY / 2 - 30 },
    "bottom-left": { x: cx - halfX / 2 - 20, y: cy + halfY / 2 - 20 },
    "bottom-right": { x: cx + halfX / 2 + 20, y: cy + halfY / 2 - 20 }
  };
  const blocks = axes.quadrants.map((q) => {
    const a = anchors[q.corner];
    const lines = q.lines
      .map((ln, i) => `<tspan x="${a.x}" dy="${i === 0 ? 26 : 19}" font-weight="400" fill="${S.muted}">${esc(ln)}</tspan>`)
      .join("");
    return `<text x="${a.x}" y="${a.y}" text-anchor="middle" font-size="16">
      <tspan x="${a.x}" font-weight="700" fill="${S.ink}">${esc(q.name)}:</tspan>${lines}
    </text>`;
  }).join("\n");
  return frame(blocks);
}

// ---------- Figure 2: placements ----------
function figure2() {
  const fontSize = 15, charW = 7.6, pad = 9;
  const dots = peopleData.people.map((p) => {
    if (Math.abs(p.x) > R || Math.abs(p.y) > R) {
      console.warn(`Warning: ${p.name} is outside the ±${R} range.`);
    }
    const x = sx(p.x), y = sy(p.y);
    const est = p.name.length * charW;
    const fitsRight = x + pad + est < W - 10;
    const tx = fitsRight ? x + pad : x - pad;
    const anchor = fitsRight ? "start" : "end";
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.5" fill="${S.ink}"/>
  <text x="${tx.toFixed(1)}" y="${(y + 5).toFixed(1)}" text-anchor="${anchor}" font-size="${fontSize}" font-weight="600" fill="${S.ink}">${esc(p.name)}</text>`;
  }).join("\n  ");
  return frame(dots);
}

const outDir = path.join(__dirname, "..", "docs", "figures");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "figure-1.svg"), figure1());
fs.writeFileSync(path.join(outDir, "figure-2.svg"), figure2());
console.log(`Wrote figure-1.svg and figure-2.svg to ${outDir}`);
