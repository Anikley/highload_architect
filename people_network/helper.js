/* eslint-disable no-undef */
// Nodejs encryption with CTR
const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const key = Buffer.from(
  "3559a52b1389588b893de94f35cfcaba651a93fe7dcb2ebf36ea90427bdd378d",
  "hex"
);

const iv = Buffer.from("6831ed2c220214c3cd65a9787c4d22d8", "hex");

var Helper = {};
Helper.encrypt = (text) => {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { encryptedData: encrypted.toString("hex") };
};

Helper.decrypt = (text) => {
  let encryptedText = Buffer.from(text.encryptedData, "hex");
  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

module.exports = Helper;
