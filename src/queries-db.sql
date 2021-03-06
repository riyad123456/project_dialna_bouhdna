
CREATE TABLE Patient(
    Patient_ID BIGINT PRIMARY KEY,
    Email VARCHAR(30) NOT NULL,
    
    First_name VARCHAR(30) NOT NULL,
    Last_name VARCHAR(30) NOT NULL,
  	Phone_num BIGINT NOT NULL,
  	SSN BIGINT NOT NULL,
  	Insurance VARCHAR(30) NOT NULL,
    Age VARCHAR(2) NOT NULL,
    Gender VARCHAR(20) NOT NULL,
    Street_num INTEGER NOT NULL,
    Street_name VARCHAR(100) NOT NULL,
    Postal_code VARCHAR(30) NOT NULL,
    City VARCHAR(30) NOT NULL,
    Province VARCHAR(30) NOT NULL
    );

    INSERT INTO Patient(Patient_ID, Email, First_name, Last_name,
  	Phone_num, SSN, Insurance, Age, Gender, Street_num, Street_name,
    Postal_code, City, Province) VALUES (1, 'samantha25@gmail.com', 'Samantha', 'Green', 6135608989, 167283432, 
    'ABCInsurance1', 25, 'Female', 1019, 'Acorn Street', 'Ottawa', 'Ontario');
    
    INSERT INTO Patient(Patient_ID, Email, First_name, Last_name,
  	Phone_num, SSN, Insurance, Age, Gender, Street_num, Street_name,
    Postal_code, City, Province) VALUES (345678932, 'tim88@gmail.com',  
    'Timothy', 'Smith', 6132896790, 797886422, 'NewInsurance45', 88, 'Male',
    38, 'Apple Street', 'K47 32F', 'Ottawa', 'Ontario');
    
INSERT INTO Patient(Patient_ID, Email, First_name, Last_name,
  	Phone_num, SSN, Insurance, Age, Gender, Street_num, Street_name,
    Postal_code, City, Province) VALUES (435435, 'alex@gmail.com', 
    'Hicham', 'Mazouzi', 6135608989, 167283432, 'ABCInsurance1', 31, 'Male',
    999, 'Brownspring Drive', 'KH6 32D', 'Ottawa', 'Ontario');

INSERT INTO Patient(Patient_ID, Email, First_name, Last_name,
  	Phone_num, SSN, Insurance, Age, Gender, Street_num, Street_name,
    Postal_code, City, Province) VALUES (784628391, 'lilliantay66@gmail.com', 
    'Lillian', 'Taylor', 6138990943, 676789876, 'NewInsurance45', 66, 'Female',
    1019, 'Bell Street ', 'K45 32J', 'Toronto', 'Ontario');
    
INSERT INTO Patient(Patient_ID, Email, First_name, Last_name,
  	Phone_num, SSN, Insurance, Age, Gender, Street_num, Street_name,
    Postal_code, City, Province) VALUES (763290987, 'sarah00@gmail.com', 
    'Sarah', 'Mitchell', 6131523787, 898989095, 'OttawaInsurance8', 18, 'Female',
    76, 'Tamerton Street', 'K54 FE3', 'London', 'Ontario');

INSERT INTO Patient(Patient_ID, Email, First_name, Last_name,
  	Phone_num, SSN, Insurance, Age, Gender, Street_num, Street_name,
    Postal_code, City, Province) VALUES (383863625, 'ben10@gmail.com',  
    'Ben', 'Collins', 6135678781, 672451989, 'ABCInsurance1', 20, 'Male',
    4501, 'Charlotte Street', 'K78 23H', 'Brampton', 'Ontario');

CREATE TABLE Branch(
	Branch_ID INTEGER PRIMARY KEY,
    Employees_num int NOT NULL,
    Street_num int NOT NULL,
    Street_name VARCHAR(50) NOT NULL,
    City VARCHAR(100) NOT NULL,
    Province VARCHAR(100) NOT NULL,
    Postal_code VARCHAR(30) NOT NULL,
    Branch_manager VARCHAR(30) NOT NULL
);

INSERT INTO Branch(Branch_ID, Employees_num, Street_num, Street_name, City, Province, Postal_code, Branch_manager)
            VALUES (06207605, 3, 1428, 'Gladstone Avenue', 'Toronto', 'ON', 'K3J 9N2', 'Andy Wong');

INSERT INTO Branch(Branch_ID, Employees_num, Street_num, Street_name, City, Province, Postal_code, Branch_manager)
            VALUES (214635515, 3, 1428, 'Carlingwood Avenue', 'Toronto', 'ON', 'K3Y 9N2', 'Ashley Beaudry');
            

