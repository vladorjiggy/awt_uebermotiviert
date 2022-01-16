export const SHOW_REGISTER_DIALOG = 'SHOW_REGISTER_DIALOG';
export const HIDE_REGISTER_DIALOG = 'HIDE_REGISTER_DIALOG';
export const REGISTRATION_PENDING = 'REGISTRATION_PENDING';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';

export function getShowRegisterDialogAction() {
    return {
        type: SHOW_REGISTER_DIALOG
    }
}

export function getHideRegisterDialogAction() {
    return {
        type: HIDE_REGISTER_DIALOG
    }
}

export function getRegisterUserPendingAction() {
    return {
        type: REGISTRATION_PENDING
    }
}

export function getRegisterSuccessAction(userRegister) {
    return {
        type: REGISTRATION_SUCCESS,
        user: userRegister.user
    }
}

export function getRegisterErrorAction() {
    return {
        type: REGISTRATION_ERROR
    }
}

export function registerUser(userID, userName, password) {

    console.log("Register")

    return dispatch => {
        dispatch(getRegisterUserPendingAction());
        register(userID, userName, password)
            .then(
                userSession => {
                    const action = getRegisterSuccessAction(userSession);
                    dispatch(action);
                },
                error => {
                    dispatch(getRegisterErrorAction(error));
                }
            )
            .catch(error => {
                dispatch(getRegisterErrorAction(error));
            })
    }
}

function handleResponse(response) {

    const authorizationHeader = response.headers.get('Authorization');

    return response.text().then(text => {

        const data = text && JSON.parse(text);
        let token
        if (authorizationHeader) {
            token = authorizationHeader.split(" ")[1];
        }

        if (!response.ok) {
            if (response.status === 401) {
                //auto logout if 401 response returned from api
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

function register(userID,userName, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userID, userName, password})
    };

    console.log("User Name: " + userName)
    console.log("User: " + userID)
    console.log("Password: " + password)

    const url = process.env.REACT_APP_SERVERHOST + '/user/login';

    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(userRegister => {
            return userRegister;
        })
        .catch(e => console.log(e));
}