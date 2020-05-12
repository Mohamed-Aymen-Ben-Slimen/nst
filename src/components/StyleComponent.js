import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PopularStylesComponent from "./PopularStylesComponent";
import styles from '../styles/Global.module.scss';
import stylesStyleComp from '../styles/StyleComponentStyles.module.scss';
import UploadComponent from "./UploadComponent";
import * as actions from "../state_management/actions";


export default function CenteredTabs() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={ `${styles.width45} ${styles.height100}` }>

            <h1 className={styles.titles}>Style image</h1>
        <Paper >
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab label="Popular styles" />
                <Tab label="Upload style" />
            </Tabs>
        </Paper>

            <Paper variant="outlined" className={`${stylesStyleComp.tabsContent} ${styles.flexColumnCenter}`}>
                {value === 0 ?
                    <PopularStylesComponent/>
                    :
                    <div >
                        <UploadComponent label={'style'} action={actions.addStyle}/>
                    </div>
                }
            </Paper>
        </div>
    );
}