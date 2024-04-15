import { useDispatch, useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"
import { deleteContact, selectContacts } from "../../redux/contactsSlice"
import { selectFilter } from "../../redux/filtersSlice"


function ContactList() {
    const contacts = useSelector(selectContacts)
    const searchStr = useSelector(selectFilter)

  const dispatch = useDispatch()
	
 const handleDelete = id => {
     dispatch(deleteContact(id))
    }


  const getFilteredData = () => {
		return contacts.filter(
			item =>
				item.name.toLowerCase().includes(searchStr.toLowerCase())
		)
	}
  const filteredData = getFilteredData();

          if (!filteredData.length && searchStr) {
		return <h2 className={s.header}>Contact you searching doesn`t exist</h2>
	} else if (!filteredData.length) {
		return <h2 className={s.header}>No available contacts...</h2>
	}
    return (
        <>
			<h2 className={s.header}>Phonebook</h2>
		<ul>
			{filteredData.map(contact => (
                <Contact key={contact.id} contact={contact} handleDelete={handleDelete} />
			))}
            </ul>
         </>
	)
}

export default ContactList