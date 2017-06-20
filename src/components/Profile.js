import {h, Component} from 'preact';
import User from './User';


const config = {
    url: 'https://api.github.com/users'
};

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            user: null
        };
    }

    componentDidMount() {
        const username = this.props.match.params.user;
        fetch(`${config.url}/${username}`)
            .then(resp => resp.json())
            .then(user => {
                this.setState({
                                  user,
                                  loading: false
                              });
            })
            .catch(err => console.error(err));
    }


    render({user: username}, {loading, user: userState}) {
        return (
            <div class="app">
                {loading
                    ? <p>Fetching {username}'s profile</p>
                    : <User image={userState.avatar_url}
                            name={userState.name} />
                }
            </div>
        );
    }
}
