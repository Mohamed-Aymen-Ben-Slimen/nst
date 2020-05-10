import React, {useRef, useEffect} from 'react';
import styles from '../styles/Global.module.scss';
import stylesMain from '../styles/MainComponentStyles.module.scss';

import ContentComponent from "./ContentComponent";
import StyleComponent from "./StyleComponent";



import ResultComponent from "./ResultComponent";


const MainComponent = () => {





    return (
        <div className={`${styles.absoluteCentered} ${styles.width100}`}>

            <div className={`${styles.flexRowTop} ${styles.width100} ${stylesMain.mainContainer}`}>
            <ContentComponent />
            <StyleComponent />
            </div>
            <ResultComponent/>
        </div>
    )
};

export default MainComponent;