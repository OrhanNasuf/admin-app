import React from 'react';

class ErrorHelper extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {

        let {message} = this.props;

        return(
            <h4 style={{color: "red"}}>
                {message}
            </h4>
        );
    }
}
    
export default ErrorHelper;
