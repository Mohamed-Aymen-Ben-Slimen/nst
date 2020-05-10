import React, {useState, useRef} from 'react';

import Button from '@material-ui/core/Button';
import NST_API from '../API/NST_API';
import {useSelector} from 'react-redux';
import resultStyles from '../styles/ResultStyle.module.scss';
import globalStyles from '../styles/Global.module.scss';
import WaitingComponent from "./WaitingComponent";

const ResultComponent = () => {

    const [loading, setLoading] = useState(false);

    let imgRef = useRef();
    const content = useSelector( state => state.images.content );
    const style = useSelector( state => state.images.style );

    const getResultImage =  () => {
        imgRef.current.setAttribute('src', '');

       const result =  NST_API( content, style );

       setLoading(true);

       result.then(
           (resultImage) => {
               console.log(resultImage);
               setLoading(false);
               imgRef.current.setAttribute('src' , resultImage['output_url'] );
               console.log(imgRef);
               window.scrollTo( imgRef );
           }
       ).catch( err => {console.log(err)} );




    };


    return (
        <div className={`${resultStyles.resultContainer} ${globalStyles.flexColumnCenter}`}>

        <Button variant="contained" color="primary"
                 onClick={getResultImage}
                disabled={(content === null) || (style === null)}
                className={resultStyles.submitButton}
        >
            Submit
        </Button>

            {loading?
               <WaitingComponent/>
                 :
                <img src={''} alt={loading?  'loading...' : ''} ref={imgRef} className={`${resultStyles.resultImage}`}/>

            }
        </div>

    )
};

export default ResultComponent;