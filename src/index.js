import React from 'react';
import ReactDOM from'react-dom';
import Images from './Draggables';
import Droppables from './Droppables';
import { DragDropContext } from 'react-beautiful-dnd';
import data from './data';

class App extends React.Component {

    state = data;

    render() {
        return (
           <DragDropContext >
               <Images imageSrc={this.state.images}/>
               <Droppables />
           </DragDropContext>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));