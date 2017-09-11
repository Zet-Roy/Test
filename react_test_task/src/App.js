import React, { Component } from 'react';
import { ListDepartments } from './components/ListDepartments';
import { EditEmployee } from './components/EditEmployee';
import { LoadDBDepartments, LoadDBEmployees, UpdateDBEmployees } from './lib/DepartmentsService';

import './App.css';

class App extends Component {

  constructor() {

    super();
    this.state = {
      ListDepartments: [],
      ListEmployees: [],
      Employee: {
        id: 0,
        firstName: '',
        lastName: '',
        departmentId: 0,
        active: false
      }
    }
  }

  componentDidMount() {
    LoadDBDepartments().then(Dept => this.setState({ListDepartments: Dept}))
    LoadDBEmployees().then(Emp => this.setState({ListEmployees: Emp}))
  }

  // Добавления свойства active к объектам масива ListEmployees
  addProperty(items) {
    return items.map(objE => {
        return {...objE, active: false}
    });
  }

  // Метод выделения выбраного объекта для редактирования
  clickHandleToggle(idEmployee) {
    let newObject={
      id: 0,
      firstName: '',
      lastName: '',
      departmentId: 0,
      active: false
    };

    if(this.state.Employee.active === false) {
      newObject = this.findObject(idEmployee);

      newObject = {...newObject, active: true}
    } else if (idEmployee !==  this.state.Employee.id) {
      newObject = this.findObject(idEmployee);

      newObject = {...newObject, active: true}
    }

    this.setState({Employee: newObject})
  }

  findObject(idEmployee) {
    return this.state.ListEmployees.find((element) => {
      if(element.id === idEmployee) {
        return true;
      }

      return false;
    })
  }

  // Метод изменения значения firstName объекта Employee при ведения текста в input
  handleChangeFirstName(event) {
    if(this.state.Employee.active === true) {
      const Employee = {...this.state.Employee, firstName: event.target.value};
      this.setState({Employee});
    }
  }

  // Метод изменения значения lastName объекта Employee при ведения текста в input
  handleChangeLastName(event) {
    if(this.state.Employee.active === true) {
      const Employee= {...this.state.Employee, lastName: event.target.value};
      this.setState({Employee});
    }
  }

  // Внесения в массив ListEmployees отредактированый объект Employee и добавляет изменения в db.json
  clickHandleEdit() {
    if(this.state.Employee.id !== 0) {

      const newItems = this.state.ListEmployees.map(employee =>  {
        if (this.state.Employee.id === employee.id && this.state.Employee.active === true){
          return {
            id: this.state.Employee.id,
            firstName: this.state.Employee.firstName,
            lastName: this.state.Employee.lastName,
            departmentId: this.state.Employee.departmentId
          }
        }

        return employee;
     });
     
     UpdateDBEmployees({
      id: this.state.Employee.id,
      firstName: this.state.Employee.firstName,
      lastName: this.state.Employee.lastName,
      departmentId: this.state.Employee.departmentId
     }).then(() => console.log("updated"));

      this.setState({ListEmployees: newItems, Employee: this.state.Employee });
    }

  }

  render() {
    return (
      <div className="wrapper">
        <header>
           
        </header>
        <section>
          <ListDepartments 
            ListDepartments={this.state.ListDepartments}
            ListEmployees={this.state.ListEmployees}
            Employee={this.state.Employee}
            clickHandleToggle={(value) => this.clickHandleToggle(value)}/>
          <EditEmployee 
            Employee={this.state.Employee}
            handleChangeFirstName={(event) => this.handleChangeFirstName(event)} 
            handleChangeLastName={(event) => this.handleChangeLastName(event)} 
            clickHandleEdit={() => this.clickHandleEdit()} />
        </section>
        <footer>
            
        </footer>
      </div>
    );
  }
}

export default App;
