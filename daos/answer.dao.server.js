var answers = require('../data/answers.json');

function createAnswer(answer) {
    answers.push(answer);
    return answers;
}

function findAllAnswers() {
    return answers;
}

function findAnswerById(answerId) {
    return answers.find(answer => answer._id == answerId)
}

function findAnswersByStudent(studentId){
    return answers.filter(answer => answer.student == studentId)
}

function findAnswersByQuestion(questionId){
    return answers.filter(answer => answer.question == questionId)
}

function findAnswersByQuestionAndStudent( questionId, studentId){
    return answers.filter(answer => answer.question == questionId && answer.student == studentId )
}

module.exports = {
    createAnswer, findAllAnswers, findAnswerById, findAnswersByStudent,
    findAnswersByQuestion, findAnswersByQuestionAndStudent

};
