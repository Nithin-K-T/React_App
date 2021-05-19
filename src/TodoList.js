import React from 'react';  
import './form.css';

  const TodoList = (props) => {
    
    return (
      <div className="listItem">
        {props.items.map(item => 
        <ul key={item.id}>
        <li>{item.getEmployeeData.name}</li>
        <li>{item.getEmployeeData.empid}</li>
        <li>{item.getEmployeeData.position}</li>
        <li>{item.getEmployeeData.email}</li>
        <li>{item.getEmployeeData.location}</li>
        <li>{item.getEmployeeData.project}</li>
        </ul>
        )}
      </div>
    )
  }

  
export default TodoList;
