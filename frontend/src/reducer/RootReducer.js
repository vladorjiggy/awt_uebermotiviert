import { SHOW_LOGIN_DIALOG, LOGOUT_USER, HIDE_LOGIN_DIALOG, AUTHENTICATION_PENDING, AUTHENTICATION_SUCCESS, AUTHENTICATION_ERROR } from '../actions/actions';

const initialState = {
    user: null,
    loginPending: false,
    showLoginDialog: false,
    error: null,
    showRegisterDialog: false,
    showCreatePostDialog: false
};

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case SHOW_LOGIN_DIALOG:
            return {
                ...state,
                showLoginDialog: true,
                error: null
            }
        case HIDE_LOGIN_DIALOG:
            return {
                ...state,
                showLoginDialog: false,
                error: null
            }
        case AUTHENTICATION_PENDING:
            {
                return {
                    ...state,
                    pending: true,
                    error: null
                }
            }
        case AUTHENTICATION_SUCCESS:
            {
                return {
                    ...state,
                    showLoginDialog: false,
                    pending: false,
                    user: action.user,
                    accessToken: action.accessToken
                }
            }
        case AUTHENTICATION_ERROR:
            {
                return {
                    ...state,
                    pending: false,
                    error: 'Auth failed'
                }
            }
        case LOGOUT_USER:
            return {
                ...state,
                pending: false,
                loggedIn: false,
                error: null,
                user: null
            }

        default:
            return state;
    }
};
export default rootReducer;