import { Hasher } from "../../applications/cryptography/hasher";
import bcrypt from "bcrypt"

export class HashBcrypt implements Hasher {
  async compare(value: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(value, hashed)
  }
  async encrypt(value: string): Promise<string> {
    return bcrypt.hash(value, 8)
  }
}