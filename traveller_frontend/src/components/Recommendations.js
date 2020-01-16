import React from 'react';
import Recommendation from './Recommendation';

const Recommendations = (props) => {

    return (
        <div>
            <ul>
            {props.recommendations && props.recommendations.map(recommendation => 
                <Recommendation key={recommendation.id} recommendation={recommendation} />
            )}
            </ul>
        </div>
    )
}

export default Recommendations;