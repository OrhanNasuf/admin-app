import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectInput from '../common/SelectInput';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <MuiThemeProvider>
        <form>
            <h1>Manage Course</h1>
            <TextField
                name="title"
                hintText="Title"
                value={course.title}
                onChange={onChange} />
            <br />

            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId} />
            <br />

            <TextField
                name="category"
                hintText="Category"
                value={course.category}
                onChange={onChange} />
            <br />

            <TextField
                name="length"
                hintText="Length"
                value={course.length}
                onChange={onChange} />
            <br />

             <RaisedButton
                label={loading ? "Saving..." : "Save"}
                primary={true}
                disabled = {loading}
                style={{margin: 12}}
                onClick={onSave} />
        </form>
        </MuiThemeProvider>
    );
};

export default CourseForm;