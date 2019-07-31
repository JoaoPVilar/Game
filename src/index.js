import React from 'react';
import ReactDOM from'react-dom';
import Images from './draggables';
import { DragDropContext } from 'react-beautiful-dnd';
import data from './data';

class App extends React.Component {

    state = data;

    render() {
        return (
           <DragDropContext >
               <Images />
           </DragDropContext>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));