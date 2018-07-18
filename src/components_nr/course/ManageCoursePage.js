import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import CourseForm from './CourseForm';
import courseApi from '../../api/mockCourseApi';
import toastr from 'toastr';

{/* <ManageCoursePage
                    course= {this.state.managePageCourse}
                    authors={this.state.authors}
                    addCourse={this.addCourse}
                    toggleManagePage={this.toggleManagePage}
                /> */}

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            authors: this.formatAuthors(),
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            // Necessary to populate form when existing course is loaded directly.
            this.setState({
                course: Object.assign({}, nextProps.course)
            });
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});

        /*
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
        */
    }

    formatAuthors() {
        return [...this.props.authors].map((item) => {
            return {
                value: item.id,
                text: item.firstName + " " + item.lastName
            };
        });
    }
    
    render() {
        return (
            <CourseForm
                allAuthors={this.state.authors}
                course={this.state.course}
                errors={this.state.errors}
                onChange={this.updateCourseState}
                onSave={this.props.saveCourse.bind(this, null, this.state.course)}
                onCancel={this.props.toggleManagePage}
                loading={this.props.ajaxInProgress}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    toggleManagePage: PropTypes.func.isRequired,
    ajaxInProgress: PropTypes.func.isRequired
};

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

export default ManageCoursePage;