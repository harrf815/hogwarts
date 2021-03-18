import React from 'react' 
import hogs from "../porkers_data";
import HogsCard from './HogsCard'



class HogsContainer extends React.Component {
    state = {
        showDetails: false
    }

    renderHogs(){
        return this.props.hogs.map(hog => {
            return <HogsCard 
                        key={hog.name} 
                        hog={hog}
                        img={this.renderImgs(hog.name)}
                        showDetails={this.state.showDetails}
                        onDetailClick={this.onDetailClick}
                    />
        })
    }

    renderImgs = name => {
        let pigName = name.toLowerCase().split(' ').join('_');
        let pigImg = require(`../hog-imgs/${pigName}.jpg`);
        return pigImg;
    }

    onDetailClick = () => {
        this.setState({ showDetails: !this.state.showDetails })
    }

    render(){

        return (
           <div className="ui grid container">
               {this.renderHogs()}
           </div>

        )
    }
}

export default HogsContainer