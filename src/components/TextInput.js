import {h, Component} from 'preact';
import linkState from 'linkstate';

export default class TextInput extends Component {
    render(props, {text = ''}) {
        return (
            <div>
                <input type="text" value={text} onInput={linkState(this, 'text')}/>
                <pre><code>{JSON.stringify(this.state, null, 2)}</code></pre>
            </div>
        )
    }
}