import {
  ChatAction,
  ChatActionTypes,
  initialChatsType,
} from '../types/chats_types'
import { SendMessageActionType, SendMessagesAction } from '../types/chats_types'

const initialState: initialChatsType = {
  chats: [],
  loading: false,
  messages: [],
}

export const chatsReducer = (
  state = initialState,
  action: ChatAction | SendMessagesAction,
) => {
  switch (action.type) {
    case ChatActionTypes.FETCH_CHAT:
      return {
        ...state,
        loading: true,
      }

    case ChatActionTypes.FETCH_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
        chats: action.payload,
      }

    case SendMessageActionType.SEND_MESSAGE:
      return {
        ...state,
        loading: true,
      }

    case SendMessageActionType.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.payload,
      }

    default:
      return state
  }
}
