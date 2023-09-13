import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DATA } from '../../data'
import { IPost } from '../../models/IPost'

interface IPostState {
	posts: IPost[]
}
type postActionToggleBooked = { id: string }

type PostActions = postActionToggleBooked

const initialState: IPostState = {
	posts: DATA,
}

const postsStore = createSlice({
	name: 'post',
	initialState,
	reducers: {
		toggleBooked: (state, action: PayloadAction<PostActions>) => {
			state.posts.map(post =>
				post.id === action.payload.id
					? (post.booked = !post.booked)
					: (post.booked = !post.booked)
			)
		},
	},
})

export const postsStoreActions = postsStore.actions
export default postsStore.reducer
