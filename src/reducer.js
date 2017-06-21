export default function (state, action) {
    switch (action.type) {
        case 'FETCH_USER':
            return {
                user: null,
                loading: true
            };
        case 'USER_FETCHED':
            return {
                user: action.payload,
                loading: false
            };

        default:
            return state;
    }
}