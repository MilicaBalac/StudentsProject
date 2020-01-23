package vp.advancedjava.students.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Course {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private int espb;

    @OneToMany(mappedBy = "course", fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    private Set<Exam> exams = new HashSet<>();

    public Course() {
    }

    public Course(Long id, String name, int espb) {
        super();
        this.id = id;
        this.name = name;
        this.espb = espb;
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

    public Set<Exam> getExams() {
        return exams;
    }

    public void setExams(Set<Exam> exams) {
        this.exams = exams;
    }

    @Override
    public String toString() {
        return "Course [id=" + id + ", name=" + name + ", espb=" + espb + "]";
    }
}
