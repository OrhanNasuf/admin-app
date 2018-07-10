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

/*

import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class MyDropDown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            uiItems: this.getUiItems(),
            activeIndex: 0,
            error: ""
        };
    }

    getUiItems() {

        let i;
        let uiItems = []
        let { listItems } = this.props;

        for (i = 0; i <= listItems.length; i++) {
            
            if (i == 0) {
                uiItems.push(<MenuItem value={i} primaryText={"Please choose an item"} />);
                    
            } else {
                uiItems.push(<MenuItem value={i} primaryText={listItems[i-1]} />);
            }
        }

        return uiItems;
    }

    onChange(event, index, value) {
        console.log(value);
        this.setState({activeIndex: value});
    }

    render() {
        return(
            <DropDownMenu value={this.state.activeIndex} onChange={this.onChange.bind(this)} >
                {this.state.uiItems}
            </DropDownMenu>
        );
    }
}

export default MyDropDown;

*/