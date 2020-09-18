const addBudgetForm = document.getElementById('add-budget-form');
const addBudget = document.getElementById('add-budget');
const budgetText = document.getElementById('budget-text');
const addExpenseForm = document.getElementById('add-expense-form');
const expenseDesc = document.getElementById('expense-desc');
const expenseAmount = document.getElementById('expense-amount');
const allExpenses = document.getElementById('all-expenses');

let expenses = [];
let budget = 0;

//Render Data
const renderData = () => {
  budgetText.textContent = budget;
};

//Add Budget
addBudgetForm.addEventListener('submit', (event) => {
  event.preventDefault();
  budget = addBudget.value;
  renderData();
  addBudgetForm.reset();
});

//renderAllExpenses
const renderAllExpenses = () => {
  const expenseHtmlArr = expenses.map(({ desc, expenseAmt }) => {
    return `<div class="expense">
                <span class="expense-desc">${desc}</span>
                <span class="expense-amount">${expenseAmt}</span>
                <div>
                <span class="expense-edit-button">Edit Button</span>
                <span class="expense-delete-button">Delete button</span>
                </div>
            </div>`;
  });
  const expenseHtml = expenseHtmlArr.join('');
  allExpenses.innerHTML = expenseHtml;
};

//Add Expense
addExpenseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newExpense = {
    desc: expenseDesc.value,
    expenseAmt: expenseAmount.value,
  };

  expenses.push(newExpense);
  renderAllExpenses();
  addExpenseForm.reset();
});
