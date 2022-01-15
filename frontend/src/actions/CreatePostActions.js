
export function createPost(accessToken, title, content, categories, post_image){
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : "Bearer " + accessToken  // es gibt kein accessToken
        },
        body: JSON.stringify({ title, content, categories, post_image }) // testen
    }

    const url = process.env.REACT_APP_SERVERHOST + '/post/create';

    return fetch(url, requestOptions)
}