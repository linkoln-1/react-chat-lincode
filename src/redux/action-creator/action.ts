import { Dispatch } from 'redux'
import { ContactAction, ContactActionTypes } from '../../types/contact_types'
import {
  ChatAction,
  ChatActionTypes,
  SendMessagesAction,
} from '../../types/chats_types'
import { SendMessageActionType } from '../../types/chats_types'

export const loadUsers = () => {
  return (dispatch: Dispatch<ContactAction>) => {
    dispatch({ type: ContactActionTypes.FETCH_CONTACTS })

    fetch('http://localhost:8000/users')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ContactActionTypes.FETCH_CONTACTS_SUCCESS,
          payload: data,
        })
      })
  }
}

export const sendMessage = (message: string, user_id: number) => {
  const date = new Date()
  return (dispatch: Dispatch<SendMessagesAction>) => {
    dispatch({ type: SendMessageActionType.SEND_MESSAGE })

    fetch('http://localhost:8000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        username: 'Нашхоев Али',
        user_id: user_id,
        timestamp: date,
        text: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: SendMessageActionType.SEND_MESSAGE_SUCCESS,
          payload: data,
        })
      })
  }
}

export const loadFromUserMessage = () => {
  return (dispatch: Dispatch<ChatAction | SendMessagesAction>) => {
    dispatch({ type: ChatActionTypes.FETCH_CHAT })

    fetch('http://localhost:8000/messages')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ChatActionTypes.FETCH_CHAT_SUCCESS,
          payload: data,
        })
      })
  }
}
