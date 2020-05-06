import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'social-network/app/INITIALIZED_SUCCESS';


type InitialStateType = typeof initialState;


let initialState= {
    initialized: false
};

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}


type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS //'INITIALIZED_SUCCESS'
}

export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}


export default appReducer;