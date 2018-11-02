import { combineReducers } from 'redux';

const toastState = {
    text: ''
};
const toastRedcuer = (state = toastState, action) => {
    switch (action.type) {
        case 'TOAST_SHOW':
            return {
                text: action.text
            }
        default:
            return toastState;
    }
}

export default combineReducers({
    toastState: toastRedcuer
});