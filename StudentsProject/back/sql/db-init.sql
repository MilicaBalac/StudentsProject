use dbstudentssecurity;

-- password is 12345
insert into security_user (username, password, first_name, last_name) values 
	('admin', '$2a$04$4pqDFh9SxLAg/uSH59JCB.LwIS6QoAjM9qcE7H9e2drFuWhvTnDFi', 'Admin', 'Admin');
-- password is abcdef (bcrypt encoded)
insert into security_user (username, password, first_name, last_name) values 
	('petar', '$2a$04$Yr3QD6lbcemnrRNLbUMLBez2oEK15pdacIgfkvymQ9oMhqsEE56EK', 'Petar', 'Petrovic');

-- insert authorities
insert into security_authority (name) values ('ROLE_ADMIN'); -- super user
insert into security_authority (name) values ('ROLE_USER'); -- normal user

-- insert mappings between users and authorities
insert into security_user_authority (user_id, authority_id) values (1, 1); -- admin has ROLE_ADMIN
insert into security_user_authority (user_id, authority_id) values (1, 2); -- admin has ROLE_USER too
insert into security_user_authority (user_id, authority_id) values (2, 2); -- petar has ROLE_USER

insert into student (card_number, first_name, last_name) values ('e44', 'Zoran', 'Zoranovic');
insert into student (card_number, first_name, last_name) values ('e352', 'Ana', 'Krunic');
insert into student (card_number, first_name, last_name) values ('e20', 'Stevan', 'Stevic');
insert into student (card_number, first_name, last_name) values ('e22', 'Mihajlo', 'Mihajlovic');
insert into student (card_number, first_name, last_name) values ('e123', 'Mitar', 'Markovic');

insert into course (name, espb) values ('Web programiranje', 6);
insert into course (name, espb) values ('Testiranje softvera', 4);
insert into course (name, espb) values ('Algebra', 8);
insert into course (name, espb) values ('Algoritmi i strukture podataka', 6);
insert into course (name, espb) values ('Objektno orijentisano programiranje', 8);
insert into course (name, espb) values ('Klijentske tehnologije', 6);
insert into course (name, espb) values ('Sistemi bazirani na znanju', 5);

insert into exam (student_id, course_id, grade) values (1, 1, 8);
insert into exam (student_id, course_id, grade) values (1, 2, 7);
insert into exam (student_id, course_id, grade) values (2, 3, 10);
insert into exam (student_id, course_id, grade) values (3, 4, 9);
insert into exam (student_id, course_id, grade) values (4, 1, 9);
insert into exam (student_id, course_id, grade) values (4, 3, 10);
insert into exam (student_id, course_id, grade) values (5, 7, 10);