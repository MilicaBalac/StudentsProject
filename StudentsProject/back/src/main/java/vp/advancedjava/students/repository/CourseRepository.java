package vp.advancedjava.students.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.advancedjava.students.model.Course;

@Component
public interface CourseRepository extends JpaRepository<Course, Long> {
}
