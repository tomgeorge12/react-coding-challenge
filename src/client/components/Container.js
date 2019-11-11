import React, { Suspense, lazy } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
// import ErrorBoundary from './ErrorBoundary';
// const MainContent = lazy(()=>{import('./MainContent')});

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            genre: 'titles'
        }
        this.changeGenre=this.changeGenre.bind(this);
    }

    changeGenre(title){
        this.setState({ genre:title });
    }
    render() {
        const { genre } = this.state;
        
        return(
            <div>
                {/* <ErrorBoundary>
                    <> */}
                    <Header genre={genre} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <div className='body-content'>
                            <MainContent changeGenre={this.changeGenre} />
                        </div>
                    </Suspense>
                    <Footer />
                    {/* </>
                </ErrorBoundary> */}
            </div>
        );
    }
}

export default Container;