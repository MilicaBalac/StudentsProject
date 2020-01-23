package vp.advancedjava.students.dto;

import vp.advancedjava.students.model.Exam;


public class ExamDTO {
    private Long id;
    private StudentDTO student;
    private CourseDTO course;
    private int grade;

    public ExamDTO(Long id, StudentDTO student, CourseDTO course, int grade) {
        this.id = id;
        this.student = student;
        this.course = course;
        this.grade = grade;
    }

    public ExamDTO(Exam exam) {
        this.id = exam.getId();
        this.course = new CourseDTO(exam.getCourse());
        this.grade = exam.getGrade();
    }

    public ExamDTO() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public StudentDTO getStudent() {
        return student;
    }

    public void setStudent(StudentDTO student) {
        this.student = student;
    }

    public CourseDTO getCourse() {
        return course;
    }

    public void setCourse(CourseDTO course) {
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
        return "ExamDTO [id=" + id + ", student=" + student + ", course=" + course
                + ", grade=" + grade + "]";
    }
}
