import React from 'react';  
import './form.css';

  const TodoList = (props) => {
    return (
      <ul className="listItem">
        {props.items.map(item => 
        <>
        <li key={item.id}>{item.getEmployeeData.name}</li>
        <li key={item.id}>{item.getEmployeeData.empid}</li>
        <li key={item.id}>{item.getEmployeeData.position}</li>
        <li key={item.id}>{item.getEmployeeData.email}</li>
        <li key={item.id}>{item.getEmployeeData.location}</li>
        <li key={item.id}>{item.getEmployeeData.project}</li>
        </>
        )}
      </ul>
    )
  }

  
export default TodoList;
