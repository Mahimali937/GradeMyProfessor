import React, { Component } from "react";
import NumericalLabel from "./numericalLabel.jsx";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import baseURL from "../utils/constant.js";

export class Trending extends Component {
  constructor() {
    super();
    this.state = {
      trending: null,
    };
  }

  componentDidMount() {
    this.fetchTrending();
  }

  async fetchTrending() {
    await axios.get(`${baseURL}/trending`).then((res) => {
      this.setState({ trending: res.data.trending });
    });
  }

  render() {
    const { trending } = this.state;
    const { history } = this.props;

    return (
      <div id="trending">
        <h2>Trending</h2>
        <div>
          {trending ? (
            trending.map((trend, index) => (
              <NumericalLabel
                key={index}
                name={
                  trend.instructor_name !== undefined &&
                  trend.subject_name !== undefined
                    ? `${trend.instructor_name} @ ${trend.subject_name}`
                    : trend.instructor_name !== undefined
                    ? `${trend.instructor_name}`
                    : `${trend.subject_name}`
                }
                value={
                  trend.instructor_name !== undefined
                    ? (trend.review_count ?? 0)
                    : (trend.credits ?? 0)
                }                
                label={
                  trend.instructor_name !== undefined ? "Ratings" : "Credits"
                }
                pathname={
                  trend.instructor_name !== undefined ? "/professor" : "/course"
                }
                id={
                  trend.instructor_id ? trend.instructor_id : trend.subject_id
                }
                history={history}
              />
            ))
          ) : (
            <Skeleton count={15} />
          )}
        </div>
      </div>
    );
  }
}

export default Trending;
