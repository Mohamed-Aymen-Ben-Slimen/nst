
import * as actionNames from './actionNames';

const initialState = {
  style: null,
  content: null
};

export const addImagesReducer = (state, action) => {
    switch (action.type) {
        case actionNames.addContent:
            return {
                ...state,
                content: action.payload
            };
        case actionNames.addStyle:
            return {
                ...state,
                style: action.payload
            };
        default:
            return initialState;
    }
};