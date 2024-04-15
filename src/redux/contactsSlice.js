import contacts from '../assets/contacts.json'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	contacts,
}

const sliceContacts = createSlice({
	name: 'contacts',
	initialState,
	selectors: {
		selectContacts: state => state.contacts,
	},
	reducers: {
		addNewContact: (state, { payload }) => {
			state.contacts.push(payload)
		},
		deleteContact: (state, { payload }) => {
			state.contacts = state.contacts.filter(item => item.id !== payload)
		},
	
	},
})

export const contactsReducer = sliceContacts.reducer
export const { addNewContact, deleteContact } = sliceContacts.actions
export const { selectContacts } = sliceContacts.selectors
