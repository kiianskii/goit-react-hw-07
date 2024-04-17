import { useDispatch, useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"
import {  selectIsError, selectIsLoading } from "../../redux/contactsSlice"
import { selectFilter } from "../../redux/filtersSlice"
import { useEffect } from "react"
import { fetchContactsThunk } from "../../redux/contactsOps"
import { selectFilteredContacts } from "../../redux/selectors"


function ContactList() {
	const searchStr = useSelector(selectFilter)
	const isLoading = useSelector(selectIsLoading)
	const filteredData = useSelector(selectFilteredContacts)
	const isError = useSelector(selectIsError)

  const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(fetchContactsThunk())
	}, [dispatch])

	if (isLoading) {
	return <h3 className={s.header}>Loading, please wait...</h3>
	}   
	else if (!filteredData.length && searchStr) {
		return <h2 className={s.header}>Contact you searching doesn`t exist</h2>
	} else if (!filteredData.length) {
		return <h2 className={s.header}>No available contacts...</h2>
	}
    return (
        <>
			<h2 className={s.header}>Phonebook</h2>
		{!isError ? <ul>
			{filteredData.map(contact => (
                <Contact key={contact.id} contact={contact} />
			))}
            </ul> : <h2 className={s.header}>Something went wrong, please try again</h2>}
         </>
	)
}

export default ContactList