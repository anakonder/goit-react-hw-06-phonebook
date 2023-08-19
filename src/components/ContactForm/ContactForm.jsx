import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';
import styles from './ContactForm.module.css'


export function ContactForm() {
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts)
      
   const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const contact = {
      name: form.name.value,
      number: form.number.value
    };
    
    const isContactExist = contacts.some((c) => c.name === contact.name)
    if (isContactExist) {
      alert("Contact already exists!");
      form.reset();
    return;
    }

    dispatch(addContact(contact));

    form.reset();
  };


  


return (
         <div>
           <form className={styles.contactForm} onSubmit={handleFormSubmit}>
              <p>Name</p>
              <input
                className={styles.nameInput}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required                
              />
              <p>Number</p>
              <input
                className={styles.numberInput}
                type="tel"
                name="number"                
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required                             
              />
              <button className={styles.submitBtn} type='submit'>Add contact</button>
  
           </form>
          </div>
      );
}

