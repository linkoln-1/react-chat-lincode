// const socketIo = require('socket.io');
// const http = require('http');
// const express = require('express');
// const fs = require('fs');
// const cors = require('cors');
//
// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);
// app.use(cors())
//
// // Загрузка данных из файла db.json
// let messages = [];
// if (fs.existsSync('db.json')) {
//   const data = fs.readFileSync('db.json', 'utf8');
//   messages = JSON.parse(data);
// }
//
// io.on('connection', (socket) => {
//   socket.on('message', (messageData) => {
//     // Добавляем сообщение в массив и сохраняем в файл
//     const newMessage = { text: messageData, timestamp: Date.now() };
//     console.log()
//     messages.push(newMessage);
//     fs.writeFileSync('db.json', JSON.stringify(messages), 'utf8');
//
//     // Обработка сообщения и отправка его другим клиентам
//     io.emit('message', messageData);
//   });
//
//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });
//
//
//
//
//
//
// server.listen(8080, () => {
//   console.log('Server is listening on port 8080');
// });
