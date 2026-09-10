const expenses = [
  { id: 1, category: "food", amount: 52 },
  { id: 2, category: "transport", amount: 27 },
  { id: 3, category: "food", amount: 52 },
  { id: 4, category: "books", amount: 32 },
];

function total(expenses) {
  let totals = 0;
  for (let i = 0; i < expenses.length; i++) {
    totals += expenses[i].amount;
    //totals += expenses[i].category
    //totals++;
  }

  return totals;
}

function totalCategory(expenses, category) {
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].category == category) {
      total += expenses[i].amount;
    }
  }

  return total;
}

function largestExpenses(expenses) {
  let Largest = expenses[0];
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].amount > Largest.amount) {
      Largest = expenses[i].amount;
    }
  }

  return Largest;
}

function summary(expenses) {
  return {
    total: total(expenses),
    foodTotal: totalCategory(expenses, "food"),
    transportTotal: totalCategory(expenses, "transport"),
    largestExpense: largestExpenses(expenses),
  };
}

console.log(summary(expenses));
console.log(totalCategory(expenses, "food"));
console.log(totalCategory(expenses, "books"));
console.log(largestExpenses(expenses));

/* 
calculateTotal(expenses) should return the total amount spent.

calculateCategoryTotal(expenses, category) should return the total for one category.

findLargestExpense(expenses) should return the full expense object with the largest amount.

createExpenseSummary(expenses) should return total, foodTotal, transportTotal, and largestExpense.

Sample checks:

js

const expenses = [
  { id: 1, category: 'food', amount: 24 },
  { id: 2, category: 'transport', amount: 15 },
  { id: 3, category: 'food', amount: 18 },
  { id: 4, category: 'books', amount: 40 },
];
console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));
*/
