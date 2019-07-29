var answerDao = require('../daos/answer.dao.server.js');

module.exports = function(app) {
	function studentAnswersQuestion(req, res) {
		const answer = req.body;
		const sid = req.params.sid;
		const qid = req.params.qid;
		answer['student'] = sid;
		answer['question'] = qid;
		// answerDao.createAnswer(answer).then(
		// 	response => res.send(response)
		// )
		res.json(answerDao.createAnswer(answer));
	}

	function findAllAnswers(req, res) {
		// answerDao.findAllAnswers().then(
		// 	response => res.send(response)
		// )
		res.json(answerDao.findAllAnswers());
	}

	function findAnswerById(req, res){

		var ansId = req.params.aid;
		res.json(answerDao.findAnswerById(ansId));
	}

	function findAnswerByQuestion(req, res){

		var qid = req.params.qid;
		res.json(answerDao.findAnswersByQuestion(qid));
	}

	function findAnswerByStudent(req, res){

		var sid = req.params.sid;
		res.json(answerDao.findAnswersByStudent(sid));
	}

	function findAnswerByStudentAndQuestion(req, res){

		var sid = req.params.sid;
		var qid = req.params.qid;
		res.json(answerDao.findAnswersByQuestionAndStudent(qid, sid));
	}



	app.post('/api/student/:sid/question/:qid/answer', studentAnswersQuestion)	
	app.get('/api/answer', findAllAnswers)
	app.get('/api/answer/:aid', findAnswerById)
	app.get('/api/question/:qid/answer', findAnswerByQuestion)
	app.get('/api/student/:sid/answer', findAnswerByStudent)
	app.get('/api/student/:sid/question/:qid/answer', findAnswerByStudentAndQuestion)
	app.get('/api/question/:qid/student/:sid/answer', findAnswerByStudentAndQuestion)
}
