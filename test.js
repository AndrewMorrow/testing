const { v1: uuidv1 } = require("uuid");
const crypto = require("crypto");

const privateKey = crypto.randomBytes(24);
const id = new Date().toString();
// const hash = crypto.createHmac("sha256", privateKey).update(id).digest("hex");
// console.log(hash);
const initVector = crypto.randomBytes(14);
const cipher = crypto.createCipheriv("sha256", privateKey, initVector);
let encryptedData = cipher.update(id, "utf-8", "hex");

// const decipher = crypto.createDecipheriv("MD5", privateKey, initVector);

// let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

console.log(encryptedData);
// console.log(decryptedData);
