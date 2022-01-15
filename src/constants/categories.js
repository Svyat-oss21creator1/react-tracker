const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: 'бизнес', amount: 0, color: incomeColors[0] },
  { type: 'инвестиции', amount: 0, color: incomeColors[1] },
  { type: 'дополнительный расход', amount: 0, color: incomeColors[2] },
  { type: 'Депозиты', amount: 0, color: incomeColors[3] },
  { type: 'лотереи ', amount: 0, color: incomeColors[4] },
  { type: 'подарки', amount: 0, color: incomeColors[5] },
  { type: 'зарплата', amount: 0, color: incomeColors[6] },
  { type: 'сбережения', amount: 0, color: incomeColors[7] },
  { type: 'арендная плата', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: 'счета', amount: 0, color: expenseColors[0] },
  { type: 'машина', amount: 0, color: expenseColors[1] },
  { type: 'одежда', amount: 0, color: expenseColors[2] },
  { type: 'путешествия', amount: 0, color: expenseColors[3] },
  { type: 'еда', amount: 0, color: expenseColors[4] },
  { type: 'шопинг', amount: 0, color: expenseColors[5] },
  { type: 'дом', amount: 0, color: expenseColors[6] },
  { type: 'развлечения', amount: 0, color: expenseColors[7] },
  { type: 'телефон', amount: 0, color: expenseColors[8] },
  { type: 'животные', amount: 0, color: expenseColors[9] },
  { type: 'другое', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};