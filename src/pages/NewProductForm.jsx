import React from "react";

const NewProductForm = () => {
  return (
    <div>
      <form>
        <div>
          <label>Department</label>
          <select id="selectBox" name="selectBox">
            <option value="selectDepartment">Select Department</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Toys">Toys</option>
            <option value="Clothing">Clothing</option>
          </select>
        </div>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" placeholder="0" />
        </div>
        <div>
          <label>Stock</label>
          <input type="number" placeholder="0" />
        </div>
        <div>
          <label>SKU:</label>
          <input type="text" />
        </div>
        <div>
          <label>Supplier:</label>
          <input type="text" />
        </div>
        <div>
          <label>Delivered:</label>
          <input type="number" placeholder="0" />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="file" />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default NewProductForm;
