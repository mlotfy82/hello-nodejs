console.log("Hello World from Git\n");
const data = 'RE8xMDF4IGlzIGF3ZXNvbWUh';
console.log(Buffer.from(data, 'base64').toString("ascii"));
