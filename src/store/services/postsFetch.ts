import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const postsApi = createApi({
	reducerPath: 'postApi',
	baseQuery: fetchBaseQuery({
		baseUrl:
			'https://ud2ts-7b4e7-default-rtdb.europe-west1.firebasedatabase.app/',
	}),
	tagTypes: ['Post'],
	endpoints: build => ({
		fetchAllPosts: build.query({ query: () => ({ url: '/DB' }) }),
	}),
})
