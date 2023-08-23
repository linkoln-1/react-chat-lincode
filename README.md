## Инструкция по запуску проекта
для запуска сервера, в первом терминале нужно набрать:
npx json-server --watch db.json --port 8000

 Для автоматического обновления сервера:
   1) Установка nodemon (для сервера) - npm i -D nodemon;
 2) В package.json  в разделе scripts дописываем «dev»: «nodemon server.js»
 3) Запуск сервера npx nodemon server.js


 Сначала в первом терминале пишем команду:
   npx json-server --watch db.json --port 8000

 Не закрывая этот, открываем еще один терминал и запускаем приложение.js

 Fetch-запросы делаем по адресу: http://localhost:8000/
