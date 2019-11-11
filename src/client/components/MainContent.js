import React from 'react';
import map from 'lodash/map';
import slice from 'lodash/slice';
import remove from 'lodash/remove';
import Card from './Card';
import data from './sample.json';

class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDetails:false,
            programType:''
        }
        this.popularTitles=[
            {body:'SERIES', title:'Popular Series', programType:'series'},
            {body:'MOVIES', title:'Popular Movies', programType:'movie'}
        ]
        this.getPopularTitles=this.getPopularTitles.bind(this);
        this.showPopularItems=this.showPopularItems.bind(this);
        this.toggleShowDetails=this.toggleShowDetails.bind(this);
    }
    showPopularItems(){
        const { programType } = this.state;
        const cards = map(data.entries, (item, idx)=> {
            if(item.releaseYear>2010 && item.programType===programType){
                return(
                    <Card title={item.title} src={item.images['Poster Art'].url} />
                )
            }
        });
        return slice(remove(cards), 0, 21);
    }
    toggleShowDetails(item){
        this.setState({ showDetails: true, programType: item.programType }, ()=>{
            this.props.changeGenre(item.body);
        });
    }
    getPopularTitles() {
        const titleCards = map(this.popularTitles, (item, idx)=> {
            return(
                <div className='main-card' >
                    <div className='main-card-body' onClick={(e)=>this.toggleShowDetails(item)}><span className='main-card-body-text'>{item.body}</span></div>
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