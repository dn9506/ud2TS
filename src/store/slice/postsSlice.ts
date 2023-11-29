import { createSlice } from '@reduxjs/toolkit'
import { IPost } from '../../model/IPost'

const initialState: IPost[] = []

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
})

export const {} = postsSlice.actions

export default postsSlice.reducer
