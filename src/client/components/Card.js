import React from 'react';

class Card extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const { title, src } = this.props;
        return(
            <div className='card'>
                <img className='card-body' src={src}/>
                <span>{title}</span>
            </div>
        );
    }
}

export default Card;