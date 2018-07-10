import React from 'react';
import CourseListRow from './CourseListRow';

class CourseList extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Length</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.courses.map((course) => {
                        return <CourseListRow key={course.id} course={course} />;
                    })}
                </tbody>
            </table>
        );
    }
}

export default CourseList;