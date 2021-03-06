import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saveIndicator: false,
            deleteIndicator: false,
            confirmDeleteOpen: false,
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.confirmDeletePop = this.confirmDeletePop.bind(this);
        this.confirmDeleteClose = this.confirmDeleteClose.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.course && this.props.course.id != nextProps.course.id) {
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
    }

    saveCourse(event) {
        event.preventDefault();
        this.setState({saveIndicator: true});

        this.props.actions.saveCourse(
            this.state.course

        ).then(() => {
            browserHistory.push('/courses');
            this.setState({saveIndicator: false});
            toastr.success("Course Saved!");

        }).catch((error) => {
            this.setState({saveIndicator: false});
            toastr.error(error);
        });
    }

    deleteCourse(event) {
        event.preventDefault();
        this.setState({saveIndicator: true, deleteIndicator: true, confirmDeleteOpen: false});

        this.props.actions.deleteCourse(
            this.state.course

        ).then(() => {
            browserHistory.push('/courses');
            this.setState({saveIndicator: false, deleteIndicator: false});
            toastr.success("Course Deleted!");

        }).catch((error) => {
            this.setState({saveIndicator: false, deleteIndicator: false});
            toastr.error(error);
        });
    }

    confirmDeletePop(event) {
        event.preventDefault();
        this.setState({
            confirmDeleteAnchor: event.currentTarget,
            confirmDeleteOpen: true
        });
    }

    confirmDeleteClose() {
        this.setState({
            confirmDeleteOpen: false
        });
    }

    cancel(event) {
        event.preventDefault();
        browserHistory.push("/courses");
    }

    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                onDelete={this.deleteCourse}
                onCancel={this.cancel}
                disableDelete={!this.props.exists}
                loading={this.state.saveIndicator}
                deleting={this.state.deleteIndicator}
                confirmDeleteOpen={this.state.confirmDeleteOpen}
                confirmDeletePop={this.confirmDeletePop}
                confirmDeleteClose={this.confirmDeleteClose}
                confirmDeleteAnchor={this.state.confirmDeleteAnchor}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    exists: PropTypes.bool.isRequired
};

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};


function getCourseById(courses, id) {

    const course = courses.filter(
        (item) => {
            return item.id == id;
        }
    );

    return course ? course[0] : null;
}

function mapStateToProps(state, ownProps) {

    const courseId = ownProps.params.id; // from the path "/course/:id"
    let course;
    let courseExists;

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
        courseExists = true;

    } else {
        course = {id: "", watchHref: "", title: "", authorId: "", length: "", category: ""};
        courseExists = false;
    }
    
    const authorsFormattedForDropdown = state.authors.map((author) => {
        return {
            value: author.id,
            text: author.firstName + " " + author.lastName
        };
    });
    
    return {
        course: course,
        authors: authorsFormattedForDropdown,
        exists: courseExists
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);