import React, {PropType} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectInput from '../common/SelectInput';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CourseForm extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <MuiThemeProvider>
                <form>
                    <h1>Manage Course</h1>
                    <TextField
                        name="title"
                        hintText="Title"
                        value={this.props.course.title}
                        onChange={this.props.onChange} />
                    <br />
        
                    <SelectInput
                        name="authorId"
                        label="Author"
                        value={this.props.course.authorId}
                        defaultOption="Select Author"
                        options={this.props.allAuthors}
                        onChange={this.props.onChange}
                        error={this.props.errors.authorId} />
                    <br />
        
                    <TextField
                        name="category"
                        hintText="Category"
                        value={this.props.course.category}
                        onChange={this.props.onChange} />
                    <br />
        
                    <TextField
                        name="length"
                        hintText="Length"
                        value={this.props.course.length}
                        onChange={this.props.onChange} />
                    <br />
        
                    <RaisedButton
                        label={this.props.loading() ? "Saving..." : "Save"}
                        primary={true}
                        disabled = {this.props.loading()}
                        style={{margin: 12}}
                        onClick={this.props.onSave} />

                    <RaisedButton
                        label={"Cancel"}
                        secondary={true}
                        disabled={this.props.loading()}
                        style={{margin: 12}}
                        onClick={this.props.onCancel} />
                </form>
            </MuiThemeProvider>
        );
    }
}


export default CourseForm;
