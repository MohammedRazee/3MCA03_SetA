// ==================================================================
// EDIT THIS FILE ONLY. Do not change any other file in this project.
// Complete every function below. Each function must return its result.
// ==================================================================


// Step 1: Import mongoose here.



// Step 2: Write your MongoDB connection URI here.
//         Database name: company



// Step 3: Create the schema and the model here.
//         Model name: Employee   (Mongoose saves it in the "employees" collection)
//         Fields: name (String), department (String), city (String), salary (Number)



// Step 4: Connect to MongoDB inside this function.
//         After connecting, print: Connected to MongoDB
export async function connectDB() {

}


// Return all the employees in the collection.
export async function getAllEmployees() {

}


// department comes from the "Search by department" box on the page, for example "IT".
// Return the employees whose department matches it.
export async function findEmployeesByDepartment(department) {

}


// minSalary is a number typed on the page, for example 60000.
// Return the employees whose salary is greater than or equal to minSalary.
export async function findEmployeesByMinSalary(minSalary) {

}


// Return the 3 employees with the highest salary, highest first.
export async function getTopThreeEarners() {

}


// employee comes from the "Add Employee" form, for example:
//   { name: "Riya", department: "HR", city: "Bengaluru", salary: 50000 }
// Save it in the database and return the saved employee.
export async function addEmployee(employee) {

}
