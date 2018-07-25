import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {Link} from 'react-router';
import ReactTable from 'react-table';
import SelectInput from '../common/SelectInput';
import "react-table/react-table.css";

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            authorFilter: "",
            courses: this.props.courses
        }

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        this.filterCourses = this.filterCourses.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    filterCourses(event) {
        const authorId = event.target.value;

        const filteredCourses = [
            ...this.props.courses.filter((course) => {
                if (authorId === "" || authorId === course.authorId) {
                    return course;
                }
            })
        ];

        this.setState({
            courses: filteredCourses,
            authorFilter: authorId
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.courses.length != nextProps.courses.length) {
            this.setState({
                courses: nextProps.courses
            });
        }
    }

    render() {
        const {courses} = this.state;

        return (
            <div>
                <h1>Courses</h1>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0 20px 0"}}>
                    <MuiThemeProvider>
                        <div style={{marginRight: "20px"}}>
                            <RaisedButton label="ADD COURSE" primary={true} onClick={this.redirectToAddCoursePage} />
                        </div>
                    </MuiThemeProvider>
                    <SelectInput
                        name="authorFilter"
                        value={this.state.authorFilter}
                        defaultOption="Filter by Author"
                        options={this.props.authors}
                        onChange={this.filterCourses}
                        error={""}
                    />
                </div>
                <ReactTable
                    data={courses}
                    defaultPageSize={10}
                    columns={[
                        {
                            Header: "",
                            id: 'watchUrl',
                            accessor: (item) => {
                                return <a href={item.watchHref} target="_blank">Watch</a>;
                            },
                            maxWidth: 60
                        },
                        {
                            Header: "",
                            id: 'editCourse',
                            accessor: (item) => {
                                return <Link to={"/course/" + item.id}>Edit</Link>;
                            },
                            maxWidth: 50
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

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses,
        authors: state.authors.map((author) => {
            return {
                value: author.id,
                text: author.firstName + " " + author.lastName
            };
        })
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);