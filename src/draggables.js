import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Cat from './cat.png';
import Dog from './dog.png';
import Giraffe from './giraffe.png';
import Bear from './bear.png';
import Tiger from './tiger.jpg';
import classNames from 'classnames';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Card from '@material-ui/core/Card';

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

class Images extends React.Component {

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

    loadItems = () => {
        const classes = styles();
        
        return this.props.imageSrc.map((image, index) => {
            
            return (
                <Draggable draggableId={`${image.content}`} 
                index={parseInt(index, 10)}
                key={index} >
                {(provided, snapshot) => (
                <Card className={classes.card}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <div className={classNames("card")}>
                        {this.getImages(image.content)}
                    </div>   
                </Card>)}
                
                </Draggable>
            );
        });

    }

    render() {

        return (
          
            <Droppable droppableId={'droppable'} direction={'horizontal'}>
                {(provided, snapshot) => (
                    <div ref={provided.innerRef}
                        {...provided.droppableProps}>
                        <Grid container style={{flexGrow: 1}} spacing={2}>
                            {this.loadItems()}
                        </Grid>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        );
    }
}

export default Images;