# Inventory Reorder Calculator — Progress Tracker

This tracker records verified project progress and learning milestones.
Update it when tasks are completed, tested, or changed. Learning topics are
marked understood only after the learner demonstrates understanding.

## Application development

- [x] Agree on inputs and the reorder-point formula.
- [x] Create the HTML form with labels and numeric inputs.
- [x] Add responsive CSS with an industrial inventory theme.
- [x] Add inventory graphics without external image dependencies.
- [x] Connect JavaScript to the form and result area.
- [x] Calculate `(daily demand × lead time) + safety stock`.
- [x] Reject missing and negative inputs.
- [x] Handle nonfinite input values and calculation overflow in code.
- [x] Display the answer and clear it when inputs change.
- [x] Support submission by button and Enter key.
- [x] Commit and push the application files to GitHub.
- [x] Confirm the learner can open the styled page and use the calculation.

## Verification evidence

- Browser layout checks passed at 375px and 1280px with no horizontal overflow.
- Browser calculation checks passed for these inputs:

  | Daily demand | Lead time | Safety stock | Expected result |
  |---:|---:|---:|---:|
  | 20 | 10 | 50 | 250 |
  | 5 | 3 | 0 | 15 |
  | 0 | 7 | 10 | 10 |
  | 2.5 | 4 | 5 | 15 |
  | 0 | 0 | 0 | 0 |

- Browser checks passed for blank and negative input validation, clearing an
  outdated result, and submission with Enter.
- JavaScript syntax checks passed.
- Learner confirmed: “Works fine.”
- Nonfinite/overflow guards exist, but dedicated browser cases remain unrun.

## Learning milestones

- [x] Explain that `reorderPoint` stores the calculated number.
- [x] Receive a walkthrough of HTML elements and their JavaScript connections.
- [x] Receive an explanation of `result.textContent` and template literals.
- [ ] Demonstrate how an HTML `id` connects to `querySelector()`.
- [ ] Explain the difference between an input element and its numeric value.
- [ ] Explain submit events and `event.preventDefault()`.
- [ ] Explain validation, conditionals, and early `return` statements.
- [ ] Explain how input events clear an outdated result.

## Next small tasks

1. Walk through one form submission and explain the HTML-to-JavaScript flow.
2. Agree on whole-unit versus decimal results and the rounding policy.
3. Test fractional results, numeric precision, and excessively large values.
4. Review keyboard use, validation messages, and mobile appearance manually.
5. Add a beginner-friendly README with usage, examples, and limitations.

## Current limitations and decisions

- Results currently use JavaScript's numeric output without rounding or formatting.
- Decimal demand, fractional lead time, and decimal safety stock are allowed.
- Entries are not saved after a refresh.
- No live website deployment has been configured or verified.
- Tracking is maintained during project work; no background automation is installed.
