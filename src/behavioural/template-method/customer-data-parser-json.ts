import { promises } from 'fs';
import { CustomerData } from './customer-data';
import { CustomerDataParser } from './customer-data-parser';

export class CustomerDataParserJson extends CustomerDataParser {
  hook(): void {
    console.log('O hook foi executado.');
  }

  async parseDate(): Promise<CustomerData[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = JSON.parse(rawData.toString());

    const customerData: CustomerData[] = [];

    for (const customer of data) {
      const { name, age, cpf } = customer;
      customerData.push({
        name,
        age: Number(age),
        cpf,
      });
    }

    return customerData;
  }
}
