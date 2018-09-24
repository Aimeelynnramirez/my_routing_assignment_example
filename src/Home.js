import React from 'react';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Course from './containers/Course/Course';

import { Route , Link} from 'react-router-dom';


 
class Home extends React.Component {
    render() {
        return(
<div className= "Home">
<header>
                    <nav>
                        <ul>
                            <li><Link to="/all-courses"
                           className ="active">Home</Link></li>
                            <li><Link
                                style={{
                                color:'lightblue',
                                textDecoration:'underline'}} 
                                to={{
                                pathname: '/Users',
                                hash: '#'
                                // search: '?quick-submit=true'
                            }}>Users</Link></li>
                             <li><Link
                                style={{
                                color:'lightblue',
                                textDecoration:'underline'}} 
                                to={{
                                pathname: '/Courses',
                                 hash: '#',
                                 search: '?'
                            }}>Courses</Link></li>
                                <li><Link
                                style={{
                                color:'lightblue',
                                textDecoration:'underline'}} 
                                to={{
                                pathname: '/Course',
                                 hash: '#',
                                 search: '?'
                            }}>Course</Link></li>
                        </ul>
                    </nav>
                </header>

<Route path="/Users" exact component={Users}/>
<Route path="/Course"  component={Course}/>
<Route path="/Courses"  component={Courses}/>
<Route path="/all-courses" exact render={()=> <h3> Welcome to the Application to View!</h3>}/>

    
</div>
        );
    }
}

export default Home;