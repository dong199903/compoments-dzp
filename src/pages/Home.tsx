import React, { useEffect,useState } from "react";
import "./index.scss";
import Radio from "../components/Radio/Radio";
import RadioGroup from "../components/Radio/RadioGroup";
import Select from "../components/Select";
const Home = () => {
  const onChange=(e:any)=>{
    console.log(e);
  }
  const options = [
    {label:'dzp',value:'dzp'},
    {label:'xiao',value:'xiao'},
    {label:'dzp2',value:'dzp2'},
    {label:'xiao2',value:'xiao2'},
    {label:'dzp3',value:'dzp3'},
    {label:'xiao3',value:'xiao3'},
  ]
  return (
    <div>
      <RadioGroup onChange={onChange}>
        <Radio value={1}>选项1</Radio>
        <Radio value={2}>选项2</Radio>
      </RadioGroup>
      <Select defaultValue="dzp" options={options}></Select>
    </div>
  )
}
export default Home;