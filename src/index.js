import React from 'react';
import ReactDOM from'react-dom';
import Card from './Card';

class App extends React.Component {

    render(){
        return (
            <Card packName="Pack Dancing"
                  packSubtitle="Indicado para todas as idades"
                  packDescription="Luzes disco. Som. DJ. Efeitos de fumo."
                  packDuration="2h de festa"
                  packPrice="120"/>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));