import React from 'react';
import './Jumbotron.css';

function Jumbotron() {
    return (
        <div class="jumbotron">
            <div className="first-text"><em>"Wonder what your age is in Mercury?"</em></div>
            <div className="second-text"><em>"Or your weight in Jupiter?"</em></div>
            <div className="star sun"></div>
            <div className="plan mercury"></div>
            <div className="plan venus"></div>
            <div className="plan earth"></div>
            <div className="plan mars"></div>
            <div className="plan jupiter"></div>
            <div className="plan saturn"></div>
            <div className="plan uranus"></div>
            <div className="plan neptune"></div>
        </div>
    )
}

export default Jumbotron;