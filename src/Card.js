import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Cat from './cat.png';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';

const styles =
    makeStyles({
        img: {
            height: '100px',
            width: '100px'
        }, 
        card: {
            minWidth: 100,
            width: '5%',
            height: '130%',
            marginLeft: '40px'
        },
    });

class Cards extends React.Component {

    loadItems = () => {
        const classes = styles();
        return(
            <Draggable draggableId={1} index={1}>
            {(provided, snapshot) => (
            <Card className={classes.card}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
                <div className={classNames("card")}>
                    <img src={Cat} alt={'cat'} className={classes.img}/>
                </div>   
            </Card>)}
            
            </Draggable>
        );
    }

    render(){
        return (
            <Droppable droppableId={'droppable'}>
                {(provided, snapshot) => (
                    <div ref={provided.innerRef}
                        {...provided.droppableProps}>
                        {this.loadItems()}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>);
    }
}

const CardStyles = withStyles(styles)(Cards);
export default CardStyles;