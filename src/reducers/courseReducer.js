import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {

    switch (action.type) {

        case type.LOAD_COURSES_SUCCESS:
            return action.courses;

        case type.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter((course) => {
                    return course.id != action.course.id;
                }), action.course
            ];

        case type.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                action.course
            ];
    
        default:
            return state;
    }
}