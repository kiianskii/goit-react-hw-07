import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://661d3fad98427bbbef01410b.mockapi.io/'


export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
	try {
		const { data } = await axios.get('contacts')
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const addContactThunk = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
	try {
		const { data } = await axios.post('contacts', contact)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
	try {
		const { data } = await axios.delete(`contacts/${id}`, id)
		return data.id
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})