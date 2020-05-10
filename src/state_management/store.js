import {createStore, combineReducers} from 'redux';
import * as reducers from './reducers';

let store = createStore( combineReducers(
    {
        images: reducers.addImagesReducer
    }
) );

export default store;