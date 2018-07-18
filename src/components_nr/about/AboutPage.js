import React from 'react';
import {Link, browserHistory} from 'react-router';

class AboutPage extends React.Component {

    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This application uses React, Redux, React Router, and a variety of other helpful libraries.</p>
                <Link to={browserHistory.goBack} className="btn btn-primary">Go back</Link>
            </div>
        );
    }
}

export default AboutPage;
