import base64 from 'base-64'

export const SHOW_LOGIN_DIALOG = 'SHOW_LOGIN_DIALOG';
export const HIDE_LOGIN_DIALOG = "HIDE_LOGIN_DIALOG";

export const AUTHENTICATION_PENDING = "AUTHENTICATION_PENDING";
export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";
export const USER_LOGOUT = "LOGOUT";




export function getShowLoginDialogAction(){
    return{
        type: SHOW_LOGIN_DIALOG
    }
}

export function getHideLoginDialogAction() {
    return {
        type: HIDE_LOGIN_DIALOG
    }
}

export function getAuthenticateUserPendingAction(){
    return{
            type: AUTHENTICATION_PENDING
    }
}

export function getAuthenticationSuccessAction(userSession){
    return{
            type: AUTHENTICATION_SUCCESS,
            user: userSession.user,
            accesToken: userSession.accesToken

    }
}

export function getAuthenticationErrorAction(error){
    return{
            type: AUTHENTICATION_ERROR,
            error: error

    }
}

export function getUserLogout(){
    return{
        type: USER_LOGOUT
    }
}

export function authenticateUser(userID, password) {
    
    console.log("Authenticate")
    console.log(userID, password)

    return dispatch => {
        dispatch(getAuthenticateUserPendingAction());
        login(userID, password)
        .then(
            userSession => {
                const action = getAuthenticationSuccessAction(userSession)
                dispatch(action)
                return true
            },
            error => {
                dispatch(getAuthenticationErrorAction(error))
                return false
            }
        )
        .catch(error => {
            dispatch(getAuthenticationErrorAction(error))
        })
    }
}

function login(userID, password){
    const requestOptions = {
        method: 'POST',
        headers: {
           'Authorization' : "Basic " + base64.encode(userID+ ":" + password)
        }
        
    }
    return fetch('http://localhost:8080/auth/login', requestOptions)
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

        if (!response.ok){
            if (response.status ===401){
                logout()
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

