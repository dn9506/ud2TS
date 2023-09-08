import { createSlice } from '@reduxjs/toolkit'
import { DATA } from '../../data'

interface IPostState {
	posts: {
		id: string
		img: string
		text: string
		date: string
		booked: boolean
	}[]
}

const initState: IPostState = {
	posts: DATA,
}

const store = createSlice({
	name: 'Post',
	initialState: initState,
	reducers: {
		toggleBooked: (state, action) => {},
	},
})
