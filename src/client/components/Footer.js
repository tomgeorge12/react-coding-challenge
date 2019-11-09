import React from 'react';
import map from 'lodash/map';

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.getFooterLinkOptions = this.getFooterLinkOptions.bind(this);
        this.footerOptions = [
            'Home', 'Terms and Conditions', 'Privacy Policy', 'Collection Statement', 'help', 'Manage Account'
        ]
    }

    getFooterLinkOptions() {
        const footerLinks = map(this.footerOptions, (item, idx)=>{
            return(
                <>{item}{idx < this.footerOptions.length-1 && <span className='footer-link-seperator'>{'|'}</span>}</>
            )
        });
        return footerLinks;
    }
    render() {
        return(
        <div className='footer-section'>
            <div className='footer-link-seperator-wrap'>
                {this.getFooterLinkOptions()}
            </div>
            <span>
                {'CopyRight 2019 Demo Streaming. All Rights reserved.'}
            </span>
        </div>);
    }
}
export default Footer;