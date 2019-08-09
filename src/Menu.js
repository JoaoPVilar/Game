import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AnimalsGame from './AnimalsGame/AnimalsGame';
import OrderGame from './OrderGame/OrderGame';
import ColorsGame from './ColorsGame/ColorsGame';
import MatchCardsGame from './MatchCardsGame/MatchCardsGame';
import PuzzleGame from './PuzzleGame/PuzzleGame';
import data from './data';

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
            height: '300px',
        },
        button: {
            marginRight: '30px',
            marginTop: '10px'
        }
    }));

    

export default function Menu(props) {

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
                    return <AnimalsGame backButtonClick={backButtonClick} />;
                
                case 2:
                    return <ColorsGame backButtonClick={backButtonClick} />;

                case 3:
                    return <OrderGame backButtonClick={backButtonClick} />;

                case 4:
                    return <MatchCardsGame backButtonClick={backButtonClick} />;

                case 5:
                    return <PuzzleGame backButtonClick={backButtonClick} />;

                default:
                    return <h1>404: Jogo Nao Existe</h1>;
            }
        }

            return (
                !showMenu ? (showGame())
                :
                (<div className={classes.menu}>
                    <h1 style={{fontSize: '-webkit-xxx-large'}}>Bem-vindo!</h1>
                    <h2>Escolhe um jogo:</h2>
                    <Grid container spacing={2} style={{marginTop: '30px'}}>
                        {data.buttons.map((button, index) => {
                            return (
                            <Button variant="contained" color="primary" className={classes.button}
                                onClick={(e) => gameClick(e, (index + 1))}>
                                {button}
                            </Button>
                            );
                        })}
                    </Grid>
                </div>)
                
            );
        
}