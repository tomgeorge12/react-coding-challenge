import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

class Container extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <Header />
                <div className='body-content'>
                    <MainContent />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Container;