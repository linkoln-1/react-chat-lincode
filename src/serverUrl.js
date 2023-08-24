const { NODE_ENV } = process.env;

export let serverUrl;

if (NODE_ENV === 'development') {
  serverUrl = 'http://localhost:8001';
} else {
  serverUrl = 'https://lincode-chat.onrender.com/';
}
