# Changelog

All notable changes to the Liberty Progressive Framework. The framework is
versioned like software because it is treated like a conjecture: criticism
is invited, and corrections are recorded here with credit.

## [Unreleased]

### Fixed
- Figure 2: corrected "Kathy Hocul" to "Kathy Hochul" (spelling error in the v0.4 PDF).
- Restored inline bold emphasis that was dropped when transcribing the Google Doc
  (found by diffing against a fresh export): **Liberty Progressivism** and the
  framework premise in the Executive Summary, all six **conditions for progress**
  mentions, **liberty**/**libertarian**, the two core-dimension callouts,
  **open change versus closed change**, and the bullet labels in "Practicing
  Liberty Progressivism".
- Title page now shows the version ("Version 0.4, June 2026"), matching the
  Google Doc's title.

### Deliberate normalizations (differences from the Google Doc)
- Straight quotes in the source are restored to smart quotes at build time
  (`-f markdown+smart`); the Google Doc itself is internally inconsistent.
- The unspaced en dashes in "functional–not" (Section III rationale and Note 2)
  are typeset as em dashes.
- Table and figure captions are set in italics rather than the Google Doc's bold.
- Note 2 in "Additional Notes" has no in-text superscript in the Google Doc
  either; left as-is (candidate cleanup for v0.5).

### Changed
- Migrated the canonical document from Google Docs to `docs/framework.md`.
  The PDF and the site's framework page are now build outputs of this file.
- Figures 1 and 2 are now generated from data (`figures/axes.json`,
  `figures/people.json`) instead of static images, so placement changes are
  reviewable one-line diffs.

## [0.4] - 2026-06

- Fourth public draft (previously distributed as a PDF exported from Google Docs).

## [0.3] - 2026-01

- Third public draft. PDF at `context/Liberty_Progressive_Framework_V_0_3.pdf`;
  site launched at libertyprogressive.org.
