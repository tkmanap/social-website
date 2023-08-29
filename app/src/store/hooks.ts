import {AppDispatch, RootState} from "./store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function useAuth() {
    const {email, token, id} = useAppSelector(state => state.user)
    return {
        isAuth:  !!email,
        email,
        token,
        id
    }
}