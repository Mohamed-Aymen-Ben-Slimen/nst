import React from 'react';
import styles from '../styles/Global.module.scss';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import HeaderComponent from "./Header";
import NSTComponent from "./NSTComponent";
import LandingPageComponent from "./LandingPageComponent";
import FooterComponent from "./FooterComponent";


const MainComponent = () => {


    return (
        <div className={`${styles.width100} ${styles.globalBackground}`}>

            <Router>

            <HeaderComponent/>

                <Switch>

                    <Route path={'/neural_style_transfer'} component={NSTComponent}/>
                    <Route path={'/'} exact component={LandingPageComponent}/>




                </Switch>
            </Router>
            <FooterComponent/>
        </div>
    )
};

export default MainComponent;