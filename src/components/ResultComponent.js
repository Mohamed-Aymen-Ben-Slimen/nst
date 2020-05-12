import React, {useState, useRef} from 'react';

import Button from '@material-ui/core/Button';
import NST_API from '../API/NST_API';
import {useSelector} from 'react-redux';
import resultStyles from '../styles/ResultStyle.module.scss';
import globalStyles from '../styles/Global.module.scss';
import WaitingComponent from "./WaitingComponent";

const ResultComponent = () => {

    const [loading, setLoading] = useState(false);
    const [dataURL, setDataURL] = useState(null);
    const [first, setFirst] = useState(true);



    let imgRef = useRef();
    const content = useSelector( state => state.images.content );
    const style = useSelector( state => state.images.style );

    const getResultImage = async () => {
        imgRef.current.setAttribute('src', '');

       const result =  NST_API( content, style );

       setLoading(true);

       result.then(
           async (resultImage) => {
               console.log(resultImage);
               await imgToDataURL( resultImage['output_url'] );
               imgRef.current.setAttribute('src' ,resultImage['output_url']  );
               setFirst(false);
               setLoading(false);
               console.log(imgRef);
               window.scrollTo( 0, imgRef.current.y );
           }
       ).catch( err => {console.log(err)} );

    };


    const imgToDataURL = async (url) => {
        let blob = await fetch(url).then(r => r.blob());
        let dataUrl = await new Promise(resolve => {
            let reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
        setDataURL(dataUrl);
        // now do something with `dataUrl`
    };





    return (
        <div className={`${resultStyles.resultContainer} ${globalStyles.flexColumnCenter}`}>

            {
                ((content === null) || (style === null))
                    &&
                <p style={ {color: '#2058f6'} }>Upload a content image and a style image to enable this button</p>
            }

            <Button variant="contained" color="primary"
                 onClick={getResultImage}
                disabled={(content === null) || (style === null)}
                className={resultStyles.submitButton}
        >
            Submit
        </Button>

            {((loading === false) && first === false)
            &&
            <h3 className={globalStyles.titles}>Your styled image is ready</h3>
            }


            {loading === true &&  <WaitingComponent/>}


                <div className={globalStyles.flexRowCenter}>
                <img src={''} alt={''} ref={imgRef} className={`${resultStyles.resultImage}`}/>

                    { ( (loading === false) && first === false )
                                &&
                    <a href={ dataURL !== null && dataURL }
                       download={'styled_image.png'}
                       target="_blank"
                        style={ {textDecoration: 'none'} }
                    >
                        <div
                            className={resultStyles.downloadButton}
                        >
                            Download image</div>
                    </a>
                    }


                </div>

        </div>

    )
};

export default ResultComponent;