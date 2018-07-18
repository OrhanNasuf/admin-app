import * as type from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSucces(actionType) {
    return actionType.substring(actionType.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {

    if (action.type == type.BEGIN_AJAX_CALL) {
        return state + 1;

    } else if (actionTypeEndsInSucces(action.type) || action.type == type.AJAX_CALL_ERROR) {
        return state - 1;
    }

    return state;
}