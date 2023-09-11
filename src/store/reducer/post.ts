import { CaseReducer, createSlice } from '@reduxjs/toolkit'
import { DATA } from '../../data'
import { IPost } from '../../models/IPost'

interface IPostState {
	posts: IPost[]
}
interface postActionToggleBooked {
	type: 'toggleBooked'
	payload: IPost
}

type PostActions = postActionToggleBooked

const initState: IPostState = {
	posts: DATA,
}

const toggleBooked: CaseReducer<IPostState, PostActions> = (state, action) => {
	state.posts.map(post =>
		post.id === action.payload.id
			? (post.booked = !post.booked)
			: (post.booked = !post.booked)
	)
}

const store = createSlice({
	name: 'Post',
	initialState: initState,
	reducers: {
		toggleBooked,
	},
})

export default store.reducer
