import { createSlice } from '@reduxjs/toolkit'
import { DATA } from '../../data'

interface IPostState {
	id: string
	img: string
	text: string
	date: string
	booked: boolean
}

const initState: IPostState[] = {
	...DATA,
}
const state = createSlice({
	name: 'Post',
	initialState: initState,
	reducers: {
		bookChange: state => {},
	},
})
