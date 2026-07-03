import { formatMoney, normalizeDate, generateId } from './utils.js';

export function addTransaction(records, description, amountText, category, dateText) {
  const amount = Number(amountText);
  const date = normalizeDate(dateText);
  const item = {
    id: generateId(records),
    description: description.trim(),
    amount,
    category: category.trim(),
    date
  };

  if (!item.description || Number.isNaN(item.amount)) {
    console.log('Dados inválidos.');
    return records;
  }

  return [...records, item];
}

export function listTransactions(records) {
  if (records.length === 0) {
    console.log('Nenhum lançamento cadastrado.');
    return;
  }

  for (const record of records) {
    const type = record.amount >= 0 ? 'Receita' : 'Despesa';
    console.log(
      `${record.id} | ${record.date} | ${type} | ${record.category} | ${record.description} | ${formatMoney(record.amount)}`
    );
  }
}

export function removeTransaction(records, id) {
  return records.filter((record) => record.id !== id);
}

export function getBalance(records) {
  let total = 0;

  for (const record of records) {
    total += record.amount;
  }

  return total;
}

export function monthlySummary(records) {
  const byMonth = {};

  for (const record of records) {
    const key = record.date.slice(0, 7);
    if (!byMonth[key]) {
      byMonth[key] = 0;
    }
    byMonth[key] += record.amount;
  }

  const months = Object.keys(byMonth).sort();

  for (const month of months) {
    console.log(`${month}: ${formatMoney(byMonth[month])}`);
  }
}