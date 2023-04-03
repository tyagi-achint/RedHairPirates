create database ERP_DB1;

use ERP_DB1;

create table user(StudentID varchar(50) primary key not null,
			      DOB date,Email_addr varchar(100),password varchar(50));
                  
insert into user values('S1001','2007-07-27','siddeshmukh12@gmail.com','S1001@123'),
						  ('S1002','2007-08-16','karankolhe23@gmail.com','S1002@123'),
                          ('S1003','2008-04-13','ajaygosawi34@gmail.com','S1003@123'),
                          ('S1004','2007-03-12','arjundhage45@gmail.com','S1004@123'),
                          ('S1005','2008-08-12','pritamlondhe89@gmail.com','S1005@123'),
                          ('S1006','2007-09-06','sakshipatil56@gmail.com','S1006@123'),
                          ('S1007','2008-10-13','poojanimase89@gmail.com','S1007@123'),
                          ('S1008','2007-06-17','ankitdongare90@gmail.com','S1008@123'),
                          ('S1009','2008-09-02','anushakadige25@gmail.com','S1009@123'),
                          ('S1010','2008-10-06','kalyanibawa62@gmail.com','S1010@123');
                          
create table profile(rollno int primary key not null,fname varchar(30),mname varchar(30),
					 lname varchar(30),DOB date,std varchar(10), sec varchar(10), gender varchar(15),
                     contact bigint,StudentID int,foreign key (StudentID) references user(StudentID));
                     
alter table profile
modify column StudentID varchar(50);

insert into profile values(01,'Sidharth','Ashok','Deshmukh','2007-07-27','10th','A','Male',7896563223,'S1001');                   
                   
insert into profile values(02,'Karan','Sujit','Kolhe','2007-08-16','10th','A','Male',7892344223,'S1002'),                   
						  (03,'Ajay','Subhash','Gosawi','2008-04-13','10th','A','Male',9656343223,'S1003'),
                          (04,'Arjun','Rahul','Dhage','2007-03-12','10th','A','Male',8965463223,'S1004'),
                          (05,'Priyam','Akshay','Londhe','2008-08-12','10th','A','Male',9896563223,'S1005'),
                          (06,'Sakshi','Pravin','Patil','2007-09-06','10th','A','Female',8965623523,'S1006'),
                          (07,'Pooja','Rohit','Nimase','2008-10-13','10th','A','Female',7896789523,'S1007'),
                          (08,'Ankit','Suresh','Dongare','2007-06-17','10th','A','Male',7896223423,'S1008'),
                          (09,'Anushaka','Akash','Dige','2008-09-02','10th','A','Female',8963632113,'S1009'),
                          (10,'Kalyani','Yash','Bawa','2008-10-06','10th','A','Female',8971632113,'S1010');
                          
create table Syllabus(subcode int primary key not null,sub_name varchar(30),completion float);

insert into Syllabus values(101,'Math',80),
						   (102,'Hindi',90),
                           (103,'Science',70),
                           (104,'English',75.5),
                           (105,'Social_Study',88.5);
                           
create table attendance(StudentID varchar(50),rollno int,sub_name varchar(30),attendance float,
					   foreign key (StudentID) references user(StudentID),
                       foreign key (rollno) references profile(rollno));
                       
insert into attendance values('S1001',01,'Math',80.5),
							 ('S1001',01,'Hindi',92.5),
                             ('S1001',01,'Science',85.5),
                             ('S1001',01,'English',89.5),
                             ('S1001',01,'Social_Study',77.5),
                             ('S1002',02,'Math',90.5),
							 ('S1002',02,'Hindi',82.5),
                             ('S1002',02,'Science',75.5),
                             ('S1002',02,'English',79.5),
                             ('S1002',02,'Social_Study',87.5),
                             ('S1003',03,'Math',78.5),
							 ('S1003',03,'Hindi',82.5),
                             ('S1003',03,'Science',95.5),
                             ('S1003',03,'English',79.3),
                             ('S1003',03,'Social_Study',79.5),
                             ('S1004',04,'Math',78.5),
							 ('S1004',04,'Hindi',79.5),
                             ('S1004',04,'Science',76.5),
                             ('S1004',04,'English',89.5),
                             ('S1004',04,'Social_Study',76.5),
                             ('S1005',05,'Math',80.6),
							 ('S1005',05,'Hindi',92.7),
                             ('S1005',05,'Science',85.4),
                             ('S1005',05,'English',89.7),
                             ('S1005',05,'Social_Study',77.1),
                             ('S1006',06,'Math',80.5),
							 ('S1006',06,'Hindi',92.5),
                             ('S1006',06,'Science',85.5),
                             ('S1006',06,'English',89.5),
                             ('S1006',06,'Social_Study',77.5),
                             ('S1007',07,'Math',90.5),
							 ('S1007',07,'Hindi',82.5),
                             ('S1007',07,'Science',75.5),
                             ('S1007',07,'English',79.5),
                             ('S1007',07,'Social_Study',87.5),
                             ('S1008',08,'Math',78.5),
							 ('S1008',08,'Hindi',82.5),
                             ('S1008',08,'Science',95.5),
                             ('S1008',08,'English',79.3),
                             ('S1008',08,'Social_Study',79.5),
                             ('S1009',09,'Math',78.5),
							 ('S1009',09,'Hindi',79.5),
                             ('S1009',09,'Science',76.5),
                             ('S1009',09,'English',89.5),
                             ('S1009',09,'Social_Study',76.5),
                             ('S1010',10,'Math',80.6),
							 ('S1010',10,'Hindi',92.7),
                             ('S1010',10,'Science',85.4),
                             ('S1010',10,'English',89.7),
                             ('S1010',10,'Social_Study',77.1);
                             
