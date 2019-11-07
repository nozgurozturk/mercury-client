import React from 'react'
import {IAuthState} from '../reducer/AuthReducer'

export type AuthContextProps = {
    state : IAuthState
    dispatch: ({type, payload}:{type:any, payload:any}) => void;
}

export const AuthContext = React.createContext({} as AuthContextProps)


