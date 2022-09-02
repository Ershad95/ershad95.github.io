import { Injectable } from "@angular/core";
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: "root"
})
export class EncryptionService {

  private static readonly key: any = "@**R|#@=";
  private static readonly IV = "!@#$*&=&*$$$";

  // ENCRYPTION USING CBC TRIPLE DES
  encryptUsingTripleDES(res: any, typeObj: boolean): string {
    const data = typeObj ? JSON.stringify(res) : res;
    const keyHex = CryptoJS.enc.Utf8.parse(EncryptionService.key);
    const iv = CryptoJS.enc.Utf8.parse(EncryptionService.IV);
    const mode = CryptoJS.mode.CBC;
    const encrypted = CryptoJS.TripleDES.encrypt(data, keyHex, { iv, mode });
    return encrypted.toString();
  }

  // DECRYPTION USING CBC TRIPLE DES
  decryptUsingTripleDES(encrypted: string): string {
    const keyHex = CryptoJS.enc.Utf8.parse(EncryptionService.key);
    const iv = CryptoJS.enc.Utf8.parse(EncryptionService.IV);
    const mode = CryptoJS.mode.CBC;
    const decrypted = CryptoJS.TripleDES.decrypt(encrypted, keyHex, { iv, mode });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  // ENCRYPTION USING AES
  encryptUsingAES(res: any, typeObj: boolean): string {
    const data = typeObj ? JSON.stringify(res) : res;
    const hash = CryptoJS.MD5(EncryptionService.key).toString();
    const encrypted = CryptoJS.AES.encrypt(data, hash);
    return encrypted.toString();
  }

  // DECRYPTION USING AES
  decryptUsingAES(encrypted: string): string {
    const hash = CryptoJS.MD5(EncryptionService.key).toString();
    const decrypted = CryptoJS.AES.decrypt(encrypted, hash);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}