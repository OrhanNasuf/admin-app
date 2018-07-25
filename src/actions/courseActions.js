import * as type from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
    return {type: type.LOAD_COURSES_SUCCESS, courses: courses};
}

export function updateCourseSuccess(course) {
    return {type: type.UPDATE_COURSE_SUCCESS, course: course};
}

export function createCourseSuccess(course) {
    return {type: type.CREATE_COURSE_SUCCESS, course: course};
}

export function deleteCourseSuccess(course) {
    return {type: type.DELETE_COURSE_SUCCESS, course: course};
}

export function loadCourses() {
    return (dispatch) => {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then((courses) => {
            dispatch(loadCoursesSuccess(courses));

        }).catch((error) => {
            dispatch(ajaxCallError());
            throw error;
        });
    };
}

export function saveCourse(course) {
    return (dispatch, getState) => {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then((savedCourse) => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));

        }).catch((error) => {
            dispatch(ajaxCallError());
            throw error;
        });
    };
}

export function deleteCourse(course) {
    return (dispatch, getState) => {
        dispatch(beginAjaxCall());
        return courseApi.deleteCourse(course).then(() => {
            dispatch(deleteCourseSuccess(course));

        }).catch((error) => {
            dispatch(ajaxCallError());
            throw error;
        });
    };
}