import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {profileSlice} from "./profileSlice";

const rootReducer = combineReducers({
    profile: profileSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch