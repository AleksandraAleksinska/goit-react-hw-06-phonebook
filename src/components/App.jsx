import { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { updateContacts } from 'redux/actions';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchingFilter from './SearchingFilter/SearchingFilter';



const App = () => {

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    storageContacts && dispatch(updateContacts(storageContacts))
  }, [dispatch]);
  
  useEffect(() => {
    contacts.length && localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  
  return (
    <Fragment>
      <h2>Phonebook</h2>
      <ContactForm  />
      <h2>Contacts</h2>
      <SearchingFilter />
      <ContactList /> 
    </Fragment>
  )
};
 
export default App;

