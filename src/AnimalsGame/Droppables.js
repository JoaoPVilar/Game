import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const styles =
    makeStyles({
        card: {
            marginTop: '150px',
            minWidth: 100,
            width: '10%',
            height: '10%',
            backgroundColor: 'lightgray',
            marginLeft: '30px'
        },
        drop: {
            height: '130px',
            backgroundColor: 'lightgray'
        },
        img: {
            height: '100px',
            width: '100px'
        }, 
    });

    

    export default function Droppables(props) {

        const classes = styles();

        const type = (index) => {
            const r = props.dropsIds[index + 1];
            return r;
        }

        return (

            <Grid container spacing={2} style={{marginTop: '-50px', maxHeight: '100px'}}>
                {props.drops.map((dropImg, index) => {
                    return (
                        <Droppable droppableId={`droppable-${dropImg.img}-${index + 1}`}
                            index={index} key={index}>
                            {(provided, snapshot) => (
                                <Card className={classes.card} ref={provided.innerRef}
                                    {...provided.droppableProps}>
                                        <CardContent className={classes.drop} >
                                            {type(index) ? props.getImages(type(index)) : <h3>{dropImg.img}</h3>}
                                        </CardContent>
                                    {provided.placeholder}
                                </Card>
                            )}
                        </Droppable>
                    );
                })}
            </Grid>
            
        );
}