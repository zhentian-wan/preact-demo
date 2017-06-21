import {h, Component} from 'preact';
import User from './User';
import {fetchUser} from './actions';
import {connect} from 'preact-redux';


export class Profile extends Component {

    componentDidMount() {
        const username = this.props.matches.user;
        this.props.fetchUser(username);
    }


    render({loading, userState, user}) {
        return (
            <div class="app">
                {(loading && !userState)
                    ? <p>Fetching {user}'s profile</p>
                    : <User name={userState.name} image={userState.avatar_url}></User>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userState: state.user,
        loading: state.loading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (username) => dispatch(fetchUser(username))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
