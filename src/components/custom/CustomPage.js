import React from 'react';
// import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyDropDown from './MyDropDown';
import RaisedButton from 'material-ui/RaisedButton';
import ErrorHelper from './ErrorHelper';
import MyTextField from './MyTextField';

class CustomPage extends React.Component {

    constructor(props) {
        super(props);

        const BUTTON_STYLE = {
            margin: 12
        };

        this.errorText = "";
        this.userString = "";

        this.state = {
            item: 0,
            file: null,
            name: "",
            message: "",
            error: ""
        };
    }

    uploadFile(p_file) {

        if (this.state.item === null) {
            this.setState({
                error: "Please choose an item."
            });

            return;
        }
    }

    onListSelect(event, index, value) {
        this.setState({
            item: value,
            error: ""
        });
    }

    onClickUpload(event) {

        console.log(this.props);
        
        if (this.checkRequiredField()) {
            this.setState({
                file: this.state.item,
                name: this.userString,
                error: ""
            });
        }
    }

    onTextInput(event, value) {

        this.userString = value;
        this.checkRequiredField();
    }

    checkRequiredField() {

        if (this.state.item == 0) {
            this.setState({error: "Select item from dropdown"});
            return false;
        } 

        if (this.userString === "") {
            this.setState({error: "This field is required"});
            return false;

        } else {
            this.setState({error: ""});
            return true;
        }
    }

    updateErrorMessage(message) {
        this.setState({error: message});
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <MyDropDown listItems={[1, 2, 3, 4]} />
                    <ErrorHelper message={this.state.error} />
                    <br />
                    <MyTextField onError={this.updateErrorMessage.bind(this)}/>
                    <br />
                    <RaisedButton label="UPLOAD" primary={true} style={this.BUTTON_STYLE} onClick={this.onClickUpload.bind(this)} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default CustomPage;
