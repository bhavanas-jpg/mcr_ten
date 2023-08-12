import React, { useEffect, useState } from 'react'
import { useData } from '../context/DataContext';
import { inventory } from '../data/inventory_data';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const {inventoryData, setInventoryData, state, dispatch} = useData();
  const {data} = state;
  const departments = ["All Departments","Kitchen", "Toys", "Clothing"];
  const filterTwo = ["name", "price", "stock"];
  const [lowStock, setLowStock] = useState(false);
  const [filterSecond, setFilterSecond] = useState("name")
  const navigate = useNavigate();



  let newInventoryProducts  = lowStock ?  data.filter(({stock}) =>stock <=10): data;
  let   latestInventoryProducts =  filterSecond !== "" ? [...newInventoryProducts].sort((a, b) =>
  a[filterSecond] > b[filterSecond] ? 1 : -1 ): newInventoryProducts;
  let latest =  state.departments === "All Departments"?  latestInventoryProducts:  latestInventoryProducts.filter(item => item.department === state.departments) ; 

 
  return (
    <div >
     <div className="d-flex">
     <h2> Products</h2>
     <div>
      <select name="selectBox" id="selectBox"
      onChange={(e)=>dispatch({
        type: "DEPT_FILTER",
        payload: e.target.value 
      })}
      value={state.departments}>
      {departments.map(item =>
        <option key={item} value={item}> {item}</option>
        )}
      </select>
     </div>
     <div>
      <label >
      <input type="checkbox" 
      onChange={()=> setLowStock(prev =>!prev)} />
      Low Stock Items
      </label>
     </div>
     <div>
      <select name="filterTwo" id="filterTwo"
      onChange={(e) => setFilterSecond(e.target.value)}>
        {filterTwo.map(item => 
          <option 
          
          key={item} value={item}>{item}</option>
          )}
      </select>
     </div>
     <button onClick={()=> navigate("/addNewProduct")}>New </button>
     </div>
    

      <table>
       <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Supplier</th>
        </tr>
       </thead>
       <tbody>
        {
          latest.map((inventory) => (
            <tr key={inventory.id}>
              <td><img src={inventory.imageUrl} alt="inventory Image" 
              width={200} height={100}/></td>
              <td>{inventory.name}</td>
              <td>{inventory.description}</td>
              <td>${inventory.price}</td>
              <td>{inventory.stock}</td>
              <td>{inventory.supplier}</td>
            </tr>
          ))
        }
       </tbody>

      </table>

      </div>
  )
}

export default Products;

/**
 *       <div>
            {!snacks.length ? <p>no snacks found </p> :
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => {
                                handleHeaderClick('id')
                            }}>ID</th>
                            <th onClick={() => handleHeaderClick('product_name')}>Product Name</th>
                            <th onClick={() => handleHeaderClick('product_weight')}>Product Weight</th>
                            <th onClick={() => handleHeaderClick('price')}>Price</th>
                            <th onClick={() => handleHeaderClick('calories')}>Calories</th>
                            <th onClick={() => handleHeaderClick('ingredients')}>Ingredients</th>
                        </tr>
                    </thead>


                    <tbody>
                        {snacks?.map((snack) => (
                            <tr key={snack.id}>
                                <td>{snack.id}</td>
                                <td >{snack.product_name}</td>
                                <td >{snack.product_weight}</td>
                                <td >{snack.price}</td>
                                <td >{snack.calories}</td>
                                <td >{snack.ingredients.join(', ')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
 */