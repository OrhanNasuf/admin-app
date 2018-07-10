import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CustomPage from './components/custom/CustomPage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import StatelessCompTest from './components/Test/StatelessCompTest';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        {/* <IndexRoute component={CustomPage} /> */}
        <Route path="about" component={AboutPage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="test" component={StatelessCompTest} />
    </Route>
);
