import * as type from './actionTypes';
import courseApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors) {
    return {
        type: type.LOAD_AUTHORS_SUCCESS,
        authors: authors
    };
}

export function loadAuthors() {
    return (dispatch) => {
        return courseApi.getAllAuthors().then((authors) => {
            dispatch(loadAuthorsSuccess(authors));

        }).catch((error) => {
            throw error;
        });
    }
}