type AuthActionType = {
    type: 'LOGIN' | 'LOGOUT'
    payload? : any
}

export type IAuthState ={
    authenticated : boolean
    userID : number | null
    token : string | null
}

export const initialAuthState : IAuthState={
    authenticated:false,
    userID:null,
    token:null
}

export const AuthReducer = (state: IAuthState, action: AuthActionType) => {
    switch (action.type) {
        case 'LOGIN':
            if(!localStorage.getItem('user')){
                localStorage.setItem("user", JSON.stringify(action.payload.user.id))
                localStorage.setItem("token", JSON.stringify(action.payload.user.token))
                return {
                    ...state,
                    authenticated: true,
                    userID: action.payload.user.id,
                    token: action.payload.user.token
                }
            }else{
                return{
                    ...state,
                    authenticated:true,
                    userID:localStorage.getItem('user'),
                    token : localStorage.getItem('token')
                }
            }
        case 'LOGOUT':
            localStorage.clear()
            return {
                ...state,
                authenticated: false,
                userID: null,
                token: null
            }
        default:
            return state
    }
}