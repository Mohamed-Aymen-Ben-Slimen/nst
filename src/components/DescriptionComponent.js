import React from 'react';
import descriptioStyle from '../styles/DescriptionComponentStyle.module.scss';
import {Link} from 'react-router-dom';

const DescriptionComponent = () => {
    

    
    return (
        <div>


            <div className={descriptioStyle.descriptionContainer}>
                <h1>What is Art Style Transfer?</h1>
                <p>
                    Art Style Transfer is an online neural style transfer solution
                </p>
                <p>
                    It takes the style of the style image and applies it to the content of your image
                </p>
                <p>
                    Upload your content image an you can choose from a popular style or upload your own style to create
                    a styled image in few seconds which you can download
                </p>

                <Link to={'/neural_style_transfer'}
                style={ {textDecoration: 'none'} }
                >
                    <div style={ { margin: '60px'} }>
                <span
                className={descriptioStyle.nstButton}
                >Go to neural style transfer</span>
                    </div>
                </Link>

            </div>


        </div>
    )
};

export default DescriptionComponent;