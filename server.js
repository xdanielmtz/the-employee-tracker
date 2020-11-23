const inquirer = require("inquirer");
const mysql = require("mysql");
const { inherits } = require("util");



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





function exitApp (){
    connection.end();
}