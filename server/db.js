const mongoose = require("mongoose"); 

module.exports.connectDb = async () => {
  const url = process.env.MONGO_URL || "mongodb://localhost/stackOverflow";
  return mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      return new Db();
    })
    .catch(error => {
      console.error(error);
    });
};


class Db {
  constructor() {
    const Schema = mongoose.Schema;
    const questionSchema = new Schema({
      question: String,
      answers: [{ answer: String, votes: Number }]
    });
    this.questionModel = mongoose.model("question", questionSchema);
  }

  async allQuestions() {
    try {
      return await this.questionModel.find({});
    } catch (error) {
      return {error};
    }
  }

  async getQuestion(id) {
    try {
      return await this.questionModel.findById(id);
    } catch (error) {
      return {error};
    }
  }

  async postQuestion(nQ) {
    let question = new this.questionModel(nQ);
    console.log(question);
    try {
      return question.save();
    } catch (error) {
      return {error};
    }
  }

  async postAnswer(id, res) {
    console.log(res);
    const question = await this.getQuestion(id);
    res.votes = 0;
    question.answers.push(res);

    try {
      return question.save();
    } catch (error) {
      return {error};
    }
  }

  getAnswer(q, id) {
    try {
      console.log(answerId);
      return q.answers.find(a => a._id == id);
    } catch (error) {
      return {error};
    }
  }

  async vote(questionId, answerId) {
    const question = await this.getQuestion(questionId);
    const answer = this.getAnswer(question, answerId);
    answer.votes = answer.votes + 1;
    return question.save();
  }
}
