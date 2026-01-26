// กำหนดค่าตัวแปร host และ port
const host = 'localhost'; // หรือค่าอื่น ๆ ตามที่คุณต้องการ
const port = 3000; // หรือพอร์ตที่คุณต้องการ

// สร้าง server
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('My First Server');
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
