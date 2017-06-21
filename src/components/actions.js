const config = {
    url: 'https://api.github.com/users'
};

export function fetchUser(username) {
    return function (dispatch) {
        dispatch({type: 'FETCH_USER'});
        fetch(`${config.url}/${username}`)
            .then(resp => resp.json())
            .then(user => {
                dispatch({type: 'USER_FETCHED', payload: user})
            })
            .catch(err => console.error(err));
    }
}