import React, { Component } from "react";
import NewQ from "./NewQ";
import { Link } from "@reach/router";

class Questions extends Component {
  render() {

    return (
      <div class="col-md-12">
        <h3 class="text-center">Ask a Question</h3>
        <div class="col-md-6 mx-auto">
          <NewQ askQuestion={text => this.props.askQuestion(text)} />
        </div>
        <h3 class="text-center">Or browse other questions</h3>
        <ul> {this.props.questions.map(question => (
          <li class="question-list-item">
            <h5>
              <Link to={`/question/${question._id}`}>{question.question}</Link>
            </h5>
          </li>
        ))}
        </ul>

      </div>
    );
  }
}

export default Questions;
