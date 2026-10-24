// Find the form, its inputs, and the result area on the page.
const form = document.querySelector('form');
const dailyDemandInput = document.querySelector('#daily-demand');
const leadTimeInput = document.querySelector('#lead-time');
const safetyStockInput = document.querySelector('#safety-stock');
const result = document.querySelector('#result');

// A form submission also works when the user presses Enter.
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Keep the browser from reloading the page.

  // valueAsNumber reads a numeric input as a number rather than text.
  const dailyDemand = dailyDemandInput.valueAsNumber;
  const leadTime = leadTimeInput.valueAsNumber;
  const safetyStock = safetyStockInput.valueAsNumber;

  // HTML validates required fields and minimums; also check in JavaScript.
  const values = [dailyDemand, leadTime, safetyStock];
  if (values.some(value => !Number.isFinite(value) || value < 0)) {
    result.textContent = 'Please enter a valid, nonnegative number in every field.';
    return;
  }

  const reorderPoint = (dailyDemand * leadTime) + safetyStock;
  if (!Number.isFinite(reorderPoint)) {
    result.textContent = 'These values are too large. Please enter smaller numbers.';
    return;
  }

  result.textContent = `Reorder when inventory reaches ${reorderPoint} units.`;
});

// Remove the previous result when inputs change so it cannot look current.
form.addEventListener('input', function () {
  result.textContent = 'Select Calculate to see the result for these values.';
});
