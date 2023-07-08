import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  
  const filter = useSelector(getFilter)
  const contacts = useSelector(getContacts)
  
  const filteredContacts = filter ? contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLocaleLowerCase())) : contacts;
    
  return (
    <Fragment>
    <ul>            
      <ContactListItem 
      contacts={filteredContacts}
      />     
    </ul>
    </Fragment>
  )
};

export default ContactList;

