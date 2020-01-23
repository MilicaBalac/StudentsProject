package vp.advancedjava.students.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import vp.advancedjava.students.model.Course;
import vp.advancedjava.students.model.Exam;
import vp.advancedjava.students.repository.ExamRepository;

@Component
public class ExamService {
	@Autowired
	ExamRepository examRepository;

	public List<Exam> findAll() {
		return examRepository.findAll();
	}
	
	public Page<Exam> findAll(Pageable page) {
		return examRepository.findAll(page);
	}

	public Exam findOne(Long id) {
		return examRepository.findOne(id);
	}

	public Exam save(Exam exam) {
		return examRepository.save(exam);
	}

	public void remove(Long id) {
		examRepository.delete(id);
	}
	
	public List<Exam> findByStudentId(Long studentId) {
		return examRepository.findByStudentId(studentId);
	}
	
	public Page<Exam> findByStudentId(Long studentId, Pageable page) {
		return examRepository.findByStudentId(studentId, page);
	}
	
	public List<Exam> findByCourseId(Long courseId) {
		return examRepository.findByCourseId(courseId);
	}
	
	public Page<Exam> findByCourseId(Long courseId, Pageable page) {
		return examRepository.findByCourseId(courseId, page);
	}
	
	public double findStudentAvgGrade(Long studentId) {
		return examRepository.findStudentAvgGrade(studentId);
	}

	public Page<Course> findCoursesByExamCount(Pageable page) {
		return examRepository.findCoursesByExamCount(page);
	}
}