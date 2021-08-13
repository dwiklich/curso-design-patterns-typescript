import { SystemUserProxy } from './system-user/system-user-proxy';

async function clienteCode(): Promise<void> {
  const user = new SystemUserProxy('Dan', 'Wik', 26, 'dwiklich');
  console.log('Addresses carregando 2s');
  console.log(await user.getAddresses());
  console.log('Addresses (CACHE)');
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clienteCode();
