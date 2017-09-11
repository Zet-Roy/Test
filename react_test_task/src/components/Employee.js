import React from 'react';
import '../css/Employee.css';

export const Employee = (props) => {
    //Выделяет редактируемый компонент
    const active = (props.Employee.id===props.idEmployee) ? "employeeActive" : "employee";
    return (
      <div className={active} onClick={() => props.clickHandleToggle(props.idEmployee)}>
        {props.firstName} {props.lastName} 
      </div>
    );
}