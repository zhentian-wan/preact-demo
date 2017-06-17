import {h} from 'preact';
import { Router } from 'preact-router';
import Profile from './Profile';
import Home from './Home';
import Error from './Error';

export default function App() {
    return (
        <Router>
            <Home path="/" />
            <Profile path="/profile/:user"/>
            <Error default/>
        </Router>
    );
}
