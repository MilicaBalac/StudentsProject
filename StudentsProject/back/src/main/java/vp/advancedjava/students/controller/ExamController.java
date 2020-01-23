package vp.advancedjava.students.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import vp.advancedjava.students.dto.ExamDTO;
import vp.advancedjava.students.model.Exam;
import vp.advancedjava.students.service.ExamService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ExamController {
    @Autowired
    ExamService examService;

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "api/exams")
    public ResponseEntity getExamsPage() {
        final List<ExamDTO> retVal = examService.findAll().stream()
                .map(ExamDTO::new)
                .collect(Collectors.toList());

        return new ResponseEntity<>(retVal, HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "api/exams/{id}")
    public ResponseEntity getExam(@PathVariable Long id) {
        final Exam exam = examService.findOne(id);

        if (exam == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        final ExamDTO examDTO = new ExamDTO(exam);
        return new ResponseEntity<>(examDTO, HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @DeleteMapping(value = "api/exams/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        final Exam exam = examService.findOne(id);
        if (exam == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        examService.remove(id);
        return new ResponseEntity(HttpStatus.OK);
    }

}
