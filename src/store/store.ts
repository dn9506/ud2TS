import { combineReducers, configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducer/post'

const rootReducer = combineReducers({
	posts: postsReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
