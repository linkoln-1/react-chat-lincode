export enum ContactActionTypes {
  FETCH_CONTACTS = 'FETCH_CONTACTS',
  FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
}
interface FetchContactsAction {
  type: ContactActionTypes.FETCH_CONTACTS
}
interface FetchContactsSuccessAction {
  type: ContactActionTypes.FETCH_CONTACTS_SUCCESS
  payload: Array<{
    id: number
    myId: number
    username: string
  }>
}
export type ContactAction = FetchContactsAction | FetchContactsSuccessAction