CREATE TABLE Employee(
    Employee_ID BIGINT PRIMARY KEY,
    Email VARCHAR(30) NOT NULL,
    First_name VARCHAR(30) NOT NULL,
    Last_name VARCHAR(30) NOT NULL,
    Phone_num BIGINT NOT NULL,
    SSN BIGINT NOT NULL,
    Employee_role VARCHAR(50) NOT NULL,
    Insurance VARCHAR(50) NOT NULL,
    Salary decimal(10,2) NOT NULL DEFAULT '0.00',
    Age VARCHAR(2) NOT NULL,
    Gender VARCHAR(20) NOT NULL,
    Street_num int NOT NULL,
    Street_name VARCHAR(100) NOT NULL,
    Province VARCHAR(100) NOT NULL,
    City VARCHAR(100) NOT NULL,
    Postal_code VARCHAR(20) NOT NULL,
    Branch_ID BIGINT NOT NULL,
   
  	FOREIGN KEY(Branch_ID) REFERENCES Branch(Branch_ID)
    
);

INSERT INTO Employee(Employee_ID, Email, First_name, Last_name,
      Phone_num, SSN, Employee_role, Insurance, Salary, Age, Gender, Street_num, Street_name, 
      Province, City, Postal_code, Branch_ID) VALUES (167823567, 'gail123@gmail.com', 'Gail',
      'Price', 40345987, 6591539578, 'Receptionist', 'Canada Life', 50000, 70, 'Female', 741, 'Church Hill', 'ON', 'Ottawa', 
      'K1J 8N3', 214635515);
      
INSERT INTO Employee(Employee_ID, Email, First_name, Last_name,
      Phone_num, SSN, Employee_role, Insurance, Salary, Age, Gender, Street_num, Street_name, 
      Province, City, Postal_code, Branch_ID) VALUES (787898765, 'harry67@gmail.com', 'Harry',
      'Williams', 5609898765, 674321689, 'Receptionist', 'Canada Life', 20000, 23, 'Male', 1027, 'Cheney Road', 'ON', 'Toronto', 
      'K4J 7N3', 214635515);

INSERT INTO  Employee(Employee_ID, Email, First_name, Last_name,
      Phone_num, SSN, Employee_role, Insurance, Salary, Age, Gender, Street_num, Street_name, 
      Province, City, Postal_code, Branch_ID) VALUES (676764543, 'harriett@gmail.com' , 'Harriett',
      'Parker', 613676890, 123456888, 'dentist', 'Canada Life', 45000, 41, 'Female', 999, '	Kendal Street', 'ON', 'Hamilton', 
      'K2F 8N6', 06207605);
     
INSERT INTO Employee(Employee_ID, Email, First_name, Last_name,
      Phone_num, SSN, Employee_role, Insurance, Salary, Age, Gender, Street_num, Street_name, 
      Province, City, Postal_code, Branch_ID) VALUES (088059439, 'MelissaRose@gmail.com', 'Melissa',
      'Rose', 071410562, 844632496, 'dentist', 'Canada Life', 60000, 40, 'Female', 1741, 'Longfields Road', 'ON', 'Toronto', 
      'K1J 8N1', 06207605);



CREATE TABLE Utilisateur(
    Username VARCHAR(50) PRIMARY KEY,
    Password VARCHAR(50) NOT NULL,
    Role VARCHAR(20) NOT NULL,
    id INTEGER NOT NULL

);

INSERT INTO Utilisateur(Username, Password,Role, id) VALUES('beno','papipapi123','patient',383863625);
INSERT INTO Utilisateur(Username, Password,Role, id) VALUES('saraho','papipapi123','patient',763290987);
INSERT INTO Utilisateur(Username, Password,Role, id) VALUES('lilliano','papipapi123','patient',784628391);
INSERT INTO Utilisateur(Username, Password,Role, id) VALUES('hichamo','papipapi123','patient',435435);
INSERT INTO Utilisateur(Username, Password,Role, id) VALUES('samanthap','papipapi123','patient',1);
INSERT INTO Utilisateur(Username, Password,Role, id) VALUES('timothyo','papipapi123','patient',345678932);
INSERT INTO Utilisateur(Username, Password,Role, id) VALUES('mrose','papipapi123','dentist',088059439);
INSERT INTO Utilisateur(Username, Password,Role, id) VALUES('pharriett','papipapi123','detnist',676764543);
INSERT INTO Utilisateur(Username, Password,Role, id) VALUES('wharry','papipapi123','receptionist',787898765);
INSERT INTO Utilisateur(Username, Password,Role, id) VALUES('pgail','papipapi123','receptionist',167823567);

