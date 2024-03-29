import React from 'react';
import capitalize from 'lodash/capitalize';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.breadCrumbsHandler=this.breadCrumbsHandler.bind(this);
    }
    breadCrumbsHandler(){
        this.props.breadCrumbsHandler('Titles');
    }
    render() {
        const {genre} = this.props;
        return(
            <div>
                <div className='header-first-section'>
                    <span className='header-heading-main'>{'Demo Streaming'}</span>
                    <button className='header-btn'>{'Start your free trial'}</button>
                    <a className='header-link-login'>{'Log in'}</a>                    
                </div>
                <div className='header-second-section'>
                    <a className='header-heading-sub'  onClick={this.breadCrumbsHandler}>{`Popular ${capitalize(genre)}`}</a>
                </div>
            </div>
        );
    }
}
export default Header;