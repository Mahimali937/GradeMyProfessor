import React, { Component } from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import JsonData from "../data/data.json";
export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingPageData: {},
    };
  }

  componentDidMount() {
    this.setState({ landingPageData: JsonData });
  }

  render() {
    return (
      <div>
        <Navigation {...this.props} />
        <div id="about">
          <div className="container">
            <h2>About</h2>
            <p>
              <b>GradeMyProfessor</b> is a platform built to assist students and
              faculty at Hunter College make informed decisions. This platform provides course grades and
              evaluations for all course and professors. This platform also
              provides a professor review system. We hope that you find these
              features useful.
            </p>
            <p>
              If there are any <b>bugs</b> or improvements you'd like to report
              please email us at{" "}
              <a href="mailto:admin@grademyprofessor.io">admin@grademyprofessor.io</a>
            </p>
            <br />
            <p></p>
            <h2>Review Criteria</h2>
            <p>
              <b>GradeMyProfessor</b> believes in freedom of speech, but maintains
              standards to ensure the reviews on the website are quality. To
              prevent low-quality reviews, all reviews are subject to a
              verification process. The only reviews that are not accepted are
              personal attacks on professors that provide no meaningful
              information, or any reviews that are illegal.
            </p>
            <h2>Contact Us</h2>
            <p>
              We can be contacted via email at{" "}
              <a href="mailto:admin@grademyprofessor.io">admin@grademyprofessor.io</a>
            </p>
          </div>
        </div>

        <Footer data={this.state.landingPageData.Footer} {...this.props} />
      </div>
    );
  }
}

export default About;
