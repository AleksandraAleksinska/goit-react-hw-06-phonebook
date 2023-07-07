import React, { Fragment } from 'react';
import { getContacts, getFilter } from 'redux/selectors';

import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';





const ContactList = () => {
  
  const filter = useSelector(getFilter)
  const contacts = useSelector(getContacts)
  console.log(contacts)
  console.log(filter)
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
}

export default ContactList

