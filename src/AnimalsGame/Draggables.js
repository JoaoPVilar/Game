import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
            maxHeight: '100px',
            width: '5%',
            height: '130%',
            marginLeft: '40px',
            marginTop: '40px'
        },
    });

class Images extends React.Component {


    loadItems = () => {
        const classes = styles();

        return this.props.imageIds.map((image, index) => {

            return (
                <Draggable draggableId={`${image}`} 
                index={parseInt(index, 10)}
                key={`${image}`} style={{maxHeight: '100px'}}>
                {(provided, snapshot) => (
                <Card className={classes.card}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <div className={classNames("card")}>
                        {this.props.getImages(image)}
                    </div>   
                </Card>)}
                
                </Draggable>
            );
        });

    }

    render() {

        return (
          
            <Droppable droppableId={'droppable'} direction={'horizontal'} >
                {(provided, snapshot) => (
                    <div ref={provided.innerRef}
                        {...provided.droppableProps}>
                        <Grid container spacing={2}>
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
