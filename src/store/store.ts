import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { postsApi } from './services/postsFetch'
import postsReducer from './slice/postsSlice'

const rootReducer = combineReducers({
	postsReducer,
})

export const store = () =>
	configureStore({
		reducer: {
			posts: postsReducer,
			[postsApi.reducerPath]: postsApi.reducer,
		},
		middleware: getDefaultMiddleware => {
			return getDefaultMiddleware().concat(postsApi.middleware)
		},
	})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
