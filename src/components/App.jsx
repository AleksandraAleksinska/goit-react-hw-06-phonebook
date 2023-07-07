import { Fragment } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchingFilter from './SearchingFilter/SearchingFilter';


const App = () => {
   
  return (
    <Fragment>
      <h2>Phonebook</h2>
      <ContactForm  />
      <h2>Contacts</h2>
      <SearchingFilter />
      <ContactList /> 
    </Fragment>
  )
}

export default App

