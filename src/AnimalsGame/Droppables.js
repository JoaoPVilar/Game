import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Image from '../Image';
import DogAudio from '../audios/chasdog.mp3';
import CatAudio from '../audios/cat.wav';
import CowAudio from '../audios/cow.mp3';
import HorseAudio from '../audios/horse.mp3';
import RoosterAudio from '../audios/rooster.mp3';
import BlueAudio from '../audios/azul.mp3';
import YellowAudio from '../audios/amarelo.mp3';
import OrangeAudio from '../audios/laranja.mp3';
import GreenAudio from '../audios/verde.mp3';
import RedAudio from '../audios/vermelho.mp3';
import VolumeUp from '@material-ui/icons/VolumeUp';
import IconButton from '@material-ui/core/IconButton';

const styles =
    makeStyles({
        card: {
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
        volumeButton: {
            width: '60px', 
            height: '60px', 
            zIndex: 9999
        },
        volumeUp: {
            width: '60px', 
            height: '60px', 
            position: 'relative', 
            top: '-12px'
        },
    });

    

    export default function Droppables(props) {

        const classes = styles();

        const type = (index) => {
            const r = props.dropsIds[index + 1];
            return r;
        }

        const clickedCard = (type) => {
            
            let sound;

            switch(type) {

                case 'rooster':
                    sound = new Audio(RoosterAudio);
                    sound.volume = 0.2;
                    break;

                case 'horse':
                    sound = new Audio(HorseAudio);
                    sound.volume = 0.5;
                    break;

                case 'cow':
                    sound = new Audio(CowAudio);
                    sound.volume = 0.2;
                    break;
                
                case 'cat':
                    sound = new Audio(CatAudio);
                    sound.volume = 0.2;
                    break;
        
                case 'dog':
                    sound = new Audio(DogAudio);
                    sound.volume = 0.2;
                    break;
    
                case 'bear':
                    sound = new Audio(DogAudio);
                    sound.volume = 0.2;
                    break;
        
                case 'giraffe':
                    sound = new Audio(DogAudio);
                    sound.volume = 0.2;
                    break;
        
                case 'lion':
                    sound = new Audio(DogAudio);
                    sound.volume = 0.2;
                    break;
    
                case 'blue':
                    sound = new Audio(BlueAudio);
                    sound.volume = 0.5;
                    break;
        
                case 'green':
                    sound = new Audio(GreenAudio);
                    sound.volume = 0.5;
                    break;
        
                case 'orange':
                    sound = new Audio(OrangeAudio);
                    sound.volume = 0.5;
                    break;

                case 'red':
                    sound = new Audio(RedAudio);
                    sound.volume = 0.5;
                    break;
        
                case 'yellow':
                    sound = new Audio(YellowAudio);
                    sound.volume = 0.5;
                    break;
    
                default:
                    sound = new Audio(DogAudio);
                    break;
                    
            }

            sound.play();
        }

        return (

            <Grid container spacing={2} style={{ maxHeight: '100px' }}>
                {props.drops.map((dropImg, index) => {
                    return (
                        <Droppable droppableId={`droppable-${dropImg.img}-${index + 1}`}
                            index={index} key={index}>
                            {(provided, snapshot) => (
                                <Card className={classes.card} ref={provided.innerRef}
                                    {...provided.droppableProps}>
                                        <CardContent className={classes.drop} >
                                            {type(index) ? 
                                            <Image img={type(index)} /> : 
                                            <div>
                                                <IconButton className={classes.volumeButton} aria-label="back"
                                                    onClick={() => clickedCard(dropImg.img)}>
                                                    <VolumeUp className={classes.volumeUp} />
                                                </IconButton>
                                                <h3>{dropImg.img}</h3>
                                            </div>
                                            }
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