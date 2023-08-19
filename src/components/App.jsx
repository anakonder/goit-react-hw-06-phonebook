import { useState, useEffect } from "react";
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';




export const App = () => {
  
  const [contacts, setContacts] = useState([]);

  
  useEffect(() => {    
    if (localStorage.getItem("contacts")) {
        setContacts(JSON.parse(localStorage.getItem("contacts")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);  

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    );  
}


