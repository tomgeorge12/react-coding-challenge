import React, { Suspense, lazy } from 'react';
import Header from './Header';
import Footer from './Footer';

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        if(error) return { hasError: true }
    }

    render() {
        const { hasError } = this.state;
        // const { children } = this.props;
        if(hasError) {
            return( <div>
                <Header genre={'titles'} />
                <div className='body-content'>
                    <h1>{'Oops, Something went wrong'}</h1>
                </div>
                <Footer />
            </div>);
        }
        return this.props.children;
    }
}

export default ErrorBoundary
;