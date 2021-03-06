import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Images from '../AnimalsGame/Draggables';
import { DragDropContext } from 'react-beautiful-dnd';
import data from './data';
import Confetti from 'react-confetti';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

const styles = theme => ({
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
        },
        backButton: {
            width: '60px', 
            height: '60px', 
            zIndex: 9999
        },
        arrowBack: {
            width: '60px', 
            height: '60px', 
            position: 'relative', 
            top: '-12px'
        },
        title: {
            backgroundColor: 'darkgrey', 
            display: 'inline-block', 
            marginBottom: '30px',
            marginLeft: '30px'
        }
    });

    

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

            const {classes} = this.props;

            return (
                <div className={classes.div}>
                <IconButton className={classes.backButton} aria-label="back"
                    onClick={this.props.backButtonClick}>
                    <ArrowBack className={classes.arrowBack} />
                </IconButton>
                <h1 className={classes.title}>
                    Ordena as imagens do mais pequeno para o maior!
                </h1>
                   <DragDropContext onDragEnd={this.onDragEnd} >
                         <div style={{marginLeft: '40px'}}>
                            <Images imageIds={this.state.imgData.imageIds}/>
                        </div>
                   </DragDropContext>
                   {this.isValid() ?
                        <Confetti
                            width={1300}
                            height={600}
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

OrderGame.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(OrderGame);