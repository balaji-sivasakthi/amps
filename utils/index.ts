import { v4 as uuidv4 } from 'uuid';

export function generateUniqueString(length: number = 12): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let uniqueString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueString += characters[randomIndex];
  }
  return uniqueString;
}

export function createObjectId(): string {
  const uuid = uuidv4();
  const uuidHex = uuid.replace(/-/g, '');
  const timestampHex = uuidHex.substring(0, 8);
  const randomHex = uuidHex.substring(8, 24);
  const objectId = `${timestampHex}${randomHex}`;

  return objectId;
}
