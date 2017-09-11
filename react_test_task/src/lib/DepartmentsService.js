const baseUrlDepartments = 'http://localhost:8080/ListDepartments';
const baseUrlEmployees = 'http://localhost:8080/ListEmployees';

export const LoadDBDepartments = () => {
    return fetch(baseUrlDepartments).then(res => res.json())
}

export const LoadDBEmployees = () => {
    return fetch(baseUrlEmployees).then(res => res.json())
}

export const UpdateDBEmployees = (emp) => {
    return fetch(`${baseUrlEmployees}/${emp.id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emp)
    }).then(res => res.json())
}