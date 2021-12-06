import * as authenticationActions from '../actions/AuthenticationActions'
const initialState = {
    user: null,
    loggedIn: false,
    error: null
};
function rootReducer(state = initialState, action) {
    console.log("Bin im Reducer: ",action)


    switch (action.type) {
        case authenticationActions.AUTHENTICATION_SUCCESS:
            return {
                ...state,
                user: action.user,
                loggedIn: true,
                accessToken: action.accessToken
            }
        case authenticationActions.AUTHENTICATION_ERROR:
            return {
                ...state,
                loggedIn: false,
                error: "Auth failed"
            }
            
        default:
            return state
    }
};
export default rootReducer;