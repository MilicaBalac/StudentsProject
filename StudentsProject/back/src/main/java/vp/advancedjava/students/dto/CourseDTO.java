package vp.advancedjava.students.dto;

import java.util.ArrayList;
import java.util.List;

import vp.advancedjava.students.model.Course;

public class CourseDTO {
    private Long id;
    private String name;
    private int espb;

    private List<ExamDTO> exams = new ArrayList<>();

    public CourseDTO() {
    }

    public CourseDTO(Long id, String name, int espb) {
        super();
        this.id = id;
        this.name = name;
        this.espb = espb;
    }

    public CourseDTO(Course course) {
        super();
        this.id = course.getId();
        this.name = course.getName();
        this.espb = course.getEspb();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getEspb() {
        return espb;
    }

    public void setEspb(int espb) {
        this.espb = espb;
    }

    public List<ExamDTO> getExams() {
        return exams;
    }

    public void setExams(List<ExamDTO> exams) {
        this.exams = exams;
    }

    @Override
    public String toString() {
        return "CourseDTO [id=" + id + ", name=" + name + ", espb=" + espb + "]";
    }
}
