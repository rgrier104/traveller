import React from 'react';
import Recommendation from './Recommendation';

const Recommendations = (props) => {

    return (
        <div>
            <div className="rec-container">
                {props.recommendations && props.recommendations.map(recommendation =>
                    <Recommendation key={recommendation.id} recommendation={recommendation} />
                )}
            </div>
        </div>
    )
}

export default Recommendations;