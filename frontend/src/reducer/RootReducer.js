import * as authenticationActions from '../actions/AuthenticationActions'

const initialState = {
    user: null,
    loginPending: false,
    showLoginDialog: false,
    error: null

    // loggedIn: false
};
function rootReducer(state = initialState, action) {
    console.log("Bin im Reducer: " + action.type)


    switch (action.type) {
        case authenticationActions.SHOW_LOGIN_DIALOG:
            return {
                ...state,
                showLoginDialog: true,
                error: null
            }
        case authenticationActions.AUTHENTICATION_PENDING:
            return{
                ...state,
                pending: true,
                error: null
            }
        case authenticationActions.AUTHENTICATION_SUCCESS:
            return {
                ...state,
                showLoginDialog: false,
                pending: false,
                user: action.user,
                loggedIn: true, // weg?
                accessToken: action.accessToken
            }
        case authenticationActions.HIDE_LOGIN_DIALOG:
            return {
                ...state,
                pending: false,
                loggedIn: false,
                error: "Authentication failed"
            }
        default:
            return state;
    }
};
export default rootReducer;