import { ContactAction, ContactActionTypes } from '../types/contact_types'

export interface Contact {
  id: number;
  username: string;
}
export interface initialStateType {
  contacts: Array<Contact>;
  loading: boolean;
}
const initialState: initialStateType  = {
  contacts: [],
  loading: false,
}
export const contactsReducer = (state = initialState, action: ContactAction) => {
  switch (action.type) {
    case ContactActionTypes.FETCH_CONTACTS:
      return {
        ...state,
        loading: true,
      }
    case ContactActionTypes.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.payload,
      }

    default:
      return state
  }
}
