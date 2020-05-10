import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import styles from '../styles/Global.module.scss';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../state_management/actions';


const ContentComponent = () => {

    const dispatch = useDispatch();
    const contentImage = useSelector( state )

    const uploadHandler = (event) => {
        dispatch(actions.addContent( event.target ))
    };



    return (
        <div className={`${styles.flexColumnCenter} ${styles.width40}`}>

            <h1>Content image</h1>

            <div>
            <input
                accept="image/*"
                style={ {display: 'none'} }
                id="content-image"
                type="file"
                onChange={ uploadHandler }
            />
            <label htmlFor="content-image">
                <Button variant="contained" color="primary" component="span">
                   Upload content image
                </Button>
            </label>
            </div>

        </div>
    )
};

export default ContentComponent;