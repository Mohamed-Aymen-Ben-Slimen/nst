
import deepai from 'deepai';


deepai.setApiKey('c5a7e157-834d-4ca9-8369-8d68845d077e');

const NST_API = (content, style) => {
   return deepai.callStandardApi("fast-style-transfer", {
        content: content,
        style: style,
    });
};

export default NST_API;