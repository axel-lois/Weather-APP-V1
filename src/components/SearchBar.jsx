import React, {useState}from 'react';
import SearchBarCSS from './SearchBar.module.css';

export default function SearchBar(props) {
  const [value, setNewValue] = useState('');

  const inputChangeHandler = (e)=> {
    setNewValue(e.target.value);
  }

  const clickHandler = (e)=> {
    props.onSearch(value);
  }
  
  return <div className={SearchBarCSS.container}>
    <input value={value} onChange={inputChangeHandler} placeholder='Enter a city...' className={SearchBarCSS.searchBar} type='text'/>
    <button className={SearchBarCSS.btn} onClick={clickHandler}>Search</button>
  </div>
};