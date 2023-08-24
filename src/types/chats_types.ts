// Chats
export interface initialChatsType {
  chats: Array<{
    username?: string
    id?: number
    user_id: number
    timestamp: string
    text: string
  }>
  loading: boolean
  messages: Array<{
    username?: string
    user_id: number
    timestamp: string
    text: string
    id?: number
  }>
}
export enum ChatActionTypes {
  FETCH_CHAT = 'FETCH_CHAT',
  FETCH_CHAT_SUCCESS = 'FETCH_CHAT_SUCCESS',
}
interface FetchChatsAction {
  type: ChatActionTypes.FETCH_CHAT
}
interface FetchChatsSuccessAction {
  type: ChatActionTypes.FETCH_CHAT_SUCCESS
  payload: Array<{
    username?: string
    id?: number
    user_id: number
    timestamp: string
    text: string
  }>
}

export type ChatAction = FetchChatsAction | FetchChatsSuccessAction
//----------------------------------------------------------------------------
// Send message
export enum SendMessageActionType {
  SEND_MESSAGE = 'SEND_MESSAGE',
  SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS',
}
interface FetchSendMessagesAction {
  type: SendMessageActionType.SEND_MESSAGE
}
interface FetchSendMessageSuccessAction {
  type: SendMessageActionType.SEND_MESSAGE_SUCCESS
  payload: Array<{
    username?: string
    user_id: number
    timestamp: string
    text: string
    id?: number
  }>
}

export type SendMessagesAction =
  | FetchSendMessagesAction
  | FetchSendMessageSuccessAction

//---------------------------------------------------------------------------

// //Load Sended Message
// export enum LoadSendMessageActionType {
//   LOAD_SEND_MESSAGE = 'LOAD_SEND_MESSAGE',
//   LOAD_SEND_MESSAGE_SUCCESS = 'LOAD_SEND_MESSAGE_SUCCESS',
// }
// interface FetchLoadSendMessagesAction {
//   type: LoadSendMessageActionType.LOAD_SEND_MESSAGE
// }
// interface FetchLoadSendMessageSuccessAction {
//   type: LoadSendMessageActionType.LOAD_SEND_MESSAGE_SUCCESS
//   payload: Array<{
//     username?: string,
//     user_id: number,
//     timestamp: string,
//     text: string
//     id?: number
//   }>
// }
//
// export type LoadSendMessages =
//   | FetchLoadSendMessagesAction
//   | FetchLoadSendMessageSuccessAction
