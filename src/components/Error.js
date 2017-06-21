import {h} from 'preact';
import {Link} from 'react-router-dom';

export default Error = () => (
    <div>
        <h2>Error!</h2>
        <Link to='/'>Home</Link>
    </div>
);