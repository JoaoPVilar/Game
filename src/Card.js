import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Cat from './cat.png';
import Dog from './dog.png';
import Giraffe from './giraffe.png';
import Bear from './bear.png';
import Tiger from './tiger.jpg';
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
            marginLeft: '40px',
            marginTop: '40px'
        },
    });

class Cards extends React.Component {

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
                
        }
    }

    loadItems = () => {
        const classes = styles();
        
        const {id, content} = this.props.image;
        console.log(content)
        return(
            <Draggable draggableId={`draggable-${this.props.image.content}`} 
            index={parseInt(this.props.index, 10)}>
            {(provided, snapshot) => (
            <Card className={classes.card}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
                <div className={classNames("card")}>
                    {this.getImages(this.props.image.content)}
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
            </Droppable>
            );
    }
}

const CardStyles = withStyles(styles)(Cards);
export default CardStyles;