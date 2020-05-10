import * as actionNames from './actionNames';

export const addStyle = (image) => {
  return (
      {
          type: actionNames.addStyle,
          payload: image
      }
  );
};

export const addContent = (image) => {
    return (
        {
            type: actionNames.addContent,
            payload: image
        }
    );
};