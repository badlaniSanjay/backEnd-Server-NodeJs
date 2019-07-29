var students = require('../data/students.json');

function createStudent(student) {
	students.push(student);
	return students;
}

function findAllStudents() {
	return students;
}

function findStudentById(sid) {
	return students.find(student => student._id == sid)
}

function deleteStudent(sid) {
	var index = students.findIndex(student => student._id == sid)
	students.splice(index, 1)
	return students;
}

function updateStudent(sid, student){
	var index = students.findIndex(student => student._id == sid)
	students[index] = student
	return students;
}

module.exports = {
	createStudent, findAllStudents, findStudentById,
	deleteStudent, updateStudent

};
