package vp.advancedjava.students.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vp.advancedjava.students.dto.ExamDTO;
import vp.advancedjava.students.dto.StudentDTO;
import vp.advancedjava.students.model.Course;
import vp.advancedjava.students.model.Exam;
import vp.advancedjava.students.model.Student;
import vp.advancedjava.students.service.ExamService;
import vp.advancedjava.students.service.StudentService;
import vp.advancedjava.students.util.SortingOrder;

@RestController
public class StudentController {

    @Autowired
    StudentService studentService;

    @Autowired
    ExamService examService;

    @GetMapping(value = "api/students")
    public ResponseEntity getStudentsPage(@RequestParam(required = false, defaultValue="") String cardNumber) {
        List<StudentDTO> students = new ArrayList<StudentDTO>();
        if (!cardNumber.isEmpty()) {
            final Student student = studentService.findByCardNumber(cardNumber);
            if (student != null) {
            	students = Arrays.asList(createDtoWithExams(student));
            }
        }
        else {
            students = studentService.findAll().stream()
                    .map(this::createDtoWithExams)
                    .collect(Collectors.toList());
        }

        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    private StudentDTO createDtoWithExams(Student student) {
        final StudentDTO dto = new StudentDTO(student);
        final Set<Exam> studentExams = student.getExams();
        final List<ExamDTO> examDtos = studentExams.stream()
                .map(ExamDTO::new)
                .collect(Collectors.toList());
        dto.setExams(examDtos);

        final double average = studentExams.stream()
                .mapToDouble(Exam::getGrade)
                .average()
                .orElse(0);

        final int points = studentExams.stream()
                .map(Exam::getCourse)
                .mapToInt(Course::getEspb)
                .sum();

        dto.setAverage(average);
        dto.setPoints(points);

        return dto;
    }

    @GetMapping(value = "api/students/{id}")
    public ResponseEntity getStudent(@PathVariable Long id) {
        Student student = studentService.findOne(id);

        if (student == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        final StudentDTO studentDTO = createDtoWithExams(student);
        return new ResponseEntity<>(studentDTO, HttpStatus.OK);
    }

    @PostMapping(value = "api/students")
    public ResponseEntity create(@RequestBody StudentDTO studentDTO) {
        final Student student = new Student();
        student.setCardNumber(studentDTO.getCardNumber());
        student.setFirstName(studentDTO.getFirstName());
        student.setLastName(studentDTO.getLastName());

        final Student savedStudent = studentService.save(student);
        return new ResponseEntity<>(createDtoWithExams(savedStudent), HttpStatus.CREATED);
    }

    @PutMapping(value = "api/students/{id}")
    public ResponseEntity update(@PathVariable Long id,
                                 @RequestBody StudentDTO studentDTO) {
        final Student student = studentService.findOne(id);

        if (student == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        student.setId(id);
        student.setCardNumber(studentDTO.getCardNumber());
        student.setFirstName(studentDTO.getFirstName());
        student.setLastName(studentDTO.getLastName());

        final Student savedStudent = studentService.save(student);
        return new ResponseEntity<>(createDtoWithExams(savedStudent), HttpStatus.CREATED);
    }

    @DeleteMapping(value = "api/students/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        final Student student = studentService.findOne(id);
        if (student == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        studentService.remove(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping(value = "api/students/{id}/exams")
    public ResponseEntity createExam(@PathVariable Long id, @RequestBody ExamDTO examDTO) {
        final Student student = studentService.findOne(id);
        if (student == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        final Exam exam = new Exam();
        exam.setGrade(examDTO.getGrade());
        exam.setStudent(student);
        exam.setCourse(new Course(examDTO.getCourse().getId(), null, 0));

        final Exam savedExam = examService.save(exam);
        return new ResponseEntity<>(new ExamDTO(savedExam), HttpStatus.CREATED);
    }

    @GetMapping(path = "api/students", params = "averageGreaterThan")
    public ResponseEntity getWithAverageGreater(@RequestParam double averageGreaterThan) {
        final List<StudentDTO> students = studentService.findAll().stream()
                .map(this::createDtoWithExams)
                .filter(student -> student.getAverage() >= averageGreaterThan)
                .collect(Collectors.toList());

        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    @GetMapping(path = "api/students", params = "sortBy")
    public ResponseEntity getWithAverageGreater(@RequestParam SortingOrder sortBy) {
        Comparator<StudentDTO> comparator = Comparator.comparingDouble(StudentDTO::getAverage);
        if (SortingOrder.DESC == sortBy) {
            comparator = comparator.reversed();
        }

        final List<StudentDTO> students = studentService.findAll().stream()
                .map(this::createDtoWithExams)
                .sorted(comparator)
                .collect(Collectors.toList());

        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    @GetMapping(path = "api/students/maxAverage")
    public ResponseEntity getWithMaxAverage() {
        final List<StudentDTO> students = studentService.findAll().stream()
                .map(this::createDtoWithExams)
                .collect(Collectors.toList());

        final double maxAverage = students.stream()
                .mapToDouble(StudentDTO::getAverage)
                .max()
                .orElse(0);

        final List<StudentDTO> maxAverageStudents = students.stream()
                .filter(student -> student.getAverage() >= maxAverage)
                .collect(Collectors.toList());

        return new ResponseEntity<>(maxAverageStudents, HttpStatus.OK);
    }

    @GetMapping(path = "api/students/forNextYear")
    public ResponseEntity getForNextYear() {
        final List<StudentDTO> students = studentService.findAll().stream()
                .map(this::createDtoWithExams)
                .filter(student -> student.getPoints() >= 60)
                .collect(Collectors.toList());

        return new ResponseEntity<>(students, HttpStatus.OK);
    }

}
