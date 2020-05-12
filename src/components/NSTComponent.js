import React, {useState, useEffect} from 'react';
import styles from "../styles/Global.module.scss";
import stylesMain from "../styles/MainComponentStyles.module.scss";
import ContentComponent from "./ContentComponent";
import StyleComponent from "./StyleComponent";
import ResultComponent from "./ResultComponent";

const NSTComponent = () => {

    const [state, setState] = useState();

    return (
        <div>

            <div className={`${styles.flexRowTop} ${styles.width100} ${stylesMain.mainContainer}`}>
                <ContentComponent />
                <StyleComponent />
            </div>

            <ResultComponent/>

        </div>
    )
};

export default NSTComponent;