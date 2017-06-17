import {h, Component} from 'preact';
import User from './User';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            user: null
        };
    }

    componentDidMount() {
        fetch(this.props.config.urls.user)
            .then(resp => resp.json())
            .then(user => {
                this.setState({
                                  user,
                                  loading: false
                              });
            })
            .catch(err => console.error(err));
    }

   // render(props, state) {
    render({config}, {loading, user}) {
        return (
            <div class="app">
                {loading
                    ? <p>Fetching {config.urls.user}</p>
                    : <User image={user.avatar_url}
                            name={user.name} />
                }
            </div>
        );
    }
}
