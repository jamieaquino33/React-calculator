import React, { Component } from 'react';
import './Screen.css';
import ResultsScreen from '../ResultsScreen/ResultsScreen';
import ComputationScreen from '../ComputationScreen/ComputationScreen';


/* Component that jolds the results screen and calculation screen */
class Screen extends Component {
    render() {
        return (
            <div className='Screen'>
                <ResultsScreen>0</ResultsScreen>
                <ComputationScreen>2+3</ComputationScreen>
                
            </div>
        );
    }
}

export default Screen;