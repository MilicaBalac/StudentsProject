package vp.advancedjava.students.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import vp.advancedjava.students.dto.CourseDTO;
import vp.advancedjava.students.model.Course;
import vp.advancedjava.students.service.CourseService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class CourseController {

    @Autowired
    CourseService courseService;

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "api/courses")
    public ResponseEntity getCoursesPage() {
        final List<CourseDTO> courses = courseService.findAll().stream()
                .map(CourseDTO::new)
                .collect(Collectors.toList());

        return new ResponseEntity<>(courses, HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "api/courses/{id}")
    public ResponseEntity getCourse(@PathVariable Long id) {
        final Course course = courseService.findOne(id);

        if (course == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        final CourseDTO courseDTO = new CourseDTO(course);
        return new ResponseEntity<>(courseDTO, HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping(value = "api/courses")
    public ResponseEntity create(@RequestBody CourseDTO courseDTO) {
        final Course course = new Course();
        course.setName(courseDTO.getName());
        course.setEspb(courseDTO.getEspb());

        final Course savedCourse = courseService.save(course);
        return new ResponseEntity<>(new CourseDTO(savedCourse), HttpStatus.CREATED);
    }

    @PreAuthorize("isAuthenticated()")
    @PutMapping(value = "api/courses/{id}")
    public ResponseEntity update(@PathVariable Long id,
                                 @RequestBody CourseDTO courseDTO) {
        final Course course = courseService.findOne(id);

        if (course == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        course.setId(id);
        course.setName(courseDTO.getName());
        course.setEspb(courseDTO.getEspb());

        final Course savedCourse = courseService.save(course);
        return new ResponseEntity<>(new CourseDTO(savedCourse), HttpStatus.OK);
    }

    @DeleteMapping(value = "api/courses/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        final Course course = courseService.findOne(id);
        if (course == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        courseService.remove(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
