let employees = JSON.parse(localStorage.getItem("employees")) || [
    {
        id: 1,
        name: "Arun Kumar",
        email: "arun@gmail.com",
        department: "IT",
        position: "Developer",
        salary: 45000,
        status: "Active"
    },
    {
        id: 2,
        name: "Priya Sharma",
        email: "priya@gmail.com",
        department: "HR",
        position: "HR Executive",
        salary: 38000,
        status: "Active"
    },
    {
        id: 3,
        name: "Rahul Kumar",
        email: "rahul@gmail.com",
        department: "Finance",
        position: "Accountant",
        salary: 42000,
        status: "Inactive"
    }
];


// Save data
function saveData() {
    localStorage.setItem("employees", JSON.stringify(employees));
}


// Change sections
function showSection(section) {

    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("employees").classList.add("hidden");
    document.getElementById("addEmployee").classList.add("hidden");

    document.getElementById(section).classList.remove("hidden");

    if (section === "dashboard") {
        updateDashboard();
    }

    if (section === "employees") {
        displayEmployees();
    }
}


// Add / Update Employee
document.getElementById("employeeForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let id = document.getElementById("editId").value;

    let employee = {
        id: id ? Number(id) : Date.now(),
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        position: document.getElementById("position").value,
        salary: Number(document.getElementById("salary").value),
        status: document.getElementById("status").value
    };

    if (id) {

        let index = employees.findIndex(emp => emp.id === Number(id));

        employees[index] = employee;

        alert("Employee updated successfully!");

    } else {

        employees.push(employee);

        alert("Employee added successfully!");
    }

    saveData();

    document.getElementById("employeeForm").reset();
    document.getElementById("editId").value = "";

    showSection("employees");
});


// Display employees
function displayEmployees() {

    let table = document.getElementById("employeeTable");

    let search = document
        .getElementById("search")
        .value
        .toLowerCase();

    let department = document
        .getElementById("departmentFilter")
        .value;

    table.innerHTML = "";

    let filtered = employees.filter(emp => {

        let matchesSearch =
            emp.name.toLowerCase().includes(search) ||
            emp.email.toLowerCase().includes(search);

        let matchesDepartment =
            department === "" ||
            emp.department === department;

        return matchesSearch && matchesDepartment;
    });

    filtered.forEach(emp => {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.email}</td>
            <td>${emp.department}</td>
            <td>${emp.position}</td>
            <td>₹${emp.salary.toLocaleString()}</td>
            <td class="${emp.status === "Active"
                ? "status-active"
                : "status-inactive"}">
                ${emp.status}
            </td>

            <td>
                <button onclick="editEmployee(${emp.id})">
                    Edit
                </button>

                <button class="delete"
                    onclick="deleteEmployee(${emp.id})">
                    Delete
                </button>
            </td>
        `;

        table.appendChild(row);
    });
}


// Edit employee
function editEmployee(id) {

    let emp = employees.find(employee => employee.id === id);

    document.getElementById("editId").value = emp.id;
    document.getElementById("name").value = emp.name;
    document.getElementById("email").value = emp.email;
    document.getElementById("department").value = emp.department;
    document.getElementById("position").value = emp.position;
    document.getElementById("salary").value = emp.salary;
    document.getElementById("status").value = emp.status;

    showSection("addEmployee");
}


// Delete employee
function deleteEmployee(id) {

    if (confirm("Are you sure you want to delete this employee?")) {

        employees = employees.filter(emp => emp.id !== id);

        saveData();

        displayEmployees();
        updateDashboard();

        alert("Employee deleted successfully!");
    }
}


// Dashboard
function updateDashboard() {

    document.getElementById("totalEmployees").innerText =
        employees.length;

    let active = employees.filter(
        emp => emp.status === "Active"
    ).length;

    document.getElementById("activeEmployees").innerText =
        active;

    let departments = new Set(
        employees.map(emp => emp.department)
    );

    document.getElementById("totalDepartments").innerText =
        departments.size;

    let totalSalary = employees.reduce(
        (sum, emp) => sum + emp.salary,
        0
    );

    let average =
        employees.length > 0
            ? totalSalary / employees.length
            : 0;

    document.getElementById("averageSalary").innerText =
        "₹" + Math.round(average).toLocaleString();


    // Recent employees

    let recent = document.getElementById("recentEmployees");

    recent.innerHTML = "";

    employees.slice(-5).reverse().forEach(emp => {

        recent.innerHTML += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.department}</td>
                <td>${emp.position}</td>
            </tr>
        `;
    });
}


// Initial dashboard
updateDashboard();
