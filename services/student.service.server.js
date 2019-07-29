var studentDao = require('../daos/student.dao.server.js');

module.exports = function (app) {

	console.log('student service server')

	function createStudent(req, res) {
		console.log('createStudent')
		var student = req.body
		console.log(student)
		// studentDao
		// 	.createStudent(student)
		// 	.then(response => res.send(response))
		res.json(studentDao.createStudent(student));
	}

	function findAllStudents(req, res) {
		console.log('findAllStudents')
		// studentDao
		// 	.findAllStudents()
		// 	.then(students => res.send(students))

		res.json(studentDao.findAllStudents());
	}

	function findStudentById(req, res) {
		var studentId = req.params['sid'];
		// studentDao
		// 	.findStudentById(studentId)
		// 	.then(student => res.json(student))
		res.json(studentDao.findStudentById(studentId));
	}



	function updateStudent(req, res) {
		var studentId = req.params['sid'];
		var studentUpdated = req.body
		// studentDao
		// 	.updateStudent(studentId, studentUpdates)
		// 	.then(status => res.json(status))
		res.json(studentDao.updateStudent(studentId, studentUpdated))
	}

	function deleteStudent(req, res) {
		var studentId = req.params['sid'];
		// studentDao
		// 	.deleteStudent(studentId)
		// 	.then(status => res.json(status))
		res.json(studentDao.deleteStudent(studentId));
	}

	app.post('/api/student', createStudent);
	app.get('/api/student', findAllStudents);
	app.get('/api/student/:sid', findStudentById);
	app.put('/api/student/:sid', updateStudent);
	app.delete('/api/student/:sid', deleteStudent);
}
