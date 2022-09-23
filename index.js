const employee = {
    name: "Peacock Johnson",
    streetAddress: "123 stardew Valley"
}
function updateEmployeeWithKeyAndValue(employee, name, value){
    const  newEmployee = {...employee}
    newEmployee[name] = value
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,name,value){
   employee[name] = value
   return employee
}

function deleteFromEmployeeByKey(employee,name){
    const newObj = {...employee}
    delete newObj[name]
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(employee,name){
    delete employee[name]
    return employee
}