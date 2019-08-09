import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Confetti from 'react-confetti';
import PropTypes from 'prop-types';
import Image from '../Image';

const styles = theme => ({
        root: {
            flexGrow: 1,
        },
        div: {
            position: 'absolute',
            margin: 'auto',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: '1200px',
            height: '-10px'
        },
          paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            width: '120px',
            height: '120px',
            '&:hover': {
                backgroundColor: '#c9c9c9',
            }
          },
          clickedPaper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            backgroundColor: '#c9c9c9',
            width: '120px',
            height: '120px',
          },
          correct: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            width: '120px',
            height: '120px',
            backgroundColor: 'green'
        },
        backButton: {
            width: '60px', 
            height: '60px', 
            zIndex: 9999
        },
        arrowBack: {
            width: '60px', 
            height: '60px', 
            position: 'relative', 
            top: '-12px'
        },
        title: {
            backgroundColor: 'darkgrey', 
            display: 'inline-block', 
            marginBottom: '30px',
            marginLeft: '30px'
        }
    });

class MatchCardsGame extends React.Component {

    state = {
        cardsArr: this.shuffle([
            'giraffe', 'bear', 'lion', 'car', 'ant', 'planet'
        ]),
        clickedCard: -1
    }

    cards = this.shuffle(this.shuffle(this.shuffle([
        'giraffe', 'bear', 'car', 'bear', 'lion', 'planet', 'giraffe', 'car', 'ant', 'lion', 'ant', 'planet'
    ])));
    cardOrder = this.cards;
    prevCardClicked = '';
    prevIndexClicked = -1;

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    onCardClick = (event, type, index) => {

        if (this.prevCardClicked 
            && this.prevIndexClicked 
            && this.prevIndexClicked !== index 
            && this.prevCardClicked === type) {

            let prevCardsArr = this.state.cardsArr;
            const index = prevCardsArr.findIndex((item) => {
                return item === type;
            });

            if(index >= 0) {
                prevCardsArr.splice(index, 1);
                this.setState({cardsArr: prevCardsArr})
            }
           
            this.prevCardClicked = '';
            this.prevIndexClicked = -1;
            this.setState({clickedCard: -1});
        }
        else if(this.prevCardClicked === '' || (this.prevCardClicked && this.prevCardClicked !== type)) {
            this.prevCardClicked = type;
            this.prevIndexClicked = index;
            this.setState({clickedCard: index});
        }

    }

    FormCard(img, ind) {

        const {classes} = this.props;

        return (
            this.state.clickedCard === ind ?
            <Paper className={classes.clickedPaper} onClick={(e) => this.onCardClick(e, img, ind)}>
                  <Image img={img} />
            </Paper>
            :
            (this.state.cardsArr.includes(img) ? 
                <Paper className={classes.paper} onClick={(e) => this.onCardClick(e, img, ind)}>
                    <Image img={img} />
                </Paper>
                :
            <Paper className={classes.correct} />)
        );
    }

    FormRow(ind) {
        const img1 = this.cardOrder[ind];
        const img2 = this.cardOrder[ind + 1];
        const img3 = this.cardOrder[ind + 2];
        const img4 = this.cardOrder[ind + 3];

        return (
          <React.Fragment>
            <Grid item xs={3}>
                {this.FormCard(img1, ind)}
            </Grid>
            <Grid item xs={3}>
                {this.FormCard(img2, ind + 1)}
            </Grid>
            <Grid item xs={3}>
                {this.FormCard(img3, ind + 2)}
            </Grid>
            <Grid item xs={3}>
                {this.FormCard(img4, ind + 3)}
            </Grid>
          </React.Fragment>
        );
      }

    isValid = () => {
        return this.state.cardsArr.length === 0;
    }

    render() {
        
        const {classes} = this.props;

        return (
            <div className={classes.div}>
                    <IconButton className={classes.backButton} aria-label="back"
                        onClick={this.props.backButtonClick}>
                        <ArrowBack className={classes.arrowBack} />
                    </IconButton>
                    <h1 className={classes.title}>
                        Encontra os pares!
                    </h1>
                    {this.isValid() ?
                        <Confetti
                            width={1300}
                            height={600}
                            numberOfPieces={400}
                            recycle={false}
                        />
                        :
                        <div />
                    }
                    <div style={{flexGrow: 1}}>
                        <Grid container spacing={1}>
                            <Grid container item xs={7} spacing={1}>
                                {this.FormRow(0)}
                            </Grid>
                            <Grid container item xs={7} spacing={1}>
                                {this.FormRow(4)}
                            </Grid>
                            <Grid container item xs={7} spacing={1}>
                                {this.FormRow(8)}
                            </Grid>
                        </Grid>
                    </div>
                   </div>
            );
    }
        
}

MatchCardsGame.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MatchCardsGame);