CREATE TABLE Treatment(
	Treatment_ID int PRIMARY KEY,
    Treatment_type VARCHAR(30) NOT NULL,
    Patient_ID INTEGER NOT NULL,
    Medication VARCHAR(100) NOT NULL,
    Symptoms VARCHAR(200) NOT NULL,
    Tooth VARCHAR(200) NOT NULL,
    Patient_condition VARCHAR(50) NOT NULL,
    FOREIGN KEY(Patient_ID) REFERENCES Patient(Patient_ID)
);

INSERT INTO Treatment (Treatment_ID,Treatment_type,Patient_ID,
Medication,Symptoms,Tooth,Patient_condition) VALUES (2546,'test',784628391,
'testtest','testsymp','hyeuj','mskin  elih');

INSERT INTO Treatment (Treatment_ID,Treatment_type,Patient_ID,
Medication,Symptoms,Tooth,Patient_condition) VALUES (2,'testngg',784628391,
'te','tsymp','hyeuj','mmskin  elih');

INSERT INTO Treatment (Treatment_ID,Treatment_type,Patient_ID,
Medication,Symptoms,Tooth,Patient_condition) VALUES (24578,'test',763290987 ,
'dolipr','snanou ki drouh','drssa','mskin  elih');

INSERT INTO Treatment (Treatment_ID,Treatment_type,Patient_ID,
Medication,Symptoms,Tooth,Patient_condition) VALUES (1,'test',763290987 ,
'pomada sfra','sna  tart  ','nab','mmskin  elih');

INSERT INTO Treatment (Treatment_ID,Treatment_type,Patient_ID,
Medication,Symptoms,Tooth,Patient_condition) VALUES (15,'test',435435 ,
'pomada sfra vers','sna  tart  ','nab','mskin  elih');
    
    
CREATE TABLE Appointment(
    Appointment_ID INTEGER PRIMARY KEY,
  	Branch_ID INTEGER NOT NULL,
  	Dentist_identifier VARCHAR(30) NOT NULL,
  	Appointment_type VARCHAR(30) NOT NULL,
  	Statue VARCHAR(30) NOT NULL,
  	Room_assigned VARCHAR(30) NOT NULL,
  	Appointment_date DATE NOT NULL,
  	Start_time INTEGER NOT NULL,
    End_time INTEGER NOT NULL,
  	Patient_ID INTEGER NOT NULL,
    FOREIGN KEY(Patient_ID) REFERENCES Patient(Patient_ID)
    );

INSERT INTO Appointment(Appointment_ID, Branch_ID, Dentist_identifier,
 Appointment_type, Statue, Room_assigned, Appointment_date,
  	Start_time, End_time, Patient_ID) VALUES (987654567, 214635515, 'Dentist',
  	'Teeth cleaning', 'Confirmed', 'Room 101', '2022-04-20', 1400, 1430, 784628391);
  	
INSERT INTO Appointment(Appointment_ID, Branch_ID, Dentist_identifier,
 Appointment_type, Statue, Room_assigned, Appointment_date,
  	Start_time, End_time, Patient_ID) VALUES (44789199, 062076056, 'Dentist',
  	'Cavity Removal;', 'Confirmed', 'Room 113', '2022-05-01', 1100, 1130, 784628391);

INSERT INTO Appointment(Appointment_ID, Branch_ID, Dentist_identifier,
 Appointment_type, Statue, Room_assigned, Appointment_date,
  	Start_time, End_time, Patient_ID) VALUES (327657483, 214635515, 'Dentist',
  	'Teeth comparing ', 'Confirmed', 'Room 107', '2022-04-20', 1000, 1530, 435435	);
  	
INSERT INTO Appointment(Appointment_ID, Branch_ID, Dentist_identifier,
 Appointment_type, Statue, Room_assigned, Appointment_date,
  	Start_time, End_time, Patient_ID) VALUES (55789199, 062076056, 'Dentist',
  	'Cavity admiring;', 'Pending', 'Room 102', '2022-05-01', 700, 1030, 345678932	);



