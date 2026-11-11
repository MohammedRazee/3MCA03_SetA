# CA Lab Exam - Section 3MCA03 - Set A

**Company Employee Directory**

## Your task

The web page and the Express server are ready. The database part is missing. Complete it using Mongoose.

- Edit only **database.js**. The comments in it tell you what to write.
- Do not change any other file.

## Steps

1. Open this project folder in VS Code and open a terminal in it.
2. Install the packages:

   ```
   npm install
   npm install mongoose
   ```

3. Make sure MongoDB is running, then add the sample data (see below).
4. Complete **database.js**.
5. Start the server:

   ```
   node index.js
   ```

6. Open **http://localhost:3000** in your browser.

After every change to database.js, stop the server with Ctrl + C and start it again.

## Database details

- **Database:** company
- **Collection:** employees
- **Fields:** name (text), department (text), city (text), salary (number)

## Sample data

Open mongosh, paste these commands and press Enter. Paste them only once.

```
use company
db.employees.insertMany([
  { name: "Ravi", department: "IT", city: "Bengaluru", salary: 72000 },
  { name: "Pooja", department: "HR", city: "Chennai", salary: 45000 },
  { name: "Karan", department: "Sales", city: "Pune", salary: 52000 },
  { name: "Nandini", department: "IT", city: "Hyderabad", salary: 85000 },
  { name: "Suresh", department: "HR", city: "Bengaluru", salary: 48000 },
  { name: "Fatima", department: "Sales", city: "Chennai", salary: 61000 },
  { name: "Manoj", department: "IT", city: "Pune", salary: 58000 },
  { name: "Lakshmi", department: "HR", city: "Hyderabad", salary: 66000 },
  { name: "Deepak", department: "Sales", city: "Bengaluru", salary: 39000 },
  { name: "Asha", department: "IT", city: "Chennai", salary: 91000 },
  { name: "Imran", department: "HR", city: "Pune", salary: 42000 },
  { name: "Geeta", department: "Sales", city: "Hyderabad", salary: 55000 }
])
```

## Show this output to the examiner

1. **Terminal.** Run node index.js.  
   Expected: Connected to MongoDB, then Server running at http://localhost:3000
2. **Show all.** Click "Show All Employees".  
   Expected: 12 employees.
3. **Search.** Choose IT and click Search.  
   Expected: 4 employees: Ravi, Nandini, Manoj, Asha.
4. **Filter.** Type 60000 in "Salary at least" and click Filter.  
   Expected: 5 employees: Ravi, Nandini, Fatima, Lakshmi, Asha.
5. **Top 3 Earners.** Click "Top 3 Earners".  
   Expected: Asha (91000), Nandini (85000), Ravi (72000), in this order.
6. **Add Employee.** Fill the form with Name: your own name, Department: HR, City: Bengaluru, Salary: 50000. Click "Add Employee".  
   Expected: The message "Employee saved" appears and the list shows 13 employees, including your name.
