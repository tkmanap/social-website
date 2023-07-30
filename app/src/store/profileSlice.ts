import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface iPost {
    id: string
    title: string
    description: string
    liked: number
}

const initialState = [] as iPost[]

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<iPost>) => {
            state.push(action.payload)
        }
    }
})

export const {addPost} = profileSlice.actions