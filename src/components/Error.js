import {h} from 'preact';
import {route} from 'preact-router';

const back = (e) => {
    route('/');
};

export default Error = () => (
    <div>
        <h2>Error!</h2>
        <button onClick={e => back(e)}>Home</button>
    </div>
);