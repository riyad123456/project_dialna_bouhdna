
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

/// Patient 
app.get('/search/patient/:filter', async (req, res) => {
  
  
  var filter = '%'+req.params.filter +'%'
  
  
  
  try {
      
    
    const response = await pool.query('SELECT * from Patient WHERE UPPER(First_name) LIKE UPPER($1) OR UPPER(Last_name) LIKE UPPER($1)', [filter]);
    
    res.json(response.rows);
  
      
    } catch (error) {
      console.log(error.message)
    }
    
  
  })

app.get('/all_Patient',async (req, res) => {
  try {
    pool.query('SELECT * from Patient;', (err, response) => {
    


      res.json(response.rows);
    });
  } catch (error) {
    console.log(error.message)
  }
    
  
  })

  app.get('/Patient/:id', async (req, res) => {

    try {
      
    const { id } = req.params;
    const response =   await pool.query("SELECT * from Patient WHERE Patient_ID = $1;", [id]);
    
    res.json(response.rows[0]);
  
      
    } catch (error) {
      console.log(error.message)
    }
    
  
  })

  app.put("/pUpdate/:id", async (req, res) => {
    var email =req.body.email
    var pass = req.body.password
    var fname = req.body.first_name
    var lname = req.body.last_name
    var ssn = req.body.ssn
    var age = req.body.age
    var gender = req.body.gender
    var pn= req.body.phone_num
    var ins =req.body.insurance
    var num = req.body.street_num
    var name = req.body.street_name
    var code = req.body.postal_code
    var city = req.body.city
    var prov = req.body.province
    try {
      const { id } = req.params;

      const updateTodo = await pool.query(
        "UPDATE Patient SET Phone_num = $1 ,Insurance =$2,Street_num=$3, Street_name=$4,Postal_code =$5,City=$6,Province=$7,Email =$8,Password =$9,First_name =$10,Last_name =$11,SSN =$12,Age =$13,Gender =$14 WHERE patient_ID = $15;",
        [pn,ins,num, name, code , city, prov,email,pass,fname,lname,ssn,age,gender, id]
      );

      res.json("Patient was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });

  app.post("/pAdd", async (req, res) => {
    var id = req.body.patient_id
    var email =req.body.email
    var pass = req.body.password
    var fname = req.body.first_name
    var lname = req.body.last_name
    var ssn = req.body.ssn
    var age = req.body.age
    var gender = req.body.gender
    var pn= req.body.phone_num
    var ins =req.body.insurance
    var num = req.body.street_num
    var name = req.body.street_name
    var code = req.body.postal_code
    var city = req.body.city
    var prov = req.body.province
    
    try {
      
      
      const newP = await pool.query(
        "INSERT INTO Patient (Patient_ID, Email, Password, First_name, Last_name,Phone_num, SSN, Insurance, Age, Gender, Street_num, Street_name,Postal_code, City, Province) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) RETURNING *",
        [id, email , pass , fname , lname, pn, ssn, ins, age, gender , num, name, code, city, prov]
      );
  
      res.json(newP.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.delete("/patient/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM Patient WHERE Patient_ID = $1", [
        id
      ]);
      res.json("Patient was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });



//RDV

app.get('/all_RDV', (req, res) => {
  try {
    pool.query('SELECT * from Appointment;', (err, response) => {
      
      res.json(response.rows);
    });
  } catch (error) {
    console.log(error.message)
  }
    
  
  })


  app.get('/RDV/:id', async (req, res) => {

    try {
      
    const { id } = req.params;
    const response =   await pool.query("SELECT * from Appointment WHERE Appointment_ID = $1;", [id]);
      
    res.json(response.rows[0]);
  
      
    } catch (error) {
      console.log(error.message)
    }
    
  
  })

  app.get('/RDV_p/:id', async (req, res) => {

    try {
      
    const { id } = req.params;
    const response =   await pool.query("SELECT * from Appointment WHERE Patient_ID = $1;", [id]);
      
    res.json(response.rows[0]);
  
      
    } catch (error) {
      console.log(error.message)
    }
    
  
  })

  app.put("/RDVUpdate/:id", async (req, res) => {
    
    var bid =req.body.branch_ID
    var denti = req.body.dentist_identifier
    var type = req.body.appointment_type
    var statue = req.body.statue
    var room = req.body.room_assigned
    var date = req.body.appointment_date
    var stime = req.body.start_time
    var etime = req.body.end_time
    try {
      const { id } = req.params;
      
      const updateTodo = await pool.query(
        "UPDATE Appointment SET Branch_ID = $1 ,Dentist_identifier =$2,Appointment_type=$3, Statue=$4,Room_assigned =$5,Appointment_date=$6,Start_time=$7, End_time=$8 WHERE Appointment_ID = $9;",
        [bid,denti,type, statue, room , date, stime, etime, id]
      );
  
      res.json("Appointment was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });

  app.put("/RDVPUpdate/:id", async (req, res) => {
    
    var bid =req.body.branch_ID
    var denti = req.body.dentist_identifier
    var type = req.body.appointment_type
    var statue = req.body.statue
    var room = req.body.room_assigned
    var date = req.body.appointment_date
    var stime = req.body.start_time
    var etime = req.body.end_time
    try {
      const { id } = req.params;
      
      const updateTodo = await pool.query(
        "UPDATE Appointment SET Branch_ID = $1 ,Dentist_identifier =$2,Appointment_type=$3, Statue=$4,Room_assigned =$5,Appointment_date=$6,Start_time=$7, End_time=$8 WHERE Patient_ID = $9;",
        [bid,denti,type, statue, room , date, stime, etime, id]
      );
  
      res.json("Appointment was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });

  app.post("/RDVAdd", async (req, res) => {
    var aid =req.body.appointment_ID
    var pid =req.body.patient_ID
    var bid =req.body.branch_ID
    var denti = req.body.dentist_identifier
    var type = req.body.appointment_type
    var statue = req.body.statue
    var room = req.body.room_assigned
    var date = req.body.appointment_date
    var stime = req.body.start_time
    var etime = req.body.end_time
    
    try {
      
      
      const newP = await pool.query(
        "INSERT INTO Appointment(Appointment_ID, Branch_ID, Dentist_identifier,Appointment_type, Statue, Room_assigned, Appointment_date,Start_time, End_time, Patient_ID) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *",
        [aid,bid,denti,type, statue, room , date, stime, etime, pid]
      );
  
      res.json(newP.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });


  app.delete("/RDV/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM Appointment WHERE Appointment_ID = $1", [
        id
      ]);
      res.json("Appointment was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

  app.delete("/RDVP/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM Appointment WHERE Patient_ID = $1", [
        id
      ]);
      res.json("Appointment was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

//treatment
app.get('/treatment/:id', async (req, res) => {

  try {
    
  const { id } = req.params;
  const response =   await pool.query("SELECT * from Treatment WHERE Patient_ID = $1;", [id]);
    
  res.json(response.rows);

    
  } catch (error) {
    console.log(error.message)
  }
  

})

app.post("/TreatmentADD", async (req, res) => {
  var tid =req.body.treatment_ID
  var type =req.body.treatment_type
  var pid =req.body.patient_ID
  var medi =req.body.medication
  var  sym =req.body.symptoms
  var tooth =req.body.tooth
  var pcondi =req.body.patient_condition
  
  
  try {
    
    
    const newP = await pool.query(
      "INSERT INTO  Treatment (Treatment_ID,Treatment_type,Patient_ID,Medication,Symptoms,Tooth,Patient_condition) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *",
      [tid,type, pid, medi,sym,tooth,pcondi]
    );

    res.json(newP.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/treatment/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM Treatment WHERE Treatment_ID = $1", [
      id
    ]);
    res.json("Treatment was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

// Utilisateur
app.get('/login/:filter', async (req, res) => {
  var user = req.params.filter
 //  var pass = req.params.password
 //  var role = req.params.role

 try {
   
 //AND  Password = $2 AND Role = $3
 const response =   await pool.query("SELECT * from Utilisateur WHERE Username = $1  ;", [user]);
   
 res.json(response.rows[0]);
 

   
 } catch (error) {
   console.log(error.message)
 }
 

})

app.post('/loginADD', async (req, res) => {
  var user = req.body.username
  var pass = req.body.password
  var role = req.body.role
  var id = req.body.id

 try {
   
 //AND  Password = $2 AND Role = $3
 const response =   await pool.query("INSERT INTO   Utilisateur(Username, Password,Role, id)VALUES($1,$2,$3,$4) RETURNING * ;", [user,pass,role,id]);
   
 res.json(response.rows[0]);
 

   
 } catch (error) {
   console.log(error.message)
 }
 

})

app.post('/sign', async (req, res) => {
  var user = req.body.username
  var pass = req.body.password
  var role = req.body.role
  var id  = req.body.id
 try {
   
 
 const response =   await pool.query("INSERT INTO Utilisateur(Username, Password,Role, id) VALUES($1,$2,$3,$4) RETURNING *;", [user,pass,role,id]);
   
 res.json(response.rows[0]);

   
 } catch (error) {
   console.log(error.message)
 }
 

})



/// Employee

app.get('/employee/:id', async (req, res) => {
  try {
      
    const { id } = req.params;
    const response =   await pool.query("SELECT * from Employee WHERE Employee_ID = $1;", [id]);
      
    res.json(response.rows[0]);
  
      
    } catch (error) {
      console.log(error.message)
    }
    
 

})


app.post("/eADD", async (req, res) => {
  var id = req.body.employee_ID
  var bid = req.body.branch_ID
  var email =req.body.email
  var fname = req.body.first_name
  var lname = req.body.last_name
  var ssn = req.body.ssn
  var role  = req.body.employee_role
  var age = req.body.age
  var salary = req.body.salary
  var gender = req.body.gender
  var pn= req.body.phone_num
  var ins =req.body.insurance
  var num = req.body.street_num
  var name = req.body.street_name
  var code = req.body.postal_code
  var city = req.body.city
  var prov = req.body.province
  
  try {
    
    
    const newP = await pool.query(
      "INSERT INTO Employee(Employee_ID, Email, First_name, Last_name,Phone_num, SSN, Employee_role, Insurance, Salary, Age, Gender, Street_num, Street_name,Province, City, Postal_code, Branch_ID) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17) RETURNING *",
      [id, email , fname , lname, pn, ssn,role, ins,salary, age, gender , num, name, prov, city, code,bid]
    );

    res.json(newP.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


app.put("/eUpdate/:id", async (req, res) => {
  
  
  var email =req.body.email
  var fname = req.body.first_name
  var lname = req.body.last_name
  var ssn = req.body.ssn
  
  var age = req.body.age
  var salary = req.body.salary
  var gender = req.body.gender
  var pn= req.body.phone_num
  var ins =req.body.insurance
  var num = req.body.street_num
  var name = req.body.street_name
  var code = req.body.postal_code
  var city = req.body.city
  var prov = req.body.province
  
  try {
    const { id } = req.params;

    const updateTodo = await pool.query(
      "UPDATE Employee SET Phone_num = $1 ,Insurance =$2,Street_num=$3, Street_name=$4,Postal_code =$5,City=$6,Province=$7,Email =$8,Salary =$9,First_name =$10,Last_name =$11,SSN =$12,Age =$13,Gender =$14 WHERE Employee_ID = $15;",
      [pn,ins,num, name, code , city, prov,email,salary,fname,lname,ssn,age,gender, id]
    );

    res.json("Employee was updated!");
  } catch (err) {
    console.error(err.message);
  }
});








app.listen(5001, () => {
    console.log("server has started on port 5000");
  });

  
  
  //UPDATE Patient SET Phone_num = 333333333 ,Insurance ="testIns",Street_num=3, Street_name="testIns",Postal_code ="testIns",City="testIns",Province="testIns" WHERE patient_ID = 784628391;