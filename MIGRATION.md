# Migration notes: Google Docs -> repo (for the Claude Code session)

Files in this bundle drop into the root of `liberty-progressive-web`,
preserving paths. Then:

1. **Fidelity check.** `docs/framework.md` was transcribed from the v0.4 PDF.
   Export the canonical Google Doc as Markdown (File > Download > Markdown)
   and diff it against `docs/framework.md` to catch any drift (italics,
   dashes, small wording differences). Two deliberate normalizations:
   quotes are straight in the source and restored to smart quotes at build
   time (`-f markdown+smart`); "Kathy Hocul" was corrected to "Hochul" in
   `figures/people.json` (see CHANGELOG). Note 2 in "Additional Notes" has
   no in-text superscript in the PDF; check the Google Doc for one.
2. **Test locally.** `./build.sh` needs node, pandoc, and weasyprint
   (`pip install weasyprint`). Confirm `dist/` outputs look right.
3. **Wire the site.**
   - Point the "Download PDF" links (index.html footer, framework.html) at
     `dist/Liberty_Progressive_Framework_v0.4.pdf`, replacing the stale
     v0.3 link into `context/`.
   - framework.html: replace its hand-maintained body with an include of
     `dist/framework-body.html` at build time, or keep the page as-is for
     now and revisit when v0.5 lands. Do not delete the page's styling.
4. **Pages settings.** Repo Settings > Pages > Source: change from
   "Deploy from a branch" to "GitHub Actions" so `.github/workflows/build.yml`
   owns the deploy. `dist/` stays out of git (add to .gitignore).
5. **Tag.** `git tag v0.4 && git push --tags`. Attach the built PDF to a
   GitHub Release. Future releases: bump `version:` in the frontmatter.
6. **Update CLAUDE.md.** Key documents section should name
   `docs/framework.md` as canonical and mark `context/*.pdf` as archived.

v0.5 editing then happens as a branch + PR against `docs/framework.md`.
