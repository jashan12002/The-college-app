import { Client, Account, Databases } from 'appwrite';

export const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65f535a863b003b139f7');

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from 'appwrite';