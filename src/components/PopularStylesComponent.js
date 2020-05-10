import React, {useState} from 'react';
import globalStyles from '../styles/Global.module.scss';
import popularStylesList from '../popular_styles_list/PopularStylesList';
import popularStylesStyles from '../styles/PopularStylesComponentStyle.module.scss';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../state_management/actions';

const PopularStylesComponent = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const dispatch = useDispatch();

    const clickHandler =  (event, styleItem) => {
      //  console.log(styleItem);
        const target = event.target;
        target.classList.add(popularStylesStyles.active);
        if (selectedImage !== null) {
            selectedImage.classList.remove(popularStylesStyles.active);
        }
        setSelectedImage(target);

        dispatch( actions.addStyle( styleItem.url ) );



    };



    const imagesList = popularStylesList.map(
        (style, index) => {
            return(
                <div className={popularStylesStyles.styleImage} key={index}
                     style={ {backgroundImage: `url('${style.path}')`} }
                     onClick={ (e) =>{ clickHandler(e, style) } }
                >
                    <div className={popularStylesStyles.innerDiv}>
                        <div className={popularStylesStyles.styleInfo}>
                            <h4>{style.name}</h4>
                            <h4>({style.artist})</h4>
                        </div>
                        <DoneOutlineRoundedIcon fontSize="large" className={popularStylesStyles.checkIcon}/>
                    </div>
                </div>
            );
        }

    );
    
    return (
        <div className={ `${globalStyles.height100} ${globalStyles.width100} ${popularStylesStyles.scrollOverflow}`  }>
            <div className={popularStylesStyles.styleImagesGallery}>
                {imagesList}
            </div>
        </div>

    )
};

export default PopularStylesComponent;