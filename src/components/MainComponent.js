import React, {useRef, useEffect} from 'react';
import styles from '../styles/Global.module.scss';
import stylesMain from '../styles/MainComponentStyles.module.scss';

import ContentComponent from "./ContentComponent";
import StyleComponent from "./StyleComponent";

import Button from '@material-ui/core/Button';

import deepai from 'deepai';

deepai.setApiKey('c5a7e157-834d-4ca9-8369-8d68845d077e');

const MainComponent = () => {

    let imgRef = useRef();

    const getNeurl = async () => {


        var result = await deepai.callStandardApi("fast-style-transfer", {
            content: document.getElementById('content'),
            style: document.getElementById('style'),
        });

        //await deepai.renderResultIntoElement(result, document.getElementById('image'));
        console.log(result);
        imgRef.current.src = result['output_url'];


    };


    return (
        <div className={`${styles.absoluteCentered} ${styles.width100}`}>

            <div className={`${styles.flexRowTop} ${styles.width100} ${stylesMain.mainContainer}`}>
            <ContentComponent />
            <StyleComponent />
            </div>
            <Button variant="contained" color="primary"
                    onClick={getNeurl}
            >
                Primary
            </Button>
            <img src={'#'} ref={imgRef}/>
        </div>
    )
};

export default MainComponent;