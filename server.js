const inquirer = require("inquirer");
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "fullstackdani",
  database: "ice_creamDB",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      choices: [
        "View all Employees",
        "View all employees by Department",
        "View all employees by Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager"
      ],
    },
  ]).then((initialRes) => {
        switch(initialRes.choice){
            case "Remove Employee":
            console.log("works ig");
            break;


        }
  })


  
  connection.end();
});


// .then((initialRes) => {
//     if (initialRes.choice === "Add Employee"){
//         console.log("correct");
//     }
// })
