import React, { useState } from 'react';
import TodoList from './TodoList';
import './form.css';

const Form = (props) => {

  const [items, setItems] = useState([]);
  const [disable, setDisable] = useState(true);
  const [getEmployeeData, setEmployeeData] = useState([]);
  const [errVal, setErr] = useState(0);

  const handleChange = ({ target }) => {

    const { name, value } = target;
    if(value !== ''){
      const newData = Object.assign({}, getEmployeeData, { [name]: value});
      //console.log(newData);
      setEmployeeData(newData);
      if(Object.keys(newData).length === 6){
        setDisable(false);
      }
    }else{
      setErr(1);
    }
    
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(getEmployeeData).length === 0) {
      alert('fill all the fields');
      return;
    }else{
      const newItems = { getEmployeeData , id: Date.now()}
      setItems(() => (items.concat(newItems)))
      setEmployeeData('');
      setDisable(true);
      e.target.reset();
      //window.location.reload();
    }
  }
 

  return ( 
    <> 
    <div className="box"> 
      <h3 className="header">Employee Details</h3>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">
          Name
        </label>
        <input type="text"
               name='name'
               id='name'
               onChange={handleChange}
               value={getEmployeeData.name}
        /></div>
        <div>
        <label htmlFor="empid">Employee ID</label>
        <input type="number"
               name='empid' 
               id="empid"
               onChange={handleChange} 
               value={getEmployeeData.empid}                 
        /></div>
        <div>
        <label htmlFor="position">
         Position
        </label>
        <input type="text"
               name='position'
               id='position'
               onChange={handleChange}
               value={getEmployeeData.position}
        /></div>
        <div>
        <label htmlFor="email">Email</label>
        <input type="email" 
               name='email'
               id="email"
               onChange={handleChange} 
               value={getEmployeeData.email}       
        /></div>
        <div>
        <label htmlFor="location">Location</label>
        <input type="text" 
               name='location'
               id="location" 
               onChange={handleChange} 
               value={getEmployeeData.location}               
        /></div>
        <div>
        <label htmlFor="project">Project</label>
        <input type="text"
               name='project'
               id="project" 
               onChange={handleChange} 
               value={getEmployeeData.project}                
        /></div>               
        <button disabled={disable} type="submit" className="Submit_btn">
          Submit
        </button>
        
      </form>
       
    </div>
    <TodoList items = {items} />
    </>
  );  
 
  
}

export default Form;
