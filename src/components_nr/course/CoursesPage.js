import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link, browserHistory} from 'react-router';
import courseApi from '../../api/mockCourseApi';
import AuthorApi from '../../api/mockAuthorApi';
import ReactTable from 'react-table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "react-table/react-table.css";
import ManageCoursePage from './ManageCoursePage';
import toastr from 'toastr';

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            showManagePage: false,
            managePageCourse: null,
            courses: [],
            authors: []
        };

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        this.toggleManagePage = this.toggleManagePage.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
        this.loadCourses();
        this.loadAuthors();
    }

    loadCourses() {
        this.props.ajaxInProgress(true);

        courseApi.getAllCourses().then((courses) => {
            this.props.ajaxInProgress(false);
            this.setState({courses: courses});

        }).catch((error) => {
            this.props.ajaxInProgress(false);
            throw error;
        });
    }

    loadAuthors() {
        this.props.ajaxInProgress(true);

        AuthorApi.getAllAuthors().then((authors) => {
            this.props.ajaxInProgress(false);
            this.setState({authors: authors});

        }).catch((error) => {
            this.props.ajaxInProgress(false);
            throw error;
        });
    }

    saveCourse(evt, course) {
        this.props.ajaxInProgress(true);

        courseApi.saveCourse(course).then(() => {
            this.props.ajaxInProgress(false);
            this.toggleManagePage();
            this.loadCourses();
            toastr.success("Course Saved!");

        }).catch((error) => {
            this.props.ajaxInProgress(false);
            toastr.error(error);
        });
    }

    deleteCourse(course) {
        this.props.ajaxInProgress(true);

        courseApi.deleteCourse(course.id).then(() => {
            browserHistory.push('/courses');
            this.props.ajaxInProgress(false);
            toastr.success("Course Deleted!");

        }).catch((error) => {
            this.props.ajaxInProgress(false);
            toastr.error(error);
        });
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    toggleManagePage(evt, course) {
        this.setState({
            showManagePage: this.state.showManagePage ? false : true,
            managePageCourse: course
        });
    }

    render() {
        const {courses} = this.state;

        if (this.state.showManagePage == true) {

            return (
                <ManageCoursePage
                    course= {this.state.managePageCourse}
                    authors={this.state.authors}
                    saveCourse={this.saveCourse}
                    toggleManagePage={this.toggleManagePage}
                    ajaxInProgress={this.props.ajaxInProgress}
                />
            );

        } else {

            return (
                <div>
                <h1>Courses</h1>
                <MuiThemeProvider>
                    <RaisedButton label="ADD COURSE" primary={true} onClick={this.redirectToAddCoursePage} />
                </MuiThemeProvider>
                <ReactTable
                    data={courses}
                    defaultPageSize={10}
                    columns={[
                        {
                            Header: "",
                            id: 'watchLink',
                            accessor: (item) => {
                                return <a href={item.watchHref} target="_blank">Watch</a>;
                            },
                            maxWidth: 60
                        },
                        {
                            Header: "",
                            id: 'editLink',
                            accessor: (item) => {
                                return <a onClick={this.toggleManagePage.bind(this, null, item)} style={{cursor: "pointer"}}>Edit</a>;
                            },
                            maxWidth: 40
                        },
                        {
                            Header: "Title",
                            accessor: "title"
                        },
                        {
                            Header: "Author",
                            accessor: "authorId",
                            maxWidth: 120
                        },
                        {
                            Header: "Category",
                            accessor: "category",
                            maxWidth: 180
                        },
                        {
                            Header: "Length",
                            accessor: "length",
                            maxWidth: 60
                        }
                    ]}
                />
                </div>
            );
        }
    }
}

CoursesPage.propTypes = {
    ajaxInProgress: PropTypes.func.isRequired
};

export default CoursesPage;
