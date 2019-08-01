import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Images from './Draggables';
import Droppables from './Droppables';
import { DragDropContext } from 'react-beautiful-dnd';
import data from './data';
import Cat from './cat.png';
import Dog from './dog.png';
import Giraffe from './giraffe.png';
import Bear from './bear.png';
import Tiger from './tiger.jpg';
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

    

class Menu extends React.Component {

        state = {
            showMenu: true,
            corrAnimalsClick: false,
            imgData: data
        };

        corrAnimalsClick = (event) => {
            this.setState({
                corrAnimalsClick: !this.state.corrAnimalsClick,
                showMenu: !this.state.showMenu
            });
        }

        backButtonClick = (event) => {
            this.setState({
                showMenu: !this.state.showMenu
            });
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
    
            else if (result.source.droppableId === result.destination.dropppableId) {
                console.log('wow!');
                return;
            }
        };

        render() {

            return (
                !this.state.showMenu ? 
                (
                    <div style={{marginLeft: '200px', marginTop: '100px'}}>
                    <IconButton style={{width: '60px', height: '60px'}} aria-label="back"
                        onClick={this.backButtonClick}>
                        <ArrowBack 
                        style={{width: '60px', height: '60px', position: 'relative', top: '-12px'}} />
                    </IconButton>
                    <h1 
                    style={{backgroundColor: 'darkgrey', display: 'inline-block', marginBottom: '30px',
                    marginLeft: '30px'}}>
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
                                <Images imageSrc={this.state.imgData.images} 
                                        imageIds={this.state.imgData.imageIds}
                                        getImages={this.getImages}/>
                            </div>
                            <Droppables drops={this.state.imgData.droppables} 
                                dropsIds={this.state.imgData.droppablesIds}
                                getImages={this.getImages}/>
                       
                   </DragDropContext>
                   </div>)
                   :
                (<div style={{marginLeft: '500px', marginTop: '200px'}}>
                    <h1 style={{fontSize: '-webkit-xxx-large'}}>Bem-vindo!</h1>
                    <h2>Escolhe um jogo:</h2>
                    <Grid container spacing={2} style={{marginTop: '30px'}}>
                        <Button variant="contained" color="primary" style={{marginRight: '30px'}}
                            onClick={this.corrAnimalsClick}>
                            Animais
                        </Button>
                        <Button variant="contained" color="primary" style={{marginRight: '30px'}}
                            onClick={this.corrAnimalsClick}>
                            Cores
                        </Button>
                        <Button variant="contained" color="primary" style={{marginRight: '30px'}}
                            onClick={this.corrAnimalsClick}>
                            Animais da Quinta
                        </Button>
                    </Grid>
                </div>)
                
            );
        }
        
}

const MenuStyles = withStyles(styles)(Menu);
export default MenuStyles;