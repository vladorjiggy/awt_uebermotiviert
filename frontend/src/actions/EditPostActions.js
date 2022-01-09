import config from "../config/default.json";
const connectionString = config.connectionString;

export const SHOW_EDIT_POST_DIALOG = 'SHOW_CREATE_BLOGPOST_DIALOG';
export const HIDE_EDIT_POST_DIALOG = 'HIDE_CREATE_BLOGPOST_DIALOG';
export const EDIT_POST_PENDING = 'CREATE_BLOGPOST_PENDING';
export const EDIT_POST_SUCCESS = 'CREATE_BLOGPOST_SUCCESS';
export const EDIT_POST_ERROR = 'CREATE_BLOGPOST_ERROR';

export function getShowEditPostDialogAction() {
    return {
        type: SHOW_EDIT_POST_DIALOG
    }
}

export function getHideEditPostDialogAction() {
    return {
        type: HIDE_EDIT_POST_DIALOG
    }
}

export function getEditPostPendingAction() {
    return {
        type: EDIT_POST_PENDING
    }
}

export function getEditPostSuccessAction(userRegister) {
    return {
        type: EDIT_POST_SUCCESS,
        //user: userRegister.user
    }
}

export function getEditPostErrorAction() {
    return {
        type: EDIT_POST_ERROR
    }
}

export function editPost(accessToken, title, content, categories, post_image){
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : "Bearer " + accessToken // mit oder ohne??
        },
        body: JSON.stringify({ title, content, categories }) // testen
    }

    return fetch(connectionString + 'post/create', requestOptions)
}