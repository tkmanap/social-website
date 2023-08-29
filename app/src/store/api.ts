import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: ' http://localhost:3000'}),
    tagTypes: ['Post'],
    endpoints: builder => ({
        getPost: builder.query({
            query: () => `/posts`,
            providesTags: ['Post']
        }),
        addNewPost: builder.mutation({
            query: (payload) => ({
                url: '/posts',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['Post'],
        }),
    })
})

export const {useGetPostQuery, useAddNewPostMutation} = apiSlice