import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import Images from '../AnimalsGame/Draggables';
import { DragDropContext } from 'react-beautiful-dnd';
import data from './data';
import Ant from './images/ant.jpg';
import Bridge from './images/bridge.jpg';
import Car from './images/car.jpg';
import Mouse from './images/mouse.png';
import Planet from './images/planet.jpg';
import Confetti from 'react-confetti';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

const styles =
    makeStyles(theme => ({
        button: {
            marginRight: '30px',
          },
        div: {
            marginLeft: '50px'
        },
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
    }));

    

class OrderGame extends React.Component {

    constructor(props) {
        super(props);

        let initialImageIds = data.imageIds;
        initialImageIds = this.shuffle(initialImageIds);

        const initialData = {
            ...data,
            imageIds: initialImageIds
        }

        this.state = {
            corrAnimalsClick: false,
            imgData: initialData
        };
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

        getImages = (type) => {
            switch(type) {
                case 'ant':
                    return <img src={Ant} alt={type} 
                    style={{height: '100px', width: '100px'}}/>;
    
                case 'bridge':
                    return <img src={Bridge} alt={type}
                    style={{height: '100px', width: '100px'}}/>;
    
                case 'car':
                    return <img src={Car} alt={type}
                    style={{height: '100px', width: '100px'}}/>;
    
                case 'mouse':
                    return <img src={Mouse} alt={type} 
                    style={{height: '100px', width: '100px'}}/>;
    
                case 'planet':
                    return <img src={Planet} alt={type}
                    style={{height: '100px', width: '100px'}}/>;
    
                default:
                    return <div />;
                    
            }
        }

        onDragEnd = (result) => {

            if (!result.destination) {
                return;
            }
    
            if (result.source.droppableId === result.destination.droppableId) {
                const newImageIds = Array.from(this.state.imgData.imageIds);
                newImageIds.splice(result.source.index, 1);
                newImageIds.splice(result.destination.index, 0, result.draggableId);

                const newState = {
                    ...this.state,
                    imgData: {
                        ...this.state.imgData,
                        imageIds: newImageIds
                    }
                };
    
                this.setState(newState);
                return;
            }
        };

        isValid = () => {
            console.log('state', this.state)
            const correctOrder = this.state.imgData.correctOrder;
            const currentOrder = this.state.imgData.imageIds;
            for (let i = 0; i < correctOrder.length; i++) {
                if (currentOrder[i] !== correctOrder[i]) {
                    return false;
                }
            }

            return true;
        }

        render() {

            return (
                    <div style={{position: 'absolute',
                    margin: 'auto',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    width: '1200px',
                    height: '-10px'}}>
                    <IconButton style={{width: '60px', height: '60px', zIndex: 9999}} aria-label="back"
                        onClick={this.props.backButtonClick}>
                        <ArrowBack 
                        style={{width: '60px', height: '60px', position: 'relative', top: '-12px'}} />
                    </IconButton>
                    <h1 
                    style={{backgroundColor: 'darkgrey', display: 'inline-block', marginBottom: '30px',
                    marginLeft: '30px'}}>
                        Ordena as imagens do mais pequeno para o maior!
                    </h1>
                   <DragDropContext onDragEnd={this.onDragEnd} >
                         <div style={{marginLeft: '40px'}}>
                            <Images imageIds={this.state.imgData.imageIds}
                                    getImages={this.getImages}/>
                        </div>
                   </DragDropContext>
                   {this.isValid() ?
                        <Confetti
                            width={1300}
                            height={800}
                            numberOfPieces={400}
                            recycle={false}
                        />
                        :
                        <div />
                    }
                   </div>
            );
        }
        
}

const OrderStyles = withStyles(styles)(OrderGame);
export default OrderStyles;