import base64 from 'base-64'
import { SHOW_LOGIN_DIALOG, HIDE_LOGIN_DIALOG, LOGOUT_USER, AUTHENTICATION_PENDING, AUTHENTICATION_SUCCESS, AUTHENTICATION_ERROR, } from './actions';

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

export function logoutUserAction()
{
    return {
        type: LOGOUT_USER
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
    return dispatch => {
        logout()
            .then(
                () => {
                    dispatch(logoutUserAction());
                },
                error => {
                    dispatch(getAuthenticationErrorAction(error));
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

    const url = process.env.REACT_APP_SERVERHOST + '/user/login';

    return fetch(url, requestOptions)
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

    const url = process.env.REACT_APP_SERVERHOST + '/user/logout';

        return fetch(url, options)
        .then(resp => resp.json())
        .then(resp => {
            return true
        })
        .catch(error => {
            return false
        })
}