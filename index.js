// Write your solution in 
const employee = {
    name : "Sam", streetAdress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployee = {...employee}
    updateEmployee[key]=value
    return updateEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const updateEmployee = {employee}
    delete updateEmployee.value
    return updateEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key]=value
    delete employee.value
    return employee
}