import React, { useState } from "react";
import { v4 as uuid } from 'uuid'
import { useData } from "../context/DataContext";
import {  useNavigate } from "react-router-dom";

const NewProductForm = () => {


  const [formValues, setFormValues] = useState({
    id: uuid(),
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: ""
});
const {inventoryData, setInventoryData, state, dispatch} = useData();
const navigate = useNavigate();


const changeMediaHandler = (e) => {
  const file = e.target.files[0];
  if (file?.type.startsWith("image/")) {
      if (file.size < 10 * 1024 * 1024) {
          setFormValues((prev) => ({
              ...prev,
              imageUrl: URL.createObjectURL(file)
          }))
      } else {
          alert("file must be less than 10mb")
      }
  } else {
      alert("file must be an image (JPEG/PNG)");
  }
}

const handleSubmit=(e, formData)=>{
  e.preventDefault();
  dispatch({
    type: "ADD_PRODUCT",
    payload: formData
  })
  navigate("/products")
console.log(formData);
}
  return (
    <div>
      <form onSubmit={(e)=> handleSubmit(e, formValues)}>
        <div>
          <label>Department</label>
          <select id="selectBox" name="selectBox"
          onChange={(e)=> setFormValues({...formValues, department: e.target.value})}
          >
            <option value="selectDepartment">Select Department</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Toys">Toys</option>
            <option value="Clothing">Clothing</option>
          </select>
        </div>
        <div>
          <label>Name:</label>
          <input 
          type="text" 
          value={formValues.name}
          onChange={(e)=> setFormValues( {...formValues, name: e.target.value})}
          />
        </div>
        <div>
          <label>Description:</label>
          <input type="text"
          value={formValues.description}
          onChange={(e)=> setFormValues( {...formValues, description: e.target.value})} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" placeholder="0" 
          value={formValues.price}
          onChange={(e)=> setFormValues( {...formValues, price: e.target.value})
        } 
          />
        </div>
        <div>
          <label>Stock</label>
          <input type="number" placeholder="0" 
           value={formValues.stock}
           onChange={(e)=> setFormValues( {...formValues, stock: e.target.value})
         } 
          />
        </div>
        <div>
          <label>SKU:</label>
          <input type="text" 
          value={formValues.sku}
          onChange={(e)=> setFormValues( {...formValues, sku: e.target.value})}
          />
        </div>
        <div>
          <label>Supplier:</label>
          <input type="text"
          value={formValues.supplier}
          onChange={(e)=> setFormValues( {...formValues, supplier: e.target.value})}
          />
        </div>
        <div>
          <label>Delivered:</label>
          <input type="number" 
          placeholder="0"
          value={formValues.delivered}
          onChange={(e)=> setFormValues( {...formValues, delivered: e.target.value})}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="file"
          onChange={changeMediaHandler }
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default NewProductForm;
