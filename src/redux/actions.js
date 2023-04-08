import { createAction, nanoid } from '@reduxjs/toolkit';

export const deleteContact = createAction('contacts/DeleteContact');

export const setStatusFilter = createAction('filters/setStatusFilter');

export const addContact = createAction(
  'contacts/AddContact',
  (name, number) => {
    return {
      payload: {
        name,
        number,
        id: nanoid(),
      },
    };
  }
);
