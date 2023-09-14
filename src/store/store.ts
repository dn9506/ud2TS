import { combineReducers, configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'

const rootReducer = combineReducers({})

export const store = configureStore({
	reducer: {
		postsReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
