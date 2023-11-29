import { combineReducers, configureStore } from '@reduxjs/toolkit'
import postsReducer from './slice/postsSlice'

const rootReducer = combineReducers({
	postsReducer,
})

const store = () =>
	configureStore({
		reducer: {
			posts: postsReducer,
		},
	})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
