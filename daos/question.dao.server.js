var questions = require('../data/questions.json');

function createQuestion(question) {
    questions.push(question);
    return questions;
}

function findAllQuestions() {
    return questions;
}

function findQuestionById(questionId) {
    return questions.find(question => question._id == questionId)
}

function deleteQuestion(questionId){
    var index = questions.findIndex(question => question._id == questionId)
    questions.splice(index, 1)
    return questions;
}

function updateQuestion(questionId, question){
    var index = questions.findIndex(question => question._id == questionId)
    questions[index] = question
    return questions;
}

module.exports = {
    createQuestion, findAllQuestions, findQuestionById,
    deleteQuestion, updateQuestion

};
