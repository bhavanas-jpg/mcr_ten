import React from 'react'
import NewProductForm from './NewProductForm'
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

const Departments = () => {
  const {inventoryData, setInventoryData, setFilterContainer, state, dispatch} = useData();
  const departments = ["Kitchen", "Toys", "Clothing"];
   const navigate = useNavigate();


   const departmentFilter = department => {
    dispatch({
      type: "DEPT_FILTER",
      payload: department
    })
    navigate("/products")
   }





  return (
    <div className='d-flex'>
      {
        departments.map((item) => 
        <div
        onClick={
          ()=>departmentFilter(item)
        }
        className="department-container"
        key={item}>
          <h3> {item}</h3>
        </div>
        )
      }
    
     


     
    </div>
  )
}

export default Departments