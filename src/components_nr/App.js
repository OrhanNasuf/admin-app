// This component handles the App template used on every page.

import React, {PropTypes} from 'react';
import Header from './common/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from "material-ui/CircularProgress";
import {connect} from 'react-redux';

window.AppLoading = false;

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isLoading: false,
        };

        this.ajaxInProgress = this.ajaxInProgress.bind(this);

        // this.props.children.map((child) => {
        //     child.setState({
        //         updateLoadIndicator: this.updateLoadIndicator,
        //         ajaxInProgress: this.ajaxInProgress
        //     });
        // });

        // for (let child in this.props.children) {
        //     child.setState({
        //         updateLoadIndicator: this.updateLoadIndicator,
        //         ajaxInProgress: this.ajaxInProgress
        //     });
        // }

    }

    ajaxInProgress(p_bool = null) {
        if (p_bool !== null) {
            this.setState({isLoading: p_bool});
        } else {
            return this.state.isLoading;
        }
    }

    render() {
        const childWithProp = React.Children.map(
            this.props.children,
            (child) => {
                return React.cloneElement(child, {
                    ajaxInProgress: this.ajaxInProgress.bind(this),
                });
            }
        );
        
        return (
            <div className="container-fluid">
                <MuiThemeProvider>
                    {this.state.isLoading ? <CircularProgress size={200} thickness={10} style={{position: "absolute", left: "calc(50% - 100px)", top: "calc(50% - 100px)", zIndex: 5}}/> : null}
                </MuiThemeProvider>
                <Header />
                {childWithProp}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default App;
