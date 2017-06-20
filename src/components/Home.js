import { h } from 'preact';
import {withRouter} from 'react-router-dom';

function search(router, query) {
    router.history.push(`/profile/${encodeURIComponent(query)}`);
}

const Home = withRouter((router) => {
    return (
        <section>
            <p>Enter a Github Username</p>
            <input type="search"
                   placeholder="username"
                   onSearch={e => search(router, e.target.value)}
            />
        </section>
    );
});

export default Home;