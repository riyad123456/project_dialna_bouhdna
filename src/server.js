
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

app.get('/all_Patient', (req, res) => {
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
    var id = req.body.ID
    var email =req.body.Email
    var pass = req.body.Password
    var fname = req.body.First_name
    var lname = req.body.Last_name
    var ssn = req.body.SSN
    var age = req.body.Age
    var gender = req.body.Gender
    var pn= req.body.Phone_num
    var ins =req.body.Insurance
    var num = req.body.Street_num
    var name = req.body.Street_name
    var code = req.body.Postal_code
    var city = req.body.City
    var prov = req.body.Province
    
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

  app.listen(5001, () => {
    console.log("server has started on port 5001");
    });

  
  
  //UPDATE Patient SET Phone_num = 333333333 ,Insurance ="testIns",Street_num=3, Street_name="testIns",Postal_code ="testIns",City="testIns",Province="testIns" WHERE patient_ID = 784628391;