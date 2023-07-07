import { nanoid } from "nanoid";

export const addContact = (name, number) => {
    return {
        type: 'contacts/addContact',
        payload: {
            id: nanoid(),
            name,
            number
        }
    }    
}

export const deleteContact = (contactId) => {
    return {
        type: 'contacts/deleteContact',
        payload: contactId,
    }   
}

export const setContactFilter = (value) => {
    return {
        type: 'filter/setContactFilter',
        payload: value,
    }
}

export const getFilteredContacts = (filter) => {
    return {
        type: 'contacts/getFilteredContacts',
        payload: filter,
    }
}
