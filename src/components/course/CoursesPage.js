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
import "react-table/react-table.css";

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
                <ReactTable
                    data={courses}
                    defaultPageSize={10}
                    columns={[
                        {
                            Header: "",
                            id: 'watchHref',
                            accessor: (item) => {
                                return <a href={item.watchHref} target="_blank">Watch</a>;
                            },
                            maxWidth: 60
                        },
                        {
                            Header: "Title",
                            id: "title",
                            accessor: (item) => {
                                return <Link to={"/course/" + item.id}>{item.title}</Link>;
                            },
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

function mapStateToProps(reducer, ownProps) {
    return {
        courses: reducer.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);