let employee = {
    streetAddress: '',
    name: ''
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, Sam) {
    employee[name]= Sam
    return employee;
};

function deleteFromEmployeeByKey(employee, key, value) {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
};

function destructivelyDeleteFromEmployeeByKey(newEmployee, name, Sam) {
    newEmployee[name]= Sam
    return newEmployee;
};
