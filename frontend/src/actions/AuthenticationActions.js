export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS"
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR"

export function getUserAuthSuccessAction(userSession){
    return {
        type: AUTHENTICATION_SUCCESS,
        user: userSession.user,
        accessToken: userSession.accessToken
    }
}

export function getUserAuthErrorAction(error){
    return {
        type: AUTHENTICATION_ERROR,
        error: error
    }
}

//test

export function authenticateUser(name, password){
    console.log(name, password)
    return dispatch => {
        return login(name, password)
        .then(
            userSession => {
                const action = getUserAuthSuccessAction(userSession)
                dispatch(action)
                return true
            },
            error => {
                dispatch(getUserAuthErrorAction(error))
                return false
            }
        )
        .catch(error => {
            dispatch(getUserAuthErrorAction(error))
        })
    }
}

function login(name, password){
    const requestOptions = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(name + ":" + password)
        }
    }
    return fetch('https://localhost/auth/login', requestOptions)
    .then(handleResponse)
    .then(userSession => {
        return userSession
    })
}

function handleResponse(response){
    
    const authorizationHeader = response.headers.get('Authorization')
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        let token
        if(authorizationHeader){
            token = authorizationHeader.split(" ")[1]
        }
        if(!response.ok){
            if(response.status === 401){
                logout()
            }
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }
        else{
            let userSession = {
                user: data,
                accessToken: token
            }
            return userSession
        }
    })
}

function logout(){
    console.log("logout")
}