import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AnimalsStyles from './AnimalsGame/AnimalsGame';

const styles =
    makeStyles(theme => ({
        button: {
            marginRight: '30px',
          },
        div: {
            marginLeft: '50px'
        },
        root: {
            flexGrow: 1,
          },  
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
        container: {
            maxWidth: '500px',
            margin: 'auto',
        }
    }));

    

class Menu extends React.Component {

        state = {
            showMenu: true,
        };

        corrAnimalsClick = (event) => {
            this.setState({
                corrAnimalsClick: !this.state.corrAnimalsClick,
                showMenu: !this.state.showMenu
            });
        }

        backButtonClick = (event) => {
            this.setState({
                showMenu: !this.state.showMenu
            });
        }

        render() {

            return (
                !this.state.showMenu ? 
                (
                    <AnimalsStyles backButtonClick={this.backButtonClick}/>)
                   :
                (<div style={{marginLeft: '500px', marginTop: '200px'}}>
                    <h1 style={{fontSize: '-webkit-xxx-large'}}>Bem-vindo!</h1>
                    <h2>Escolhe um jogo:</h2>
                    <Grid container spacing={2} style={{marginTop: '30px'}}>
                        <Button variant="contained" color="primary" style={{marginRight: '30px'}}
                            onClick={this.corrAnimalsClick}>
                            Animais
                        </Button>
                        <Button variant="contained" color="primary" style={{marginRight: '30px'}}
                            onClick={this.corrAnimalsClick}>
                            Cores
                        </Button>
                        <Button variant="contained" color="primary" style={{marginRight: '30px'}}
                            onClick={this.corrAnimalsClick}>
                            Animais da Quinta
                        </Button>
                    </Grid>
                </div>)
                
            );
        }
        
}

const MenuStyles = withStyles(styles)(Menu);
export default MenuStyles;