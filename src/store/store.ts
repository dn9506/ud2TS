import { combineReducers, configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducer/post'

const rootReducer = combineReducers({
	postsReducer,
})

export const store = () =>
	configureStore({
		reducer: rootReducer,
	})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
