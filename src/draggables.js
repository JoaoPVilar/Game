import React from 'react';
import CardStyles from './Card';

class Images extends React.Component {
 /*  <div>
                {this.props.imageSrc.map((image, index) => {
                    return <CardStyles />
                })
                }
            </div> */
    render() {
        const elem = this.props.imageSrc.map((image, index) => {
            return <CardStyles key={index} image={image} />
        });

        console.log(this.props.imageSrc)

        return (
          
           <div>
               {elem}
           </div>
        );
    }
}

export default Images;