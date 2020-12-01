const inquirer = require("inquirer");
const mysql = require("mysql");
const { inherits } = require("util");

//========================================================================

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "fullstackdani",
  database: "employee_trackerDB",
});

//========================================================================

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  init();
});

 function init (){
        inquirer.prompt([
            {
              type: "list",
              name: "choice",
              choices: [
                "View all Employees",
                "View all Employees by Department",
                "View all Employees by Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "EXIT"
              ],
            },
          ]).then((initialRes) => {
                switch(initialRes.choice){
                    case "Remove Employee":
                        removeEmployee ();
                        break;
                    case "View all Employees":
                        viewAll();
                        break;
                    case "View all Employees by Department":
                        viewByDep();
                        break;
                    case "View all Employees by Manager":
                        viewByManager();
                        break;
                    case "Add Employee":
                        addEmployee();
                        break;
                    case "Update Employee Role":
                        updateRole();
                        break;
                    case "Update Employee Manager":
                        updateManager();
                        break;
                    case "EXIT":
                        exitApp();
                        break;
                }
          })    
    }
//========================================================================

function displayTeam (){
    var query = "select * from employee";
    connection.query(query, function (err, res) { 
        if (err) throw err;
        console.table(res);
    }) 
};



function removeEmployee () {
    inquirer.prompt([
        {
            type: "list",
            message: "Which employee would you like to remove?",
            name: "removeChoice",
            choices: ""
        }
    ])
    
}

function viewAll () {
    displayTeam();

}

function viewByDep () { 
    var query = "select * from department";
    connection.query(query, function (err, res){
        if (err) throw err 
        console.table(res);
    })

}

function viewByManager () {
    var query = "select * from ";
    connection.query(query, function (err, res){
        if (err) throw err 
        console.table(res);
    })

}

function addEmployee () {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the first name of the employee?",
            name: "firstName"
        },
        {
            type: "input",
            message: "What is the last name of the employee?",
            name: "lastName"
        },
        {
            type:
        }
          
    ])

}

function updateRole () {


}

function updateManager () {


}

function exitApp () {
    connection.end();
}