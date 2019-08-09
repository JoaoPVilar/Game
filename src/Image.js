import React from 'react';
import Giraffe from './AnimalsGame/images/giraffe.png';
import Bear from './AnimalsGame/images/bear.png';
import Tiger from './AnimalsGame/images/tiger.jpg';
import Cat from './AnimalsGame/images/cat.png';
import Dog from './AnimalsGame/images/dog.png';
import Ant from './OrderGame/images/ant.jpg';
import Car from './OrderGame/images/car.jpg';
import Planet from './OrderGame/images/planet.jpg';
import Bridge from './OrderGame/images/bridge.jpg';
import Mouse from './OrderGame/images/mouse.png';
import Blue from './ColorsGame/images/blue.png';
import Green from './ColorsGame/images/green.png';
import Orange from './ColorsGame/images/orange.png';
import Red from './ColorsGame/images/red.png';
import Yellow from './ColorsGame/images/yellow.jpg';
import Cow from './AnimalsGame/images/cow.jpg';
import Rooster from './AnimalsGame/images/rooster.jpg';
import Horse from './AnimalsGame/images/horse.jpg';

export default class Image extends React.Component {

    getImages(type) {
        switch(type) {

            case 'rooster':
                return <img src={Rooster} alt={'rooster'} 
                    style={{height: '100px', width: '100px'}}/>;

            case 'horse':
                return <img src={Horse} alt={'horse'} 
                    style={{height: '100px', width: '100px'}}/>;

            case 'cow':
                return <img src={Cow} alt={'cow'} 
                    style={{height: '100px', width: '100px'}}/>;

            case 'cat':
                return <img src={Cat} alt={'cat'} 
                    style={{height: '100px', width: '100px'}}/>;
    
            case 'dog':
                return <img src={Dog} alt={'dog'}
                    style={{height: '100px', width: '100px'}}/>;

            case 'bear':
                return <img src={Bear} alt={'bear'}
                    style={{height: '100px', width: '100px'}}/>;
    
            case 'giraffe':
                return <img src={Giraffe} alt={'giraffe'} 
                    style={{height: '100px', width: '100px'}}/>;
    
            case 'lion':
                return <img src={Tiger} alt={'lion'}
                    style={{height: '100px', width: '100px'}}/>;

            case 'ant':
                return <img src={Ant} alt={type} 
                    style={{height: '100px', width: '100px'}}/>;
        
            case 'car':
                return <img src={Car} alt={type}
                    style={{height: '100px', width: '100px'}}/>;
        
            case 'planet':
                return <img src={Planet} alt={type}
                    style={{height: '100px', width: '100px'}}/>;

            case 'blue':
                return <img src={Blue} alt={type} 
                    style={{height: '100px', width: '100px'}}/>;
    
            case 'green':
                return <img src={Green} alt={type}
                    style={{height: '100px', width: '100px'}}/>;
    
            case 'orange':
                return <img src={Orange} alt={type}
                    style={{height: '100px', width: '100px'}}/>;
    
            case 'red':
                return <img src={Red} alt={type} 
                    style={{height: '100px', width: '100px'}}/>;
    
            case 'yellow':
                return <img src={Yellow} alt={type}
                    style={{height: '100px', width: '100px'}}/>;

            case 'bridge':
                return <img src={Bridge} alt={type} 
                    style={{height: '100px', width: '100px'}}/>;
    
            case 'mouse':
                return <img src={Mouse} alt={type} 
                    style={{height: '100px', width: '100px'}}/>;

            default:
                return <div />;
                
        }
    }

    render() {
        return (
            this.getImages(this.props.img)
        );
        
    }
        
}
