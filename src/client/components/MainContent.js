import React from 'react';
import map from 'lodash/map';
import Card from './Card';
import data from './sample.json';

class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDetails:false
        }
        this.popularTitles=[
            {body:'SERIES', title:'Popular Series'},
            {body:'MOVIES', title:'Popular Movies'}
        ]
        this.getPopularTitles=this.getPopularTitles.bind(this);
        this.showPopularItems=this.showPopularItems.bind(this);
        this.toggleShowDetails=this.toggleShowDetails.bind(this);
    }
    showPopularItems(){
        const cards = map(data.entries, (item, idx)=> {
            if(idx<11 && item.releaseYear>2010){
                return(
                    <Card title={item.title} src={item.images['Poster Art'].url} />
                )
            }
        });
        return cards;
    }
    toggleShowDetails(){
        this.setState({ showDetails: true});
    }
    getPopularTitles() {
        const titleCards = map(this.popularTitles, (item)=> {
            return(
                <div className='main-card' >
                    <div className='main-card-body' onClick={this.toggleShowDetails}><span className='.main-card-body-text'>{item.body}</span></div>
                    <span>{item.title}</span>
                </div>
            )
        });
        return titleCards;
    }
    render() {
        if(this.state.showDetails){
            return(
                <div className='main-content-body'>
                    {this.showPopularItems()}
                </div>
            );
        } else {
            return(
                <div className='main-content-body'>
                    {this.getPopularTitles()}
                </div>
            );
        }
    }
}
export default MainContent;