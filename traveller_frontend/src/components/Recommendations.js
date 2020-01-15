import React from 'react';
import { Link } from 'react-router-dom';

const Recommendations = (props) => {

    return (
        <div>
            <ul>
            {props.recommendations && props.recommendations.map(recommendation => 
                <li key={recommendation.id}>
                    {recommendation.title}
                </li>
            )}
            </ul>
        </div>
    )
}

export default Recommendations;