import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AnimalsStyles from './AnimalsGame/AnimalsGame';
import OrderGame from './OrderGame/OrderGame';

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
        const [game, setGame] = React.useState(0);

        const gameClick = (event, gameNumber) => {
            setShowMenu(!showMenu);
            setGame(gameNumber);
        }

        const backButtonClick = (event) => {
            setShowMenu(!showMenu);
        }

        const showGame = () => {
            switch(game) {
                case 1:
                    return <AnimalsStyles backButtonClick={backButtonClick}/>;
                
                case 2:
                    return <AnimalsStyles backButtonClick={backButtonClick}/>;

                case 3:
                    return <OrderGame backButtonClick={backButtonClick} />;

            }
        }

            return (
                !showMenu ? 
                (

                    showGame()
                )
                :
                (<div className={classes.menu}>
                    <h1 style={{fontSize: '-webkit-xxx-large'}}>Bem-vindo!</h1>
                    <h2>Escolhe um jogo:</h2>
                    <Grid container spacing={2} style={{marginTop: '30px'}}>
                        <Button variant="contained" color="primary" style={{marginRight: '30px'}}
                            onClick={(e) => gameClick(e, 1)}>
                            Animais
                        </Button>
                        <Button variant="contained" color="primary" style={{marginRight: '30px'}}
                            onClick={(e) => gameClick(e, 2)}>
                            Cores
                        </Button>
                        <Button variant="contained" color="primary" style={{marginRight: '30px'}}
                            onClick={(e) => gameClick(e, 3)}>
                            Ordenar
                        </Button>
                    </Grid>
                </div>)
                
            );
        
}