import * as authenticationActions from '../actions/AuthenticationActions'
import * as registrationActions from '../actions/RegistrationActions'
import * as createPostActions from '../actions/CreatePostActions'

const initialState = {
    user: null,
    loginPending: false,
    showLoginDialog: false,
    error: null,
    showRegisterDialog: false,
    showCreatePostDialog: false
};
function rootReducer(state = initialState, action) {
    console.log("Bin im Reducer: " + action.type)

    switch (action.type) {

        //Login
        case authenticationActions.SHOW_LOGIN_DIALOG:
            return {
                ...state,
                showLoginDialog: true,
                error: null
            }
        case authenticationActions.HIDE_LOGIN_DIALOG:
            return {
                ...state,
                showLoginDialog: false,
                error: null
            }
        case authenticationActions.AUTHENTICATION_PENDING:
            {
                return {
                    ...state,
                    pending: true,
                    error: null
                }
            }
        case authenticationActions.AUTHENTICATION_SUCCESS:
            {
                return {
                    ...state,
                    showLoginDialog: false,
                    pending: false,
                    user: action.user,
                    accessToken: action.accessToken
                }
            }
        case authenticationActions.AUTHENTICATION_ERROR:
            {
                return {
                    ...state,
                    pending: false,
                    error: 'Auth failed'
                }
            }

        case authenticationActions.USER_LOGOUT:
            {
                return{
                    ...state,
                    user: null,
                    accessToken: null
                }
            }

            //Create User
            case registrationActions.SHOW_REGISTER_DIALOG:
                return {
                    ...state,
                    showRegisterDialog: true,
                    error: null
                }
            case registrationActions.HIDE_REGISTER_DIALOG:
                return {
                    ...state,
                    showRegisterDialog: false,
                    error: null
                }
            case registrationActions.REGISTRATION_SUCCESS:
                return {
                    ...state,
                    showRegisterDialog: false,
                    pending: false,
                }
            case registrationActions.REGISTRATION_ERROR:
                {
                    return {
                        ...state,
                        pending: true,
                        error: 'Registration Failed'
                    }
                }
            
            //Create Post
            case createPostActions.SHOW_CREATE_POST_DIALOG:
                {
                return{
                    ...state,
                    showCreatePostDialog: true,
                    error: null
                }
            }

            case createPostActions.HIDE_CREATE_POST_DIALOG:
                return {
                    ...state,
                    showCreatePostDialog: false,
                    error: null
                }

            case createPostActions.CREATE_POST_PENDING:
                return{
                ...state,
                pending: true,
                error: null
                }
            
                
        default:
            return state;
    }
};
export default rootReducer;