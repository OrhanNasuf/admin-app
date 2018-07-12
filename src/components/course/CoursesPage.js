import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }
/*
    courseRow(course, index) {
        return (
            <div key={index}>{course.title}</div>
        );
    }
*/
    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <MuiThemeProvider>
                    <RaisedButton label="ADD COURSE" primary={true} onClick={this.redirectToAddCoursePage} />
                </MuiThemeProvider>
                <CourseList courses={courses} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);