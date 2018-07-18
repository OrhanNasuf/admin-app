import React from 'react';
import {Route, IndexRoute} from 'react-router';

// WITH REDUX:
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import StatelessCompTest from './components/Test/StatelessCompTest';
import ManageCoursePage from './components/course/ManageCoursePage';

// NO REDUX:
import AppNR from './components_nr/App';
import HomePageNR from './components_nr/home/HomePage';
import AboutPageNR from './components_nr/about/AboutPage';
import CoursesPageNR from './components_nr/course/CoursesPage';
import StatelessCompTestNR from './components_nr/Test/StatelessCompTest';
import ManageCoursePageNR from './components_nr/course/ManageCoursePage';


let doNotUseRedux = (

    <Route path="/" component={AppNR}>
        <IndexRoute component={HomePageNR} />
        {/* <IndexRoute component={CustomPage} /> */}
        <Route path="about" component={AboutPageNR} />
        <Route path="courses" component={CoursesPageNR} />
        <Route path="test" component={StatelessCompTestNR} />
        {/*<Route path="course" component={ManageCoursePage} />*/}
        {/*<Route path="course/:id" component={ManageCoursePage} />*/}
    </Route>
);

let doUseRedux = (
    <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    {/* <IndexRoute component={CustomPage} /> */}
    <Route path="about" component={AboutPage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="test" component={StatelessCompTest} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
</Route>
)

export default doUseRedux;