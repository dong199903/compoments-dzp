import React, { useEffect,useState } from "react";
import Select from "../components/Select";
import "./index.scss";
const Home = () => {
  const options = [
    {label:'value1',value:'value1'},
    {label:'value2',value:'value2'},
    {label:'value3',value:'value3'},
  ]
  return (
    <div>
     <Select mode='multiple' options={options}></Select>

     {/* <Select options={options}></Select> */}
    </div>
  )
}
export default Home;