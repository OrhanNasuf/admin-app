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
