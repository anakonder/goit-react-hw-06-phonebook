import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { deleteContact } from "redux/contactSlice";

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    

    const filterContacts = (filterValues) => {
         return contacts.filter((contact) => contact.name.toLowerCase().includes(filterValues))
    }

    const handleDelete = (contactId) => {dispatch(deleteContact(contactId))};

    return (

        <ul>            
                {filterContacts(filter).map((contact) => (
                    <li key={contact.id}>
                        <span>{contact.name} {contact.number}</span>
                        <button type="button" onClick={() => handleDelete(contact.id)}>Delete</button>
                    </li>
                    ))}             
        </ul>
    )
}

