import config from "../config/default.json";
const connectionString = config.connectionString;

export const AUTHENTICATION_PENDING = "AUTHENTICATION_PENDING";
export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";

export const SHOW_LOGIN_DIALOG = "SHOW_LOGIN_DIALOG";
export const HIDE_LOGIN_DIALOG = "HIDE_LOGIN_DIALOG";

export function getShowLoginDialogAction()
{
    return {
        type: SHOW_LOGIN_DIALOG
    }
}

export function getHideLoginDialogAction() {
    return {
        type: HIDE_LOGIN_DIALOG
    }
}

export function getAuthenticateUserPendingAction() {
    return {
        type: AUTHENTICATION_PENDING,
    }
}

export function getAuthenticationSuccessAction(userSession) {
    return {
        type: AUTHENTICATION_SUCCESS,
        user: userSession.user,
        accessToken: userSession.accessToken,
    }
}

export function getAuthenticationErrorAction(error) {
    return {
        type: AUTHENTICATION_ERROR,
        error: error
    }
}

export function authenticateUser(userID, password) {
    
    console.log("Authenticate")
    console.log(userID, password)

    return dispatch => {
        dispatch(getAuthenticateUserPendingAction());
        /*return*/ login(userID, password)
            .then(
                userSession => {
                    const action = getAuthenticationSuccessAction(userSession);
                    dispatch(action);
                    // return true
                },
                error => {
                    dispatch(getAuthenticationErrorAction(error));
                    // return false
                }
            )
            .catch(error => {
                dispatch(getAuthenticationErrorAction(error));
        })
    }
}

function login(userID, password){
    const requestOptions = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userID, password })
    }

    return fetch(connectionString + 'authenticate/login', requestOptions) // wie heißt die Route?
    .then(handleResponse)
    .then(userSession => {
        return userSession
    })
}

function handleResponse(response){
    
    const authorizationHeader = response.headers.get('Authorization')

    return response.text().then(text => {
        console.log('Received result: ' + authorizationHeader);

        const data = text && JSON.parse(text);
        var token;
        if(authorizationHeader){
            token = authorizationHeader.split(" ")[1];
        }

        if(!response.ok) {
            if(response.status === 401) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        else{

            console.log(data)
            let userSession = {
                user: data,
                accessToken: token,
            }
            return userSession;
        }
    })
}

function logout(){
    console.error("Should logout user")
    localStorage.clear();
    window.location.href = '/';
}