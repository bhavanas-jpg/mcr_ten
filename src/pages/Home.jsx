import React from 'react'
import { useData } from '../context/DataContext';

const Home = () => {
    const {name,  state} = useData();
    const {place} = state;

  return (
    <div> 
    <h1>{name}</h1>
    <h2>{place}</h2>     
    </div>
  )
}

export default Home