import s from "./Contact.module.css"

function Contact({contact, handleDelete}) {
  return (
      <li className={s.item}>
          <h3>Name: {contact.name}</h3> 
          <p>Tel: {contact.number}</p> 
         <button onClick={() => handleDelete(contact.id)}>Delete</button>
    </li>
  )
}

export default Contact