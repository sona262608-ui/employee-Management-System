# employee-Management-System
# Employee Management System

A simple and responsive **Employee Management System** developed as a CRUD-based web application. The system helps users manage employee information through a dashboard and provides functionality to **add, view, update, search, filter, and delete employee records**.

## 🌐 Live Demo

**Live Website:**
https://sona262608-ui.github.io/employee-Management-System/

---

## 📌 Project Overview

The Employee Management System is designed to simplify the process of managing employee records in an organization.

The application provides a user-friendly dashboard where users can view employee statistics and manage employee details efficiently.

The project demonstrates the complete CRUD workflow:

**Create → Read → Update → Delete**

It is developed as a full-stack web application with a frontend interface and REST API-based backend.

---

## 🎯 Objectives

* To develop a simple employee management system.
* To implement CRUD operations.
* To create a responsive and user-friendly dashboard.
* To manage employee information efficiently.
* To implement frontend and backend communication using REST APIs.
* To perform input validation.
* To provide search and filtering functionality.
* To understand database-driven web application development.

---

## ✨ Features

### 📊 Dashboard

The dashboard provides an overview of employee information.

* Total Employees
* Active Employees
* Number of Departments
* Average Salary
* Recent Employees

### 👨‍💼 Employee Management

Users can manage employee records through:

* Add Employee
* View Employees
* Edit Employee
* Delete Employee

### 🔍 Search

Users can search employees by:

* Employee Name
* Email

### 🏢 Department Filter

Employees can be filtered based on department:

* IT
* HR
* Finance
* Marketing

### ✅ Validation

The application validates:

* Employee name
* Email
* Department
* Position
* Salary
* Required fields

Duplicate email addresses are also handled by the backend.

### 📱 Responsive Design

The interface is designed to work on:

* Desktop
* Laptop
* Tablet
* Mobile devices

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Python
* Django
* Django REST Framework / REST API

### Database

* SQLite

### API

* REST API
* JSON
* HTTP methods

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Web Browser
* Postman

---

## 🏗️ System Architecture

```text
                    USER
                      |
                      ↓
            HTML / CSS / JavaScript
                      |
                      ↓
                 REST API
                      |
                      ↓
             Django Backend
                      |
                      ↓
                ORM / Model
                      |
                      ↓
              SQLite Database
```

---

## 🔄 CRUD Operations

| Operation       | HTTP Method | API Endpoint           |
| --------------- | ----------- | ---------------------- |
| Create Employee | POST        | `/api/employees/`      |
| Read Employees  | GET         | `/api/employees/`      |
| Read Employee   | GET         | `/api/employees/{id}/` |
| Update Employee | PUT         | `/api/employees/{id}/` |
| Delete Employee | DELETE      | `/api/employees/{id}/` |

---

## 👤 Employee Information

Each employee record contains:

* Employee ID
* Name
* Email
* Department
* Position
* Salary
* Status
* Created Date

---

## 📂 Project Structure

```text
Employee-Management-System/
│
├── index.html
├── README.md
│
└── backend/
    └── backend.py
```

### Frontend

`index.html` contains:

* HTML structure
* CSS styling
* JavaScript functionality
* Dashboard
* Employee table
* Employee form
* Search and filtering
* CRUD API integration

### Backend

`backend.py` contains:

* Django configuration
* Employee model
* REST API
* CRUD operations
* Input validation
* SQLite database connection
* API routing

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/sona262608-ui/employee-Management-System.git
```

### 2. Open the Project

```bash
cd employee-Management-System
```

### 3. Install Django

```bash
pip install django
```

### 4. Start the Backend

```bash
python backend.py
```

The backend will run at:

```text
http://127.0.0.1:8000/
```

### 5. Open the Frontend

Open:

```text
index.html
```

in a web browser.

---

## 🧪 Testing

The application can be tested using the following operations:

### Create

Enter valid employee information and submit the form.

**Expected Result:**
A new employee record is created.

### Read

Open the Employees section.

**Expected Result:**
All employee records are displayed.

### Update

Click the **Edit** button and modify employee information.

**Expected Result:**
The employee record is updated.

### Delete

Click the **Delete** button.

**Expected Result:**
The selected employee is removed from the database.

### Search

Enter an employee name or email in the search field.

**Expected Result:**
Matching employees are displayed.

### Filter

Select a department.

**Expected Result:**
Employees belonging to the selected department are displayed.

---

## 🔐 Validation

The system performs validation for employee information.

Examples:

* Empty employee names are not accepted.
* Empty email addresses are not accepted.
* Invalid email information is rejected.
* Salary must be greater than zero.
* Duplicate email addresses are prevented.
* Required fields must be completed.

---

## 📈 Future Enhancements

The following features can be added in future versions:

* User login and authentication
* Admin and employee roles
* Employee profile photos
* Attendance management
* Leave management
* Payroll management
* Export employee data to PDF/Excel
* Advanced reports and charts
* MySQL/PostgreSQL database
* Employee performance tracking
* Email notifications

---

## 🎓 Learning Outcomes

Through this project, the following concepts are demonstrated:

* Frontend web development
* HTML and CSS design
* JavaScript programming
* CRUD operations
* REST API development
* Backend development using Django
* Database management
* Form validation
* API integration
* Git and GitHub
* Responsive web de


output link:https://sona262608-ui.github.io/employee-Management-System/#
