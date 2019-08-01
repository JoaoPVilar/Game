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
import Confetti from 'react-confetti';

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
        container: {
            maxWidth: '500px',
            margin: 'auto',
        }
    });

class App extends React.Component {

    state = data;

    onDragEnd = (result) => {

        if (!result.destination) {
            return;
        }

        const draggedImg = result.draggableId;
        const droppedId = result.destination.droppableId.split('-')[1];

        if (draggedImg === droppedId) {
            const newImageIds = Array.from(this.state.imageIds);
            newImageIds.splice(result.source.index, 1);

            const newDropsIds = Array.from(this.state.droppablesIds);
            const dropId = parseInt(result.destination.droppableId.split('-')[2], 10);
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

            case 'lion':
                return <img src={Tiger} alt={'lion'} className={classes.img}/>;

            default:
                return <div />;
                
        }
    }

    isValid = () => {
        for (let i = 0; i < this.state.images.length; i++) {
            if (!this.state.droppablesIds[i + 1]) {
                return false;
            }
        }

        return true;
    }

    render() {

        return (
            <div style={{marginLeft: '200px', marginTop: '100px'}}>
            <h1 style={{backgroundColor: 'darkgrey', display: 'inline-block', marginBottom: '30px'}}>
                Corresponde as imagens aos sitios certos!
            </h1>
           <DragDropContext onDragEnd={this.onDragEnd} >
               {this.isValid() ?
                    <Confetti
                        width={1300}
                        height={800}
                    />
                :
                <div />
                }
                 <div style={{marginLeft: '40px'}}>
                        <Images imageSrc={this.state.images} imageIds={this.state.imageIds}
                                getImages={this.getImages}/>
                    </div>
                    <Droppables drops={this.state.droppables} dropsIds={this.state.droppablesIds}
                        getImages={this.getImages}/>
               
           </DragDropContext>
           </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));