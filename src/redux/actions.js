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
        type: 'contacts/DeleteContact',
        payload: contactId,
    }
    
}

export const setContactFilter = (value) => {
    return {
        type: 'filter/setContactFilter',
        payload: value,
    }
}
