const fs = require("fs");
const postTitle = process.argv[2];

console.log("Generating a new post template ...");

const writeStream = fs.createWriteStream("");
writeStream.write("");
writeStream.write("");
writeStream.end();
