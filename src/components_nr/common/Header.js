import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <nav>
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                {" | "}
                <Link to="about" activeClassName="active">About</Link>
                {" | "}
                <Link to="courses" activeClassName="active">Courses</Link>
                {" | "}
                <Link to="test" activeClassName="active">Test</Link>
            </nav>
        );
    }
}

export default Header;
