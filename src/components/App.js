import {h} from 'preact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import Home from './Home';
import Error from './Error';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/profile/:user' component={Profile} />
                <Route component={Error}></Route>
            </Switch>
        </Router>
    );
}
