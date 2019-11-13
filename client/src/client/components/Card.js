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
                <span>{title.length > 10 ? title.substring(0, 10) : title}</span>
                {/* if(text.length > 50) return <div>{text.substring(0, 50)}<button type="button" className="btn btn-link">...</button></div> */}
            </div>
        );
    }
}

export default Card;