create table result(StudentID varchar(50),rollno int,sub_name varchar(30),marks float, result varchar(30),
					   foreign key (StudentID) references user(StudentID),
                       foreign key (rollno) references profile(rollno));
                       
insert into result values('S1001',01,'Math',80.5,'Pass'),
							 ('S1001',01,'Hindi',92.5,'Pass'),
                             ('S1001',01,'Science',85.5,'Pass'),
                             ('S1001',01,'English',89.5,'Pass'),
                             ('S1001',01,'Social_Study',77.5,'Pass'),
                             ('S1002',02,'Math',90.5,'Pass'),
							 ('S1002',02,'Hindi',82.5,'Pass'),
                             ('S1002',02,'Science',75.5,'Pass'),
                             ('S1002',02,'English',79.5,'Pass'),
                             ('S1002',02,'Social_Study',87.5,'Pass'),
                             ('S1003',03,'Math',78.5,'Pass'),
							 ('S1003',03,'Hindi',82.5,'Pass'),
                             ('S1003',03,'Science',95.5,'Pass'),
                             ('S1003',03,'English',79.3,'Pass'),
                             ('S1003',03,'Social_Study',79.5,'Pass'),
                             ('S1004',04,'Math',78.5,'Pass'),
							 ('S1004',04,'Hindi',79.5,'Pass'),
                             ('S1004',04,'Science',76.5,'Pass'),
                             ('S1004',04,'English',89.5,'Pass'),
                             ('S1004',04,'Social_Study',76.5,'Pass'),
                             ('S1005',05,'Math',80.6,'Pass'),
							 ('S1005',05,'Hindi',92.7,'Pass'),
                             ('S1005',05,'Science',85.4,'Pass'),
                             ('S1005',05,'English',89.7,'Pass'),
                             ('S1005',05,'Social_Study',77.1,'Pass'),
                             ('S1006',06,'Math',80.5,'Pass'),
							 ('S1006',06,'Hindi',92.5,'Pass'),
                             ('S1006',06,'Science',85.5,'Pass'),
                             ('S1006',06,'English',89.5,'Pass'),
                             ('S1006',06,'Social_Study',77.5,'Pass'),
                             ('S1007',07,'Math',90.5,'Pass'),
							 ('S1007',07,'Hindi',82.5,'Pass'),
                             ('S1007',07,'Science',75.5,'Pass'),
                             ('S1007',07,'English',79.5,'Pass'),
                             ('S1007',07,'Social_Study',87.5,'Pass'),
                             ('S1008',08,'Math',78.5,'Pass'),
							 ('S1008',08,'Hindi',82.5,'Pass'),
                             ('S1008',08,'Science',95.5,'Pass'),
                             ('S1008',08,'English',79.3,'Pass'),
                             ('S1008',08,'Social_Study',79.5,'Pass'),
                             ('S1009',09,'Math',78.5,'Pass'),
							 ('S1009',09,'Hindi',79.5,'Pass'),
                             ('S1009',09,'Science',76.5,'Pass'),
                             ('S1009',09,'English',89.5,'Pass'),
                             ('S1009',09,'Social_Study',76.5,'Pass'),
                             ('S1010',10,'Math',80.6,'Pass'),
							 ('S1010',10,'Hindi',92.7,'Pass'),
                             ('S1010',10,'Science',85.4,'Pass'),
                             ('S1010',10,'English',89.7,'Pass'),
                             ('S1010',10,'Social_Study',77.1,'Pass');
                             
create table timetable(no int, time varchar(30),Monday varchar(30),Tuesday varchar(30),
                       Wednesday varchar(30),Thursday varchar(30),Friday varchar(30));
                       
insert into timetable values(1,'11am-12pm','Math','Math','Math','Math','Math'),
                            (2,'12pm-1pm','Hindi','Science','English','Social_Study','Hindi'),
                            (3,'1pm-2pm','Lunch-Break','Lunch-Break','Lunch-Break','Lunch-Break','Lunch-Break'),
                            (4,'2pm-3pm','Science','Hindi','Science','English','Science'),
                            (5,'3pm-4pm','English','Social_Study','Hindi','Science','English'),
                            (6,'4pm-5pm','Social_study','English','Social_Study','Hindi','Social_Study');
                            
                            
                       