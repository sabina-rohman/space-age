import React from 'react';
import './Planet.css';
import PropTypes from 'prop-types'


function Planet(props){
    return(
    <div className="planet" >
        <div className="overlay"></div>
        <img className="planet-img" src={props.data.image} alt="planet" />
        <div className="planet-content">
            <div className="planet-name">{props.data.name}</div>
            <p className="planet-age">{props.planetAge(props.data.earthYears, props.age)} Year(s)</p>
            <p className="planet-weight">{props.planetWeight(props.data.earthWeight, props.weight)} Kg</p>
        </div>
    </div>
    )
}


Planet.defaultProps = {
    planetAge: (earthYears, ageInYears) => Number((ageInYears/earthYears).toFixed(0)),
    planetWeight: (earthWeight, weightInKg) => Number((earthWeight*weightInKg).toFixed(0))
}

// Planet.propTypes = {
//     secondsInEarthYear : PropTypes.number
// }

export default Planet;