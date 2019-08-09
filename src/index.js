import React from 'react';
import ReactDOM from'react-dom';
import Menu from './Menu';

class App extends React.Component {

    render() {

        return (
            <Menu />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));