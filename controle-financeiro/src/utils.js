export function formatMoney(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

export function formatDate(date) {
  return new Intl.DateTimeFormat('pt-BR').format(date);
}

export function normalizeDate(text) {
  if (!text) {
    return new Date().toISOString().slice(0, 10);
  }
  return text;
}

export function generateId(records) {
  return String(records.length + 1);
}