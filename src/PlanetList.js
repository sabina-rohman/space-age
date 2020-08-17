import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Planet from './Planet';
import './Planet.css';
import mercuryImg from './images/mercury.jpg';
import venusImg from './images/venus.jpg';
import earthImg from './images/earth.jpg';
import marsImg from './images/mars.jpg';
import jupiterImg from './images/jupiter2.jpg';
import saturnImg from './images/saturn.jpg';
import uranusImg from './images/uranus.jpg';
import neptuneImg from './images/neptune.jpg';
import Stars from './Stars';
import Jumbotron from './Jumbotron';

class PlanetList extends Component {
    constructor(props){
        super(props);
        this.state = {age: null, weight: null, finalAge: null, finalWeight: null};
        this.myDivToFocus = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({age: '', weight: '', finalAge: this.state.age, finalWeight: this.state.weight});
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
      }

    render(){
        const planetNames = this.props.planets.map((planet, index) => (
            <Planet 
                key={index} 
                data={planet}
                age={this.state.finalAge}
                weight={this.state.finalWeight}
            />
        ));
        return(
            <div>
                <Stars />
                <Jumbotron />
                <form onSubmit={this.handleSubmit}>
                    <input 
                        placeholder="Enter your Age"
                        type="text"
                        value={this.state.age}
                        className="input-age"
                        onChange={(e) => this.setState({age: this.props.getNumber(e.target.value)})}
                    />
                    <input 
                        placeholder="Enter your weight"
                        type="number"
                        value={this.state.weight}
                        className="input-weight"
                        onChange={(e) =>this.setState({weight: e.target.value})}
                    />
                    <button 
                        // onClick={this.setState({age: this.props.getNumber(e.target.value)})}
                        type="submit"
                        className="save-button"
                     >
                        Let's Find Out!
                    </button>
        </form>
                
                <ul 
                className="planets"
                ref={this.myDivToFocus}
                >
                   {planetNames}
                </ul>
            </div>
        )
    }
}


PlanetList.defaultProps = {
    planets : [{name: 'mercury', earthYears: 0.2408467, earthWeight: 0.378, image: mercuryImg},
                {name: 'venus', earthYears: 0.61519726, earthWeight: 0.907, image: venusImg}, 
                {name: 'earth', earthYears: 1.0, earthWeight: 1, image: earthImg}, 
                {name: 'mars', earthYears: 1.8808158, earthWeight: 0.377, image: marsImg}, 
                {name: 'jupiter', earthYears: 11.862615, earthWeight: 0.2528, image: jupiterImg}, 
                {name: 'saturn', earthYears: 29.447498, earthWeight: 0.1064, image: saturnImg}, 
                {name: 'uranus', earthYears: 84.016846, earthWeight: 0.889, image: uranusImg}, 
                {name: 'neptune', earthYears: 164.79132, earthWeight: 0.1125, image: neptuneImg}],
    getNumber: (s) => {
        if(s.length > 0){
            return Number(s)
        } else {
            return 0
        }
    }
}



PlanetList.propTypes = {
    planet: PropTypes.arrayOf(PropTypes.object)
};

export default PlanetList;