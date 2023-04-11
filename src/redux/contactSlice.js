import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: contactsInitialState,
  // Об'єкт редюсерів
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
        // state.push(action.payload);
        // return state;
      },
      prepare(contact) {
        return {
          payload: { ...contact, id: nanoid() },
        };
      },
    },
    // addContact(state, action) {
    //   state.contacts = [...state.contacts, action.payload];
    //   console.log(action);
    // },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});
// Генератори екшенів
export const { addContact, deleteContact } = contactSlice.actions;
// Редюсер слайсу
export const contactReducer = contactSlice.reducer;
