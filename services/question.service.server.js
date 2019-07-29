var questionDao = require('../daos/question.dao.server.js');

module.exports = function(app) {
	function createQuestion(req, res) {
		const question = req.body;
		// questionDao.createQuestion(question)
		// 	.then(response => res.send(response))
		res.json(questionDao.createQuestion(question));
	}

	function findAllQuestions(req, res) {
		// questionDao.findAllQuestions().then
		// (response => res.send(response))
		res.json(questionDao.findAllQuestions());
	}

	function findQuestionById(req, res){

		var questionId = req.params.id
		// questionDao.findQuestionById().then
		// (response => res.json(response))
		res.json(questionDao.findQuestionById(questionId));
	}

	function deleteQuestion(req, res){

		var questionId = req.params['id'];
		// questionDao.deleteQuestion(questionId).then
		// (response => res.json(response))
		res.json(questionDao.deleteQuestion(questionId));
	}

	function updateQuestion(req, res){

		var questionId = req.params['id'];
		var questionUpdated = req.body;
		// questionDao.updateQuestion(question).then
		// (response => res.json(response))
		res.json(questionDao.updateQuestion(questionId, questionUpdated));
	}

	app.post('/api/question', createQuestion)
	app.get('/api/question', findAllQuestions)
	app.get('/api/question/:id', findQuestionById)
	app.delete('/api/question/:id', deleteQuestion )
	app.put('/api/question/:id', updateQuestion)
}
