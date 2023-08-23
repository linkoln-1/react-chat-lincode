const { NODE_ENV } = process.env;

export let serverUrl;

if (NODE_ENV === 'development') {
  serverUrl = 'http://localhost:8000';
} else {
  serverUrl = 'https://lincode-react-chat.onrender.com';
}
