import React, {useRef, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import styles from '../styles/Global.module.scss';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../state_management/actions';
import contentStyle from '../styles/ContentComponentStyle.module.scss';

const ContentComponent = () => {

    const imageRef = useRef();
    const uploadRef = useRef();

    const dispatch = useDispatch();
    const contentImage = useSelector( state =>  state.images.content  );

    const uploadHandler = (event) => {


        dispatch(actions.addContent( event.target ));

        imageRef.current.setAttribute('src',  URL.createObjectURL(uploadRef.current.files[0]) );

    };






    return (
        <div className={`${styles.flexColumnCenter} ${styles.width40} ${styles.height100}`}>

            <h1 className={contentStyle.title}>Content image</h1>

            <div >
            <input
                accept="image/*"
                style={ {display: 'none'} }
                id="content-image"
                type="file"
                onChange={ uploadHandler }
                ref={uploadRef}
            />
            <label htmlFor="content-image">
                {
                    contentImage === null?
                        <Button variant="contained" color="primary" component="span">
                            Upload content image
                        </Button>
                        :
                        <Button variant="contained" color="primary" component="span">
                            Upload another image
                        </Button>
                }
            </label>
            </div>

            <img src={''} alt={''} ref={imageRef} className={`${contentStyle.displayedImage}`}/>

        </div>
    )
};

export default ContentComponent;