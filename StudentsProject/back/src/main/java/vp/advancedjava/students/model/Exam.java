package vp.advancedjava.students.model;

import javax.persistence.*;

@Entity
public class Exam {
	@Id
	@GeneratedValue
	private Long id;
	
	@ManyToOne(fetch = FetchType.EAGER) 
	private Student student;
	
	@ManyToOne(fetch = FetchType.EAGER) 
	private Course course;
	
	private int grade;
	
	public Exam(Long id, Student student, Course course, int grade) {
		this.id = id;
		this.student = student;
		this.course = course;
		this.grade = grade;
	}
	
	public Exam() {
		
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	@Override
	public String toString() {
		return "Exam [id=" + id + ", student=" + student + ", course=" + course
				+ ", grade=" + grade + "]";
	}
}
