import React, {useState} from 'react';
import globalStyles from '../styles/Global.module.scss';
import popularStylesList from '../popular_styles_list/PopularStylesList';
import popularStylesStyles from '../styles/PopularStylesComponentStyle.module.scss';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';

const PopularStylesComponent = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const clickHandler =  (event) => {
        const target = event.target;
        target.classList.add(popularStylesStyles.active);
        if (selectedImage !== null) {
            selectedImage.classList.remove(popularStylesStyles.active);
        }
        setSelectedImage(target);
    };

    const imagesList = popularStylesList.map(
        (style, index) => {
            return(
                <div className={popularStylesStyles.styleImage} key={index}
                     style={ {backgroundImage: `url('${style.path}')`} }
                     onClick={clickHandler}
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