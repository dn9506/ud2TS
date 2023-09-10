import { createSlice } from '@reduxjs/toolkit'
import { DATA } from '../../data'
import { IPost } from '../../models/IPost'

interface IPostState {
	posts: IPost[]
}

const initState: IPostState = {
	posts: DATA,
}

const store = createSlice({
	name: 'Post',
	initialState: initState,
	reducers: {
		toggleBooked: (state, action: PostActions) => {
			state.posts.map(post =>
				post.id === action.payload.id
					? (post.booked = !post.booked)
					: (post.booked = !post.booked)
			)
		},
	},
})

export default store.reducer

interface postActionToggleBooked {
	type: 'toggleBooked'
	payload: IPost
}

type PostActions = postActionToggleBooked
