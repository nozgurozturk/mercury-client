import React from 'react'
import {IWorkSpaceState} from '../reducer/WorkspaceReducer'

export type WorkSpaceContextProps = {
    workspace : IWorkSpaceState
    workspaceDispatch: ({type, payload}:{type:any, payload:any}) => void;
}

export const WorkSpaceContext = React.createContext({} as WorkSpaceContextProps)


