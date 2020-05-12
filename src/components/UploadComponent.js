import React, {useState, useRef} from 'react';
import {Button} from '@material-ui/core';
import contentStyle from "../styles/ContentComponentStyle.module.scss";
import {useSelector, useDispatch} from 'react-redux';

const UploadComponent = (props) => {

    const {label, action} = props;

    const uploadRef = useRef();
    const imageRef = useRef();

    const dispatch = useDispatch();
    const contentImage = useSelector( state =>  state.images[label]  );

    const uploadHandler = (event) => {

        dispatch( action( event.target ) );

        imageRef.current.setAttribute('src',  URL.createObjectURL(uploadRef.current.files[0]) );

    };

    return (
        <div >
            <div >
                <input
                    accept="image/*"
                    style={ {display: 'none'} }
                    id={label}
                    type="file"
                    onChange={ uploadHandler }
                    ref={uploadRef}
                />
                <label htmlFor={label}>
                    {
                        contentImage === null?

                            <span
                            className={contentStyle.uploadButton}
                            >
                                Upload {label} image
                            </span>

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

export default UploadComponent;