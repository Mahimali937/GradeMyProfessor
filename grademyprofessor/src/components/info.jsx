import React, { Component } from "react";

export class Info extends Component {
  render() {
    return (
      <div className="">
        <div id="info">
          <h2>Info</h2>

          <p>GradeMyProfessor holds data starting from Fall 2017 to Spring 2025</p>
          <p>Update: Spring 2025 Grades & Course Evaluations now available!</p>
          <h2>Links</h2>
          <p>
            <a target="_blank" rel="noreferrer" href="https://hunter.cuny.edu">
                Hunter College Homepage
              </a>
          </p>
          <p>
          <a target="_blank" rel="noreferrer" href="https://sb.cunyfirst.cuny.edu/criteria.jsp">
              Student Schedule & Registration
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Info;