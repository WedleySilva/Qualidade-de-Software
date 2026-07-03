import readline from 'node:readline/promises';
import process from 'node:process';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function menu() {
  return [
    '1 - Novo lançamento',
    '2 - Listar lançamentos',
    '3 - Remover lançamento',
    '4 - Resumo mensal',
    '5 - Sair'
  ].join('\n');
}

export async function prompt(message) {
  return rl.question(message);
}