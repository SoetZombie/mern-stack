import React, { Component } from "react";
import { Link } from "@reach/router";
import PostAnswer from "./PostAnswer";

class Question extends Component {
  constructor(props) {
    super(props);
    this.onVote = this.onVote.bind(this);
  }

  onVote(event) {
    this.props.onVote(this.props.id, event.currentTarget.dataset.id);
  }

  render() {
    let title = "";
    let answ = "";
    const question = this.props.getQuestion(this.props.id);
    if (question) {
      title = question.question;
      if (question.answers) {
        console.log(question.answers);
        answ = question.answers.map((answer, id) => (
          <div key={answer._id} id={answer._id} className="list-group ">
            <div className="row mb-5 flex-column">
              <div className="text-center d-flex ">
                <div className="text-center">
                  Votes <b>{answer.votes}</b>
                </div>
                <div class="ml-2"onClick={() =>
                    this.props.onVote(this.props.id, answer._id)}> + </div>
              </div>
              <div className="list-group-item">{answer.answer}</div>
            </div>
          </div>
        ))
        return(
          <div className="col-md-6 mx-auto">
            <div className="row col-md-12 flex-column justify-content-center">
            <h2 class="mx-auto">Question</h2>
           <h4 className="mx-auto"> {title}</h4>
            </div>
            <div>
            <h4>Answers</h4>
            <div>
            {answ.length === 0 ? <p>No Answers!</p> : answ}
            </div>

          <div>
            <PostAnswer
              qid={this.props.id}
              postAnswer={(questionId, text) =>
                this.props.postAnswer(questionId, text)
              }
            />
          </div>
        </div>
        <div className="mt-5">
          <Link to="/">
            Go back
          </Link>
        </div>
      </div>
          
          
        );
        
      }
    }
    return (
     <div>No content</div>
    );
  }
}

export default Question;