CREATE TABLE Appointment_Procedure(
    Appointment_ID BIGINT NOT NULL,
    Patient_ID BIGINT NOT NULL,
    Procedure_code BIGINT NOT NULL,
    Procedure_type VARCHAR(50) NOT NULL,
    Procedure_description VARCHAR(200) NOT NULL,
    Tooth VARCHAR(50),
    Amount_of_procedures BIGINT NOT NULL,
    Total_charge decimal(9,2) NOT NULL DEFAULT '0.00',
    Appointment_date TIMESTAMP NOT NULL,
    
    FOREIGN KEY(Patient_ID) REFERENCES Patient(Patient_ID),
    FOREIGN KEY(Appointment_ID) REFERENCES Appointment(Appointment_ID)
);

 INSERT INTO Appointment_Procedure(Appointment_ID,Patient_ID , Procedure_code, Procedure_type, Procedure_description,
    Tooth,Amount_of_procedures, Total_charge, Appointment_date)
            VALUES (987654567, 784628391, 35, 'Veneers', 'custom-made shells of improve appearance',
                    '2', 1, 1837609.87, '2022-01-19');
                    INSERT INTO Appointment_Procedure(Appointment_ID,Patient_ID , Procedure_code, Procedure_type, Procedure_description,
    Tooth,Amount_of_procedures, Total_charge, Appointment_date)
            VALUES (55789199, 345678932, 50, 'Test1 type', 'Thsi is just a random text',
                    'its ju', 2, 109.87, '2022-08-19');

                    INSERT INTO Appointment_Procedure(Appointment_ID,Patient_ID , Procedure_code, Procedure_type, Procedure_description,
    Tooth,Amount_of_procedures, Total_charge, Appointment_date)
            VALUES (327657483, 435435, 78, 'Test2 type', 'Thsi is just a random text 2',
                    'its ju 2', 5, 109.87, '2022-07-30');

CREATE TABLE Payment(
    Bill_ID INTEGER PRIMARY KEY,
    Patient_ID INTEGER NOT NULL,
    Appointment_ID INTEGER NOT NULL,
    Procedure_ID INTEGER NOT NULL,
	Patient_charge  decimal(9,2) NOT NULL DEFAULT '0.00',
    Insurance_charge  decimal(9,2) NOT NULL DEFAULT '0.00',
    Insurance_claim_ID INTEGER NOT NULL,
    Payment_type VARCHAR(20) NOT NULL,
    FOREIGN KEY(Appointment_ID) REFERENCES Appointment(Appointment_ID),
    FOREIGN KEY(Patient_ID) REFERENCES Patient(Patient_ID)
);

CREATE TABLE Review(
	Review_ID BIGINT PRIMARY KEY,
    Employee_professionalism VARCHAR(100) NOT NULL,
  	Valuee VARCHAR(100) NOT NULL,
  	Communication VARCHAR(100) NOT NULL,
  	Cleanliness VARCHAR(20) NOT NULL,
    Patient_ID 	 BIGINT NOT NULL,
  	FOREIGN KEY(Patient_ID) REFERENCES Patient(Patient_ID)
);

INSERT INTO Review(Review_ID,Employee_professionalism,Valuee,Communication,Cleanliness,Patient_ID)
 VALUES(354546,'siyke n','spikeofdifjs','gfdgddfgd','dfgdfgdfgdf',784628391);


CREATE TABLE Fee_Charge(
	Fee_charge_ID BIGINT PRIMARY KEY,
    Patient_charge decimal(9,2) NOT NULL,
    Insurance VARCHAR(50) NOT NULL,
    Total_charge decimal(9,2) NOT NULL,
    
	Appointment_ID INTEGER NOT NULL,
    FOREIGN KEY(Appointment_ID) REFERENCES Appointment(Appointment_ID)
	
);

INSERT INTO Fee_Charge(Fee_charge_ID,Patient_charge,Insurance,Total_charge,Appointment_ID) VALUES
(546546,15445.35,'siyeks',578645.2,987654567);


CREATE TABLE Record(
    Record_ID INTEGER PRIMARY KEY,
    Date_edited DATE NOT NULL,
    Patient_ID INTEGER NOT NULL,
    Progress_note VARCHAR(100) NOT NULL,
    FOREIGN KEY(Patient_ID) REFERENCES Patient(Patient_ID)
);


CREATE TABLE Invoice(
    Invoice_ID int PRIMARY KEY,
    Date_of_issue TIMESTAMP NOT NULL,
  	Discount decimal(9,2) NOT NULL DEFAULT '0.00',
  	Penalty decimal(9,2) NOT NULL DEFAULT '0.00',
  	Tax decimal(9,2) NOT NULL DEFAULT '0.00',
  	Fee_charge_ID INTEGER NOT NULL,
  	FOREIGN KEY(Fee_charge_ID) REFERENCES Fee_Charge(Fee_charge_ID)
);

                                    
  	
SELECT * FROM Patient;
SELECT * FROM Employee;
SELECT * FROM Record;
SELECT * FROM Appointment;
SELECT * FROM Appointment_Procedure;

--- triggers, assertions and checks