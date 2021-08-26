import { resolve } from 'path';
import { CustomerDataParserJson } from './customer-data-parser-json';
import { CustomerDataParserTxt } from './customer-data-parser-txt';

async function run() {
  const filePathJson = resolve(__dirname, 'files', 'customer.json');
  const filePathTxt = resolve(__dirname, 'files', 'customer.txt');

  const customerTxt = new CustomerDataParserTxt(filePathTxt);
  await customerTxt.fixCustomerData();
  console.log(customerTxt.customerData);

  console.log('-----------------------');

  const customerJson = new CustomerDataParserJson(filePathJson);
  await customerJson.fixCustomerData();
  console.log(customerJson.customerData);
}
run();
