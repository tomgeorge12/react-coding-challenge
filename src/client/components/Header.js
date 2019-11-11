import React from 'react';
import capitalize from 'lodash/capitalize';

class Header extends React.Component {
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
                    <span className='header-heading-sub'>{`Popular ${capitalize(genre)}`}</span>
                </div>
            </div>
        );
    }
}
export default Header;