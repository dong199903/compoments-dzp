import React, { useEffect,useState } from "react";
import "./index.scss";
import Radio from "../components/Radio/Radio";
import RadioGroup from "../components/Radio/RadioGroup";
const Home = () => {
  const onChange=(e:any)=>{
    console.log(e);
  }
  return (
    <div>
      <RadioGroup onChange={onChange}>
        <Radio value={1}>选项1</Radio>
        <Radio value={2}>选项2</Radio>
      </RadioGroup>
      dzp
    </div>
  )
}
export default Home;