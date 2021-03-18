import React from 'react' 
import HogsContainer from './HogsContainer'

class HogsCard extends React.Component {

    render() {
        const {showDetails, onDetailClick} = this.props;
        return (
            <div className="ui eight wide column">
            <div className="ui card">
                <div className="image">
                    <img src={this.props.img}/>
                </div>
                <div 
                    className="content header"
                    onClick={onDetailClick}
                >
                    {this.props.hog.name}
                </div>
                <div className={`${showDetails ? '' : 'hideContent'} content`}>
                    <div className="meta">
                    <span className="date">Weight: {this.props.hog.weight}</span>
                    </div>
                    <div className="description">
                    {this.props.hog.specialty}
                    </div>
                    <div>
                    {this.props.hog.greased ? 'Greased' : ''}
                    </div>
                </div>
                {/* <div className="extra content">                    
                </div> */}
            </div>
            </div>
        )
    }
}

export default HogsCard