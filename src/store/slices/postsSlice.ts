import { createSlice } from '@reduxjs/toolkit'
import { DATA } from '../../data'
import { IPost } from '../../models/IPost'
import type { RootState } from '../store'

interface CounterState {
	posts: IPost[]
}

const initialState: CounterState = {
	posts: DATA,
}

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers(builder) {},
})

export const {} = postsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPosts = (state: RootState) => state.postsReducer

export default postsSlice.reducer
