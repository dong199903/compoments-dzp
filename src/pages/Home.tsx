import React, { useEffect,useState } from "react";
import "./index.scss";
import Select from "../components/Select";
const Card = () => {
  const options = [
    {label:1,value:1},
    {label:2,value:2}
  ]
  return (
    <div>
      <Select options={options}></Select>
    </div>
  )
}
export default Card;