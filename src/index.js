import React from 'react';
import ReactDOM from'react-dom';
import Images from './Draggables';
import Droppables from './Droppables';
import { DragDropContext } from 'react-beautiful-dnd';
import data from './data';

class App extends React.Component {

    state = data;

    onDragEnd = (result) => {
        console.log(result);
        const draggedImg = result.draggableId;
        const droppedId = result.destination.droppableId.split('-')[1];

        if (draggedImg === droppedId) {
            
        }
    };

    render() {
        return (
           <DragDropContext onDragEnd={this.onDragEnd}>
               <Images imageSrc={this.state.images}/>
               <Droppables drops={this.state.droppables}/>
           </DragDropContext>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));