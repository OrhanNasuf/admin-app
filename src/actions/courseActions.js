import * as type from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
    return {
        type: type.LOAD_COURSES_SUCCESS,
        courses: courses
    };
}

export function loadCourses() {
    return (dispatch) => {
        return courseApi.getAllCourses().then((courses) => {
            dispatch(loadCoursesSuccess(courses));

        }).catch((error) => {
            throw error;
        });
    }
}