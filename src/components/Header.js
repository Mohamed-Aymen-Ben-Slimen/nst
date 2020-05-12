import React from 'react';
import {  Link} from 'react-router-dom';
import headerStyle from '../styles/HeaderStyle.module.scss';

const HeaderComponent = () => {

    const contactScroll = () => {
      const contact = document.getElementById('footer');
    //  const y = contact.getBoundingClientRect();
        const y = contact.offsetTop;
        console.log(y);
      window.scrollTo(0,y) ;
    };


    return (
        <div>
            <nav className={headerStyle.navContainer}>
                <div>
                    <Link to={'/'} exact className={headerStyle.logo}>
                        <h2 >Art Style Transfer</h2>
                    </Link>
                </div>
                <div className={headerStyle.routes}>
                    <Link to={'/'} exact className={headerStyle.routeItem}>
                        <div >Home</div>
                    </Link>
                    <Link to={'/neural_style_transfer'} exact className={headerStyle.routeItem}>
                        <div>Art style transfer</div>
                    </Link>
                    <Link to={'#'} exact className={headerStyle.routeItem}
                    onClick={contactScroll}
                    >
                        <div>Contact</div>
                    </Link>
                </div>
            </nav>
        </div>
    )
};

export default HeaderComponent;