import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "./api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {postSlice} from "./slices/postSlice";
import {userSlice} from "./slices/userSlice";

const rootReducer = combineReducers({
    posts: postSlice.reducer,
    user: userSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch