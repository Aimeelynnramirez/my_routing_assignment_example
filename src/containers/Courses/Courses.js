
import React, { Component } from "react";
 
import { Route } from "react-router-dom";
import Course from "../Course/Course";
 
import "./Courses.css";

class Courses extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        courses: [
          { id: 1, title: "Angular - The Complete Guide" },
          { id: 2, title: "Vue - The Complete Guide" },
          { id: 3, title: "PWA - The Complete Guide" }
        ]
      };
    }
   
    goToCoursePage(course) {
      if (course && course.id) {
        const { history } = this.props;
   
        history.push({
          pathname: `/courses/${course.id}`,
          search: new URLSearchParams({
            title: course.title
          }).toString()
        });
      }
    }
   
    render() {
      console.log(this.props);
      return (
        <div>
          <h1>Amazing Udemy Courses</h1>
          <section className="Courses">
            {this.state.courses.map(course => {
              return (
                <article
                  className="Course"
                  key={course.id}
                  onClick={() => this.goToCoursePage(course)}
                >
                  {course.title}
                </article>
              );
            })}
          </section>
          <Route path="/courses/:id" exact component={Course} />
        </div>
      );
    }
  }
   
  export default Courses;