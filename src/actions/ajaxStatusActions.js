import * as type from './actionTypes';

export function beginAjaxCall() {
    return {
        type: type.BEGIN_AJAX_CALL
    };
}

export function ajaxCallError() {
    return {
        type: type.AJAX_CALL_ERROR
    };
}