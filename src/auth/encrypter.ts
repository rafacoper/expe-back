import { hashSync, compareSync } from 'bcrypt';

const saltRounds = 10;

export async function encrypt(text: string): Promise<string> {
  return hashSync(text, saltRounds);
}

export async function compare(
  plainText: string,
  encryptedText: string,
): Promise<boolean> {
  return compareSync(plainText, encryptedText);
}