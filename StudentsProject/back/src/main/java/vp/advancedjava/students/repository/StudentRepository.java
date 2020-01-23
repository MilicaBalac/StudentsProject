package vp.advancedjava.students.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.advancedjava.students.model.Student;

@Component
public interface StudentRepository extends JpaRepository<Student, Long> {
	public Student findByCardNumber(String cardNumber);
}
