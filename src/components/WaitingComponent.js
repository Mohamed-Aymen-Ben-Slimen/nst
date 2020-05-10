import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import waitingStyles from '../styles/WaitingComponentStyles.module.scss';

const WaitingComponent = () => {



    return (
        <div className={waitingStyles.waitingContainer}>
            <CircularProgress />
            <div>
                <h5>Please wait</h5>
                <h5>It will take few seconds</h5>
            </div>
        </div>
    )
};

export default WaitingComponent;