# Claude Code Context for Liberty Progressive Web

This document provides context for Claude Code when working on this project.

## Project Overview

This is the website for the Liberty Progressive Framework, a political philosophy grounded in freedom, fallibilism, and decentralized problem-solving. The site includes:

1. **Landing page** (`index.html`) - Explains the framework
2. **Quiz** (`quiz.html`) - 20-question assessment placing users in one of four quadrants

## Key Documents

- `context/framework-summary.md` - Summary of the Liberty Progressive Framework
- `context/quiz-rubric.md` - Detailed explanation of the quiz design and scoring
- `context/Liberty_Progressive_Framework_V_0_3.pdf` - The full framework document (when added)

## The Two Principal Axes

### Axis A: Liberty ↔ Statist
**What it measures:** Where you locate problem-solving capacity

- **Liberty pole:** Prefers solutions where power is contestable (can be challenged), plural (multiple approaches compete), and exitable (people can leave or choose alternatives)
- **Statist pole:** Prefers solutions achieved through central coordination, uniform standards, and public enforcement, even if exit and contestability decrease

**Important:** This is NOT "government = bad." Regulation that *increases* contestability (antitrust, interoperability mandates) codes as Liberty because it increases exit and competition.

### Axis B: Reformer ↔ Revolutionary
**What it measures:** How you believe change should occur

- **Reformer pole:** Iterative change, pilots, tradeoffs admitted, willingness to revise, reversible policy, dissent tolerated as valuable input
- **Revolutionary pole:** Moral certainty, urgency overrides process, irreversibility acceptable, dissent seen as illegitimate/immoral

**Important:** This is NOT "moderate vs extremist." It's about method, epistemics, and reversibility.

## The Four Quadrants

| | Reformer | Revolutionary |
|---|---|---|
| **Liberty** | **Epistemic Reformers** - Pragmatic, pro-freedom, pro-abundance | **Open System Radicals** - Anarcho-capitalists, crypto decentralizers |
| **Statist** | **Technocratic Pragmatists** - Skilled managers, expert-driven policy | **Moral Centralizers** - Moral crusaders, ends justify means |

## Quiz Design Principles

The quiz has 20 questions (10 per axis) with 5 subcomponents each:

**Liberty ↔ Statist subcomponents:**
- A1: Exit rights & pluralism
- A2: Permissioning vs permissionless innovation
- A3: Coercion tolerance
- A4: Uniformity vs local variation
- A5: Capture expectations

**Reformer ↔ Revolutionary subcomponents:**
- B1: Reversibility preference
- B2: Tolerance of dissent
- B3: Process legitimacy
- B4: Tradeoff acknowledgment
- B5: Falsifiability / update willingness

**Design choices:**
- Options are shuffled randomly each session to prevent pattern-matching
- Axis labels are NOT shown to users (to prevent gaming)
- Questions use forced-choice and scenario-based framing
- Scoring: 0-4 per question, 0-40 raw per axis, scaled to 0-100

## Tech Stack

- Pure HTML/CSS/JS (no frameworks, no build step)
- Designed for GitHub Pages hosting
- Mobile responsive
- No external dependencies

## Style Guidelines

- Use CSS custom properties (variables) defined in `:root`
- Keep JavaScript vanilla (no jQuery, no frameworks)
- Maintain consistent color scheme:
  - Blue (#2563eb) - Epistemic Reformers
  - Purple (#7c3aed) - Open System Radicals  
  - Green (#059669) - Technocratic Pragmatists
  - Red (#dc2626) - Moral Centralizers

## Common Tasks

### Adding/editing quiz questions
Edit the `questions` array in `quiz.html`. Each question needs:
- `id` (unique number)
- `axis` ('liberty' or 'reformer')
- `text` (question text)
- `options` (array of {score: 0-4, text: string})

### Changing quadrant descriptions
Edit the `quadrants` object in `quiz.html`.

### Updating the landing page content
Edit `index.html` directly. Content sections are clearly labeled with comments.

## Author

Joel Dudley, PhD

## Intellectual Foundations

- Karl Popper's critical rationalism
- David Deutsch's *The Beginning of Infinity*
- The premise that protecting the means of error correction (free speech, distributed power, decentralized experimentation) is more fundamental than any particular progressive outcome
