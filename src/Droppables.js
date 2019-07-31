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
        }
    });

    

    export default function Droppables(props) {

        const classes = styles();

        return (

            <Grid container style={{flexGrow: 1}} spacing={2}>
                {props.drops.map((dropImg, index) => {
                    return (
                        <Droppable droppableId={`droppable-${dropImg.img}`} index={index} key={index}>
                            {(provided, snapshot) => (
                                <Card className={classes.card} ref={provided.innerRef}
                                    {...provided.droppableProps}>
                                        <CardContent className={classes.drop} />
                                    {provided.placeholder}
                                </Card>
                            )}
                        </Droppable>
                    );
                })}
            </Grid>
            
        );
}