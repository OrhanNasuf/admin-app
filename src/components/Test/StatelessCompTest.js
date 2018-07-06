import React from 'react';
import {Link} from 'react-router';

const StatelessCompTest = () => {

    return (
        <div>
            <h1>Test Component</h1>
            <p>This Component is a stateless function rather than a class.</p>
            <Link to={history.back} className="btn btn-primary">Go back</Link>
        </div>
    );
}

export default StatelessCompTest;
