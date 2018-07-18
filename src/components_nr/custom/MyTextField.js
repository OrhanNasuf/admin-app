import React from 'react';
import TextField from 'material-ui/TextField';

class MyTextField extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            input: "",
            error: ""
        }
    }

    onInput(event, value) {

        if (value == "") {
            this.setState({error: "Please enter a name"});
            this.props.onError("Please enter a name");

        } else {
            this.setState({
                input: value,
                error: ""
            });
        }
    }

    render() {
        return (
            <TextField hintText="Enter name" errorText={this.state.error} onChange={this.onInput.bind(this)} />
        );
    }
}

export default MyTextField;
