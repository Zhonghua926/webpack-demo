import React from 'react';
import ReactDOM from 'react-dom';

import styles from './index.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <a>hello</a>
                <h1 className={styles.h1}>HELLO</h1>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));