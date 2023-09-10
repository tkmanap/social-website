import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postSlice} from "./slices/postSlice";
import {userSlice} from "./slices/userSlice";

const rootReducer = combineReducers({
    posts: postSlice.reducer,
    user: userSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch