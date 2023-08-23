import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { contactsReducer } from './contacts'; // Исправьте на правильное имя
import { chatsReducer } from './Chats'; // Исправьте на правильное имя

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const rootReducer = combineReducers({
  contacts: contactsReducer, // Подставьте правильное имя
  chats: chatsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export type RootState = ReturnType<typeof rootReducer>;
