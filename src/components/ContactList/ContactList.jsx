import { useDispatch, useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"
import { selectContacts } from "../../redux/contactsSlice"
import { selectFilter } from "../../redux/filtersSlice"
import { useEffect } from "react"
import { fetchContactsThunk } from "../../redux/contactsOps"


function ContactList() {
    const contacts = useSelector(selectContacts)
	const searchStr = useSelector(selectFilter)

  const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(fetchContactsThunk())
	}, [dispatch])
	
//  const handleDelete = id => {
//      dispatch(deleteContactThunk(id))
//     }


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
                <Contact key={contact.id} contact={contact} />
			))}
            </ul>
         </>
	)
}

export default ContactList