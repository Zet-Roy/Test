import React, { Component } from 'react';
import {Employee} from './Employee';
import '../css/Department.css';

class Department extends Component {
  // Изъятия нужных employee для компонента
  filterEmployees(Lemp, id) {
    return Lemp.filter((emp) => { 
      if(emp.departmentId === id) { 
        return true;
      }
      
      return false;
    })
  }

  render() {
    return (
      <div className="bloc_departments">
        <div className="department">
            {this.props.departmenName}
        </div>

        {this.filterEmployees(this.props.ListEmployees, this.props.id).map((employee) => {
            return <Employee 
              key={employee.id} 
              Employee={this.props.Employee}
              idEmployee={employee.id} 
              firstName={employee.firstName} 
              lastName={employee.lastName} 
              active={employee.active} 
              clickHandleToggle={this.props.clickHandleToggle} />

        })}
      </div>
    );
  }
}

export default Department;