import React, {useRef, useEffect} from 'react';

import styles from '../styles/Global.module.scss';

import * as actions from '../state_management/actions';
import contentStyle from '../styles/ContentComponentStyle.module.scss';
import UploadComponent from "./UploadComponent";
import Paper from "@material-ui/core/Paper/Paper";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import stylesStyleComp from "../styles/StyleComponentStyles.module.scss";
import PopularStylesComponent from "./PopularStylesComponent";

const ContentComponent = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={` ${styles.width45} ${styles.height100}`}>

            <h1 className={styles.titles}>Content image</h1>

            <Paper >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="Upload image" />

                </Tabs>
            </Paper>

            <Paper variant="outlined" className={`${stylesStyleComp.tabsContent} ${styles.flexColumnCenter}`}>
                {value === 0 &&
                    <UploadComponent  label={'content'} action={actions.addContent}/>
                }
            </Paper>



        </div>
    )
};

export default ContentComponent;