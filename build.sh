#!/usr/bin/env bash
# Builds the Liberty Progressive Framework outputs from docs/framework.md.
# Requires: node, pandoc, weasyprint.
set -euo pipefail
cd "$(dirname "$0")"

VERSION=$(sed -n 's/^version: *"\{0,1\}\([0-9.]*\).*/\1/p' docs/framework.md | head -1)
echo "Building framework v${VERSION}"

node figures/generate.js

mkdir -p dist/figures
cp docs/figures/*.svg dist/figures/

# Typeset PDF (smart quotes/dashes restored at build time)
(cd docs && pandoc framework.md -f markdown+smart \
  -o "../dist/Liberty_Progressive_Framework_v${VERSION}.pdf" --pdf-engine=weasyprint --css print.css)

# HTML body fragment, for injection into the site's framework.html template
pandoc docs/framework.md -f markdown+smart -t html5 \
  -o dist/framework-body.html --resource-path=docs

# Full framework page: inject the generated body into the site template.
# framework.html is a build output (gitignored); edit framework.template.html.
node -e '
const fs = require("fs");
const tpl = fs.readFileSync("framework.template.html", "utf8");
const body = fs.readFileSync("dist/framework-body.html", "utf8")
  .replace(/src="figures\//g, "src=\"dist/figures/");
fs.writeFileSync("framework.html", tpl
  .replace("<!-- FRAMEWORK_BODY -->", () => body)
  .replace(/{{VERSION}}/g, process.argv[1]));
' "$VERSION"

echo "Done: dist/Liberty_Progressive_Framework_v${VERSION}.pdf, dist/framework-body.html, framework.html"
