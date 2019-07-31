import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Cat from './cat.png';
import classNames from 'classnames';

const styles = (theme) =>
    createStyles({
        img: {
            height: '50px',
            width: '50px'
        }
    });

class Card extends React.Component {

    loadItems = () => {
        return(
            <Draggable draggableId={1} index={1}>
            {(provided, snapshot) => (
            <div className="ui cards"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
                <div className={classNames("card", styles.img)}>
                    <img src={Cat} alt={'cat'}/>
                </div>   
            </div>)}
            
            </Draggable>
        );
    }

    render(){
        return (
            <Droppable droppableId={'droppable'}>
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} style={{
                        minHeight: '100vh', width: 'calc(100% - 20% - 290px)',
                        float: 'left', marginLeft: '270px', marginRight: '300px'
                    }}
                        {...provided.droppableProps}>
                        {this.loadItems()}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>);
    }
}

const CardStyles = withStyles(styles)(Card);
export default CardStyles;