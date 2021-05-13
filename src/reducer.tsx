export interface User {
    id: number,
    username: string,
    created:string
}


export interface iStoreState  {
    loggedInUser: User | undefined,
    is_admin: boolean | undefined,

}


export type iStoreAction =
    | { type: 'set_logged_in_user', loggedInUser: User | undefined }
    | { type: 'is_admin', is_admin: boolean | undefined }
    | { type: 'logout', }


export const getInitialStoreState = (): iStoreState => {
    return {
        loggedInUser: undefined,
        is_admin: undefined,
    }
};

export function appReducer(state: iStoreState, action: iStoreAction): iStoreState {
    switch (action.type) {
        case 'set_logged_in_user':
            return {...state, loggedInUser: action.loggedInUser};
        case 'is_admin':
            return {...state, is_admin: action.is_admin};
        case 'logout':
            console.log("logout")
            return {...state, loggedInUser: undefined,is_admin: false};
        default:
            return {...state};
    }
}
