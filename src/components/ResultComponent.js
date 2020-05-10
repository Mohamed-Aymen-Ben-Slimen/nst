import React, {useState, useEffect, useRef} from 'react';

import Button from '@material-ui/core/Button';
import NST_API from '../API/NST_API';
import {useSelector, useDispatch} from 'react-redux';

const ResultComponent = () => {

    let imgRef = useRef();
    const content = useSelector( state => state.images.content );
    const style = useSelector( state => state.images.style );

    const getNeurl = async () => {



       const result = await NST_API( content, style );

        //await deepai.renderResultIntoElement(result, document.getElementById('image'));
        console.log(result);
        imgRef.current.src = result['output_url'];


    };


    return (
        <div>

        <Button variant="contained" color="primary"
              onClick={getNeurl}
                disabled={(content === null) || (style === null)}
        >
            Submit
        </Button>
             <img src={'#'} ref={imgRef}/>
        </div>

    )
};

export default ResultComponent;