import config from "../config/default.json";
const connectionString = config.connectionString;

export const SHOW_CREATE_POST_DIALOG = 'SHOW_CREATE_BLOGPOST_DIALOG';
export const HIDE_CREATE_POST_DIALOG = 'HIDE_CREATE_BLOGPOST_DIALOG';
export const CREATE_POST_PENDING = 'CREATE_BLOGPOST_PENDING';
export const CREATE_POST_SUCCESS = 'CREATE_BLOGPOST_SUCCESS';
export const CREATE_POST_ERROR = 'CREATE_BLOGPOST_ERROR';

export function getShowCreatePostDialogAction() {
    return {
        type: SHOW_CREATE_POST_DIALOG
    }
}

export function getHideCreatePostDialogAction() {
    return {
        type: HIDE_CREATE_POST_DIALOG
    }
}

export function getCreatePostPendingAction() {
    return {
        type: CREATE_POST_PENDING
    }
}

export function getCreatePostSuccessAction(userRegister) {
    return {
        type: CREATE_POST_SUCCESS,
        //user: userRegister.user
    }
}

export function getCreatePostErrorAction() {
    return {
        type: CREATE_POST_ERROR
    }
}

export function createPost(accessToken, title, content, categories, post_image){
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : "Bearer " + accessToken
        },
        body: JSON.stringify({ title, content, categories, post_image }) // testen
    }

    return fetch(connectionString + 'post/create', requestOptions)
}