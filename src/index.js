import React from 'react';
import ReactDOM from'react-dom';
/* import { makeStyles } from '@material-ui/core/styles'; */
import MenuStyles from './Menu';

/* const styles =
    makeStyles({
    });
 */
class App extends React.Component {

    
    render() {

        return (
            <MenuStyles />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));