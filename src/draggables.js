import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import CardStyles from './Card';

const styles = (theme) =>
    createStyles({

    });

class Images extends React.Component {


    render(){
        return (
            <CardStyles packName="Pack Dancing"
            packSubtitle="Indicado para todas as idades"
            packDescription="Luzes disco. Som. DJ. Efeitos de fumo."
            packDuration="2h de festa"
            packPrice="120"/>
        );
    }
}

const ImagesStyles = withStyles(styles)(Images);
export default ImagesStyles;