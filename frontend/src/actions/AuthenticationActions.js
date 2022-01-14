import base64 from 'base-64'

export const SHOW_LOGIN_DIALOG = 'SHOW_LOGIN_DIALOG';
export const HIDE_LOGIN_DIALOG = "HIDE_LOGIN_DIALOG";

export const AUTHENTICATION_PENDING = "AUTHENTICATION_PENDING";
export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";
export const USER_LOGOUT = "LOGOUT";



export const LOGOUT_USER = "LOGOUT_USER"

export function logoutUserAction()
{
    return {
        type: LOGOUT_USER
    }
}

export function getShowLoginDialogAction()
{
    return {
        type: SHOW_LOGIN_DIALOG
    }
}

export function getHideLoginDialogAction(){
return{
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
            accessToken: userSession.accessToken
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

export function authenticateUser(userID, password){
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

export function logoutUser() {
    console.log('logoutrigger')

    return dispatch => {
        logout()
            .then(
                () => {
                    dispatch(logoutUserAction());
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
        method: 'POST',
        credentials: 'include',
        headers: {
           'Authorization' : "Basic " + base64.encode(userID+ ":" + password)
        }
        
    }
    return fetch('http://localhost:4000/user/login', requestOptions)
    .then(handleResponse)
    .then(userSession => {
        return userSession
    })
}

function handleResponse(response) {

    const authorizationHeader = response.headers.get('Authorization');

    return response.text().then(text => {

        const data = text && JSON.parse(text);
        let token
        if (authorizationHeader) {
            token = authorizationHeader.split(" ")[1];
        }

        if(!response.ok) {
            console.log('true')
            if(response.status === 401) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        else {
            let userRegister = {
                user: data,
                accessToken: token
            }
            return userRegister;
        }
    });
}

function logout(){
    let options = {
        method: 'POST',
        credentials: 'include'
    }
        return fetch('http://localhost:4000/user/logout', options)
        .then(resp => resp.json())
        .then(resp => {
            return true
        })
        .catch(error => {
            return false
        })
}