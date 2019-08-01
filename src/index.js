import React from 'react';
import ReactDOM from'react-dom';
import Images from './Draggables';
import Droppables from './Droppables';
import { DragDropContext } from 'react-beautiful-dnd';
import data from './data';
import Cat from './cat.png';
import Dog from './dog.png';
import Giraffe from './giraffe.png';
import Bear from './bear.png';
import Tiger from './tiger.jpg';
import { makeStyles } from '@material-ui/core/styles';

const styles =
    makeStyles({
        root: {
            flexGrow: 1,
          },  
          img: {
            height: '100px',
            width: '100px'
        }, 
        card: {
            minWidth: 100,
            width: '5%',
            height: '130%',
            marginLeft: '40px',
            marginTop: '40px'
        },
    });

class App extends React.Component {

    state = data;

    onDragEnd = (result) => {

        const draggedImg = result.draggableId;
        const droppedId = result.destination.droppableId.split('-')[1];

        if (!result.destination) {
            return;
        }

        if (draggedImg === droppedId) {
            const newImageIds = Array.from(this.state.imageIds);
            newImageIds.splice(result.source.index, 1);

            const newDropsIds = Array.from(this.state.droppablesIds);
            const dropId = parseInt(result.destination.droppableId.split('-')[2], 10);
            /* newDropsIds.splice(dropId, 0, draggedImg); */
            newDropsIds[dropId] = draggedImg;

            const newState = {
                ...this.state,
                imageIds: newImageIds,
                droppablesIds: newDropsIds
            };

            this.setState(newState);

            return;
        }

        else if (result.source.droppableId === result.destination.dropppableId) {
            console.log('wow!');
            return;
        }
    };

    getImages = (type) => {
        const classes = styles();
        switch(type) {
            case 'cat':
                return <img src={Cat} alt={'cat'} className={classes.img}/>;

            case 'dog':
                return <img src={Dog} alt={'dog'} className={classes.img}/>;

            case 'bear':
                return <img src={Bear} alt={'bear'} className={classes.img}/>;

            case 'giraffe':
                return <img src={Giraffe} alt={'giraffe'} className={classes.img}/>;

            case 'tiger':
                return <img src={Tiger} alt={'tiger'} className={classes.img}/>;

            default:
                return <div />;
                
        }
    }

    render() {
        return (
           <DragDropContext onDragEnd={this.onDragEnd}>
               <Images imageSrc={this.state.images} imageIds={this.state.imageIds}
                    getImages={this.getImages}/>
               <Droppables drops={this.state.droppables} dropsIds={this.state.droppablesIds}
                    getImages={this.getImages}/>
           </DragDropContext>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));