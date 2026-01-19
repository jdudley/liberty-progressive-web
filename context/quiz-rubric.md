# Quiz Rubric and Design

This document explains the design principles and scoring logic for the Liberty Progressive Quiz.

## Purpose

The quiz places respondents into one of four quadrants based on their positions along two axes:
1. Liberty ↔ Statist
2. Reformer ↔ Revolutionary

## Axis Definitions

### Axis A: Liberty ↔ Statist

**What this axis actually measures:**

- **Liberty end:** Prefers solutions where power is contestable (you can challenge it), plural (multiple approaches compete), and exitable (people can leave / choose alternatives)
- **Statist end:** Prefers solutions where goals are achieved through central coordination, uniform standards, and public enforcement, even if exit and contestability decrease

**Important clarifications:**
- This is NOT "government = statist." Antitrust enforcement, interoperability mandates, and transparency requirements can be *liberty-coded* because they increase exit and competition
- Private concentrated power (Big Tech, monopolies) is treated as seriously as government power

### Axis B: Reformer ↔ Revolutionary

**What this axis actually measures:**

- **Reformer end:** Iterative change, pilots, tradeoffs admitted, willingness to revise, reversible policy, dissent tolerated as input
- **Revolutionary end:** Moral certainty, urgency overrides process, irreversibility is acceptable, dissent seen as illegitimate/immoral

**Important clarifications:**
- This is NOT "moderate vs extremist"
- It's about method, epistemics, and reversibility
- Someone can want radical policy goals but pursue them through reformist methods

## Subcomponents (2 questions each)

### Liberty ↔ Statist (10 questions)

| Code | Subcomponent | What it measures |
|------|--------------|------------------|
| A1 | Exit rights & pluralism | Choice, portability, federalism, opt-out |
| A2 | Permissioning vs permissionless | Licensing, prior restraint, "allowed list" mentality |
| A3 | Coercion tolerance | Comfort with mandates, enforcement, criminalization |
| A4 | Uniformity vs local variation | One standard vs many experiments |
| A5 | Capture expectations | Baseline trust vs suspicion of concentrated power |

### Reformer ↔ Revolutionary (10 questions)

| Code | Subcomponent | What it measures |
|------|--------------|------------------|
| B1 | Reversibility preference | Sunsets, pilots, rollback triggers |
| B2 | Tolerance of dissent | Speech, pluralism, internal criticism |
| B3 | Process legitimacy | Rule of law, norms, constitutional constraints |
| B4 | Tradeoff acknowledgment | Can articulate costs; avoids utopianism |
| B5 | Falsifiability / update willingness | What would change your mind? |

## Scoring

### Per-question scoring
Each question has 5 options scored 0-4:
- 0 = Strong Statist / Strong Revolutionary
- 1 = Lean Statist / Lean Revolutionary
- 2 = Mixed / Balanced
- 3 = Lean Liberty / Lean Reformer
- 4 = Strong Liberty / Strong Reformer

### Per-axis scoring
- Raw score: Sum of 10 questions = 0-40
- Scaled score: (raw / 40) × 100 = 0-100

### Quadrant assignment
- Liberty score > 50 AND Reformer score > 50 → **Epistemic Reformers**
- Liberty score > 50 AND Reformer score ≤ 50 → **Open System Radicals**
- Liberty score ≤ 50 AND Reformer score > 50 → **Technocratic Pragmatists**
- Liberty score ≤ 50 AND Reformer score ≤ 50 → **Moral Centralizers**

## Design Principles

### 1. Forced-choice and scenario-based items
Avoid "Do you support freedom?" type questions. Instead use tradeoffs:
- "If X and Y conflict, which do you prioritize?"
- "Which failure mode concerns you more?"

### 2. Randomized option order
Options are shuffled each session to prevent pattern-matching (e.g., always picking the last option).

### 3. No axis labels shown
The quiz does NOT display "Liberty ↔ Statist" or "Reformer ↔ Revolutionary" above questions to prevent gaming.

### 4. Concrete scenarios over abstract principles
Questions reference specific contexts (technology regulation, policy implementation, regional variation) rather than abstract values.

### 5. Private power treated seriously
Questions about institutional capture include "dominant firm" and "major platform" alongside regulators, ensuring the Liberty axis doesn't reduce to "government bad."

## The 20 Questions

### A1: Exit rights & pluralism
1. State policy variation on controversial issues
2. Response when national policy fails in some regions

### A2: Permissioning vs permissionless
3. Default approach to new technology with uncertain risks
4. View on occupational licensing

### A3: Coercion tolerance
5. Public-safety goals vs individual choice
6. Government compelling behavior for serious problems

### A4: Uniformity vs local variation
7. Which concern weighs more: inconsistency or uniformity?
8. Scaling successful local programs nationally

### A5: Capture expectations
9. Instinct when powerful institution favors its own interests
10. View on concentrated power serving its own interests

### B1: Reversibility preference
11. Best approach for major policy changes
12. "Moving slowly perpetuates injustice"

### B2: Tolerance of dissent
13. Reaction to allies expressing doubts
14. Social consequences for public opposition

### B3: Process legitimacy
15. Response when morally correct policy can't pass normally
16. Constitutional limits as obstacles to justice

### B4: Tradeoff acknowledgment
17. How you describe costs/downsides of policies you support
18. Attribution of policy failures (implementation vs underlying idea)

### B5: Falsifiability / update willingness
19. Can you name outcomes that would change your view?
20. Have you changed your mind on political issues recently?

## Potential Misclassification Risks

The trickiest boundary is **Technocratic Pragmatists vs Epistemic Reformers** because both:
- Value evidence
- Accept tradeoffs
- Prefer process over revolution

The key discriminator is A1-A5: where does problem-solving capacity live? Technocratic Pragmatists trust centralized expertise more; Epistemic Reformers trust distributed experimentation.

## Future Improvements to Consider

1. **Add consistency checks** - Near-paraphrase questions to detect random/inattentive responses
2. **Weight value vs belief items** - Some questions measure deep preferences, others measure expected consequences
3. **Emergency powers question** - How much should "exception tolerance" weigh on the revolutionary axis?
4. **Separate score display** - Show subscores for each of the 10 subcomponents
