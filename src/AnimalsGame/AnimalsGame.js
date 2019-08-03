import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import Images from './Draggables';
import Droppables from './Droppables';
import { DragDropContext } from 'react-beautiful-dnd';
import data from './data';
import Cat from './images/cat.png';
import Dog from './images/dog.png';
import Giraffe from './images/giraffe.png';
import Bear from './images/bear.png';
import Tiger from './images/tiger.jpg';
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

    

class AnimalsGame extends React.Component {

    constructor(props) {
        super(props);

        let initialDrops = data.droppables;
        let initialImageIds = data.imageIds;
        initialDrops = this.shuffle(initialDrops);
        initialImageIds = this.shuffle(initialImageIds);

        const initialData = {
            ...data,
            droppables: initialDrops,
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
        

        isValid = () => {
            for (let i = 0; i < this.state.imgData.images.length; i++) {
                if (!this.state.imgData.droppablesIds[i + 1]) {
                    return false;
                }
            }
    
            return true;
        }

        getImages = (type) => {
            switch(type) {
                case 'cat':
                    return <img src={Cat} alt={'cat'} 
                    style={{height: '100px', width: '100px'}}/>;
    
                case 'dog':
                    return <img src={Dog} alt={'dog'}
                    style={{height: '100px', width: '100px'}}/>;
    
                case 'bear':
                    return <img src={Bear} alt={'bear'}
                    style={{height: '100px', width: '100px'}}/>;
    
                case 'giraffe':
                    return <img src={Giraffe} alt={'giraffe'} 
                    style={{height: '100px', width: '100px'}}/>;
    
                case 'lion':
                    return <img src={Tiger} alt={'lion'}
                    style={{height: '100px', width: '100px'}}/>;
    
                default:
                    return <div />;
                    
            }
        }

        onDragEnd = (result) => {

            if (!result.destination) {
                return;
            }
    
            const draggedImg = result.draggableId;
            const droppedId = result.destination.droppableId.split('-')[1];
    
            if (draggedImg === droppedId) {
                const newImageIds = Array.from(this.state.imgData.imageIds);
                newImageIds.splice(result.source.index, 1);
    
                const newDropsIds = Array.from(this.state.imgData.droppablesIds);
                const dropId = parseInt(result.destination.droppableId.split('-')[2], 10);
                newDropsIds[dropId] = draggedImg;
    
                const newState = {
                    ...this.state,
                    imgData: {
                        ...this.state.imgData,
                        imageIds: newImageIds,
                        droppablesIds: newDropsIds
                    }
                };
    
                this.setState(newState);
    
                return;
            }
    
            else if (result.source.droppableId === result.destination.droppableId) {
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

        render() {

            const {classes} = this.props;

            return (
                <div className={classes.div}>
                <IconButton className={classes.backButton} aria-label="back"
                    onClick={this.props.backButtonClick}>
                    <ArrowBack className={classes.arrowBack} />
                </IconButton>
                <h1 className={classes.title}>
                    Corresponde as imagens aos sitios certos!
                </h1>
                   <DragDropContext onDragEnd={this.onDragEnd} >
                         <div style={{marginLeft: '40px'}}>
                            <Images imageSrc={this.state.imgData.images} 
                                    imageIds={this.state.imgData.imageIds}
                                    getImages={this.getImages}/>
                        </div>
                        <Droppables drops={this.state.imgData.droppables} 
                            dropsIds={this.state.imgData.droppablesIds}
                            getImages={this.getImages}/>
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

AnimalsGame.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AnimalsGame);