package vp.advancedjava.students.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import vp.advancedjava.students.model.Course;
import vp.advancedjava.students.model.Exam;

@Component
public interface ExamRepository extends JpaRepository<Exam, Long> {
	
	public List<Exam> findByStudentId(Long studentId);
	public Page<Exam> findByStudentId(Long studentId, Pageable page);
	
	public List<Exam> findByCourseId(Long courseId);
	public Page<Exam> findByCourseId(Long courseId, Pageable page);
	
	@Query("SELECT avg(e.grade) from Exam e where e.student.id = :id")
	public double findStudentAvgGrade(@Param("id") Long studentId);
	
	@Query("SELECT e.course from Exam e group by e.course order by count(e.course)")
	public Page<Course> findCoursesByExamCount(Pageable page);
}
