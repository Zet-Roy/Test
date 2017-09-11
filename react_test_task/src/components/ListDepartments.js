import React from 'react';
import Department from './Department';
import '../css/ListDepartments.css';

export const ListDepartments = (props) => {
    return (
      <div className="sidebar">
          {props.ListDepartments.map(departmen => 
            <Department 
              key={departmen.id} 
              id={departmen.id}
              Employee={props.Employee}
              departmenName={departmen.nameDepartment} 
              ListEmployees={props.ListEmployees} 
              clickHandleToggle={props.clickHandleToggle} />)}
      </div>
    );
}