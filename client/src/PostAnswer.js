import React, { Component } from "react";

class PostAnswer extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      input: "" 
    };
  }

  onChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  onClick(event) {
    console.log(this.state.input);
    event.preventDefault();
    this.props.postAnswer(this.props.qid, this.state.input)

  render() {
    return (
      <div className="card postAnswer col-lg-8">
        <div className="card-body">
          <form>
            <div className="form-row align-items-center">
              <div className="col-md-9">
                <input
                  onChange={event => this.onChange(event)}
                  type="text"
                  placeholder="Post answer"
                  className="form-control mb-2"
                />
              </div>
              <div className="col-md-3">
                <button
                  type="submit"
                  className="btn btn-info mb-2"
                  onClick={event => this.onClick(event)}
                >
                  Post answer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PostAnswer;
