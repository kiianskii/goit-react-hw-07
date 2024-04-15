import { useDispatch } from "react-redux"
import s from "./Contact.module.css"
import { deleteContactThunk } from "../../redux/contactsOps"

function Contact({ contact }) {
  const dispatch = useDispatch()
  return (
      <li className={s.item}>
          <h3>Name: {contact.name}</h3> 
          <p>Tel: {contact.number}</p> 
         <button onClick={() => dispatch(deleteContactThunk(contact.id))}>Delete</button>
    </li>
  )
}

export default Contact