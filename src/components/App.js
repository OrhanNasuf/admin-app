// This component handles the App template used on every page.

import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import {CircularProgress} from 'material-ui';
import {MuiThemeProvider} from 'material-ui/styles';

class App extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <Header
                    loading={this.props.loading}
                />
                {this.props.children}
                <MuiThemeProvider>
                    {this.props.loading ? <CircularProgress size={200} thickness={10} style={{position: "absolute", left: "calc(50% - 100px)", top: "calc(50% - 100px)", zIndex: 5}}/> : null}
                </MuiThemeProvider>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);
