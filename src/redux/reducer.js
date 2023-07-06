const initialState = {
    contacts: [],
    filter: ""
  }

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'contacts/addContact':
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case 'contacts/deleteContact':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id!==action.payload)
            }
    };
    
    return state;
}