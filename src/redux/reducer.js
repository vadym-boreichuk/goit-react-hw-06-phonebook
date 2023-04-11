import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setStatusFilter } from './actions';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.contacts = [action.payload, ...state.contacts];
  },
  [deleteContact]: (state, action) => {
    state.contacts.filter(contact => contact.id !== action.payload);
  },
  [setStatusFilter]: (state, action) => {
    state.contacts = state.contacts.map(contact =>
      contact.name.includes(action.payload)
    );
  },
});
