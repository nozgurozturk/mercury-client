import { IWorkspace } from "../../components/Workspace"


type WorkSpaceActionType = {
    type: 'SET_WORKSPACE',
    payload?: any
}

export type IWorkSpaceState = {
    workspaceId: number
}

export const initialWSState: IWorkSpaceState = {
    workspaceId: 0
}

export const WorkSpaceReducer = (state: IWorkSpaceState, action: WorkSpaceActionType) => {
    switch (action.type) {
        case 'SET_WORKSPACE':
            return { ...state, workspaceId: {...action.payload} }
        default:
            return state
    }
}