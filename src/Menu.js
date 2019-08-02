import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AnimalsStyles from './AnimalsGame/AnimalsGame';

const styles =
    makeStyles(theme => ({
          img: {
            height: '100px',
            width: '100px'
        },
        menu: {
            position: 'absolute',
            margin: 'auto',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: '500px',
            height: '300px'
        }
    }));

    

export default function Menu() {

    const classes = styles();

        const [showMenu, setShowMenu] = React.useState(true);

        const corrAnimalsClick = (event) => {
            setShowMenu(!showMenu);
        }

        const backButtonClick = (event) => {
            setShowMenu(!showMenu);
        }

            return (
                !showMenu ? 
                (
                    <AnimalsStyles backButtonClick={backButtonClick}/>)
                :
                (<div className={classes.menu}>
                    <h1 style={{fontSize: '-webkit-xxx-large'}}>Bem-vindo!</h1>
                    <h2>Escolhe um jogo:</h2>
                    <Grid container spacing={2} style={{marginTop: '30px'}}>
                        <Button variant="contained" color="primary" style={{marginRight: '30px'}}
                            onClick={corrAnimalsClick}>
                            Animais
                        </Button>
                        <Button variant="contained" color="primary" style={{marginRight: '30px'}}
                            onClick={corrAnimalsClick}>
                            Cores
                        </Button>
                        <Button variant="contained" color="primary" style={{marginRight: '30px'}}
                            onClick={corrAnimalsClick}>
                            Ordenar
                        </Button>
                    </Grid>
                </div>)
                
            );
        
}