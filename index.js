var http = require("http");
let employees = require("./Employee");
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8083



//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {'Content-Type': 'text/html'});
            return res.write('<h1>Welcome to Lab 3 Exercise :) </h1>')
            res.end(); 

        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.writeHead(200, {'Content-Type': 'text/html'});
            //res.write('<h1> Employees </h1>');
      
            return res.end(JSON.stringify(employees))
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            //localeCompare compares the strings 

            //let fullName = employees.firstName + employees.lastName
            //for employee to be sorted by first name asc 
            let employeeNames = employees.map(e => `${e.lastName} ${e.firstName}`).sort()
            return res.end(JSON.stringify(employeeNames))
    
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  

            let sumSalary = employees.reduce( (salarySum, s) => salarySum + s.Salary, 0)
            return res.end(JSON.stringify(sumSalary))
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})