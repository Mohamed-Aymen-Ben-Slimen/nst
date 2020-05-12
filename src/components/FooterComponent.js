import React, {useState, useEffect} from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styles from '../styles/FooterStyle.module.scss';

const FooterComponent = () => {

    const [state, setState] = useState();

    return (
        <div>
            <div className={styles.gradientDiv}></div>
            <div className={styles.footerContainer} id={'footer'}>
                <h1>Contact me</h1>
                <h4>Developed by Mohamed Aymen Ben Slimen </h4>
                <p>Click on this icon to contact me on LinkedIn</p>
                <a href={'https://www.linkedin.com/in/mohamed-aymen-ben-slimen-758610190/'}>
                    <LinkedInIcon className={styles.LinkedInIcon}/>
                </a>
            </div>
        </div>
    )
};

export default FooterComponent;