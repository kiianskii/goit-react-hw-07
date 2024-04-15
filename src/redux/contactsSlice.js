
import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from './contactsOps'

const initialState = {
	contacts: [],

	// isLoading: false,
	// isError: false,
}

const sliceContacts = createSlice({
	name: 'contacts',
	initialState,
	selectors: {
		selectContacts: state => state.contacts,
	},
	
	extraReducers: builder => {
		builder
			.addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
				state.contacts = payload
			})
			.addCase(addContactThunk.fulfilled, (state, { payload }) => {
				state.contacts.push(payload)
			})
			.addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
				state.contacts = state.contacts.filter(item => item.id !== payload)
			})
			.addMatcher(isAnyOf(fetchContactsThunk.rejected, addContactThunk.rejected, deleteContactThunk.rejected), (state, { payload }) => {
				state.isError = payload
				})
	},

})

export const contactsReducer = sliceContacts.reducer

export const { selectContacts } = sliceContacts.selectors
