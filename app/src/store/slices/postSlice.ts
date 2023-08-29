import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface iPost {
    id: string,
    description: string,
    like: number
}

const initialState = [] as iPost[]

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        createPost: {
            reducer: (state, action: PayloadAction<iPost>) => {
                state.push(action.payload)
            },
            prepare: (description: string) => ({
                payload: {
                    id: nanoid(),
                    description,
                    like: 0,
                } as iPost,
            })
        },
        removePost(state, action: PayloadAction<string>) {
            const index = state.findIndex(t => t.id === action.payload)
            state.splice(index, 1)
        },
    }
})

export const selectPost = (state: RootState) => state.posts
export const {createPost} = postSlice.actions