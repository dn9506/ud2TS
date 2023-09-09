import { createSlice } from '@reduxjs/toolkit'
import { DATA } from '../../data'
import { IPost } from '../../models/IPost'

interface IPostState {
	posts: IPost[]
	isLoading: boolean
	error: string
}

const initState: IPostState = {
	posts: DATA,
	isLoading: false,
	error: '',
}

const store = createSlice({
	name: 'Post',
	initialState: initState,
	reducers: {
		toggleBooked: (state, action) => {},
	},
})

export default store.reducer
