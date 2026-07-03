import { readRecords, writeRecords } from './storage.js';
import { formatMoney, formatDate } from './utils.js';
import {
  addTransaction,
  listTransactions,
  removeTransaction,
  getBalance,
  monthlySummary
} from './transactions.js';
import { prompt, menu } from './ui.js';

async function main() {
  let records = readRecords();
  let running = true;

  while (running) {
    console.clear();
    console.log('=== Controle Financeiro ===');
    console.log(`Saldo atual: ${formatMoney(getBalance(records))}`);
    console.log(`Última atualização: ${formatDate(new Date())}`);
    console.log(menu());

    const option = await prompt('Escolha uma opção: ');

    if (option === '1') {
      const description = await prompt('Descrição: ');
      const amountText = await prompt('Valor (use negativo para despesa): ');
      const category = await prompt('Categoria: ');
      const date = await prompt('Data (AAAA-MM-DD, vazio hoje): ');
      records = addTransaction(records, description, amountText, category, date);
      writeRecords(records);
      console.log('Lançamento salvo.');
    } else if (option === '2') {
      listTransactions(records);
    } else if (option === '3') {
      const id = await prompt('ID para remover: ');
      records = removeTransaction(records, id);
      writeRecords(records);
      console.log('Remoção concluída.');
    } else if (option === '4') {
      monthlySummary(records);
    } else if (option === '5') {
      running = false;
    } else {
      console.log('Opção inválida.');
    }

    if (running) {
      await prompt('\nPressione Enter para continuar...');
    }
  }
}

main();