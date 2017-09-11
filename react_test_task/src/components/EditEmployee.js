import React from 'react';
import '../css/EditEmployee.css';

// Компонент редактирования выбраного значения
export const EditEmployee = (props) => {
    const firstName = props.Employee.firstName || '';
    const lastName = props.Employee.lastName || '';
    
    return (
      <div className="content">
          <div className="edit">
            <span>First Name</span>
            <input className="firstName" type="text" size="20" value={firstName} onChange={props.handleChangeFirstName} />
            <span>Last Name</span>
            <input className="lastName" type="text" size="20" value={lastName} onChange={props.handleChangeLastName} />
            <button onClick={() => props.clickHandleEdit()}>Редактировать</button>
          </div>
      </div>
    );
}