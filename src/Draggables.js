import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardStyles from './Card';
import Grid from '@material-ui/core/Grid';

const styles =
    makeStyles({
        root: {
            flexGrow: 1,
          },  
    });

class Images extends React.Component {

    render() {

        
        const elem = this.props.imageSrc.map((image, index) => {
            
            console.log(image.id)
            return (
            <Grid key={index} item>
                <CardStyles key={index} image={image} index={index + 1}/>
            </Grid>);
        });

        return (
          
            <Grid container style={{flexGrow: 1}} spacing={2}>
               {elem}
           </Grid>
        );
    }
}

export default Images;
