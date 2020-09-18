const addBudgetForm = document.getElementById('add-budget-form');
const addBudget = document.getElementById('add-budget');
const budgetText = document.getElementById('budget-text');
const expenseText = document.getElementById('expense-text');
const balanceText = document.getElementById('balance-text');
const addExpenseForm = document.getElementById('add-expense-form');
const expenseDesc = document.getElementById('expense-desc');
const expenseAmount = document.getElementById('expense-amount');
const allExpenses = document.getElementById('all-expenses');

let expenses = [];
let budget = 0;
let balance = 0;

//get total expenses
const getTotalExpenses = () => {
  let totalExpenses = 0;
  expenses.forEach(({ expenseAmt }) => {
    totalExpenses = totalExpenses + expenseAmt;
  });
  return totalExpenses;
};

//calculate balance
const getCalculatedBalance = () => {
  balance = budget - getTotalExpenses();
  return balance;
};

//Render Data
const renderData = () => {
  budgetText.textContent = budget;
  expenseText.textContent = getTotalExpenses();
  balanceText.textContent = getCalculatedBalance();
};

//Add Budget
addBudgetForm.addEventListener('submit', (event) => {
  event.preventDefault();
  budget = parseInt(addBudget.value);
  renderData();
});

//renderAllExpenses
const renderAllExpenses = () => {
  const expenseHtmlArr = expenses.map(({ desc, expenseAmt, date }) => {
    return `<div class="expense">
                <span class="expense-desc">${desc}</span>
                <span class="expense-amount">${expenseAmt}</span>
                <i class="far fa-trash-alt"  onclick="deleteExpense(${date})"></i>
            </div>
                  `;
  });
  console.log(expenseHtmlArr);
  const expenseHtml = expenseHtmlArr.join('');
  allExpenses.innerHTML = expenseHtml;
};

//Add Expense
addExpenseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newExpense = {
    desc: expenseDesc.value.trim(),
    expenseAmt: parseInt(expenseAmount.value.trim()),
    date: Date.now(),
  };
  expenses.push(newExpense);
  renderData();
  renderAllExpenses();
  addExpenseForm.reset();
});

//Delete Expense
const deleteExpense = (expenseDate) => {
  const newExpenses = expenses.filter(({ date }) => date !== expenseDate);
  expenses = newExpenses;
  renderData();
  renderAllExpenses();
};
