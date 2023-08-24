import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { contactsReducer } from './contacts'
import { chatsReducer } from './Chats'

const logger = createLogger({
  collapsed: true,
  diff: true,
})

const rootReducer = combineReducers({
  contacts: contactsReducer,
  chats: chatsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
