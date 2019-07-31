import React from 'react';

class Card extends React.Component {

    render(){
        return(
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header">
                            {this.props.packName}
                        </div>
                        <div className="meta">
                            {this.props.packSubtitle}
                        </div>
                        <div className="description">
                            "whaddup"
                        </div>
                    </div>
                    <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content">Reservar</div>
                        <div className="visible content">
                            <i className="shop icon"></i>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Card;