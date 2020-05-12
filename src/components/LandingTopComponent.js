import React, {useState, useEffect} from 'react';
import styles from '../styles/LandingTopStyle.module.scss';

const LandingTopComponent = () => {

    const [state, setState] = useState();

    return (
        <div className={styles.landingTopContainer}>
            <div className={styles.skewDiv}>
                <div className={`${styles.animation1} ${styles.title} `}>
                Neural Style Transfer
            </div>
                <div className={`${styles.animation2} ${styles.title} `}>
              Style your images
            </div>
                <div className={`  ${styles.animation3} ${styles.title}`}>
                One Click Away
                </div>
            </div>
        </div>
    )
};

export default LandingTopComponent;