
type WorkSpaceActionType = {
    type: 'SET_WORKSPACE',
    payload?: any
}

export type IWorkSpaceState = {
    workspaceId: number | null
}

export const initialWSState: IWorkSpaceState = {
    workspaceId: null
}

export const WorkSpaceReducer = (state: IWorkSpaceState, action: WorkSpaceActionType) => {
    switch (action.type) {
        case 'SET_WORKSPACE':
            return { ...state, workspaceId: action.payload }
        default:
            return state
    }
}