import React from 'react'
import { useData } from '../context/DataContext';

const Dashboard = () => {
    const {inventoryData, setInventoryData, state, dispatch} = useData();
    
    const totalStock = inventoryData.reduce((acc, {stock}) => acc + stock , 0 );
    const totalDelivered= inventoryData.reduce((acc, {delivered}) => acc + delivered , 0 );
    const lowStock= inventoryData.filter(item => item.stock <= 10).length;
  
  return (
    <div> 
      <div>
        <h2>{totalStock }</h2>
        <h3>Total Stock</h3>
      </div>
      <div>
        <h2>{totalDelivered}</h2>
        <h3>Total Delivered</h3>
      </div>
      <div>
        <h2>{lowStock}</h2>
        <h3>Low Stock Items</h3>
      </div>
    </div>
  )
}

export default Dashboard;

