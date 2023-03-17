import React, { useEffect,useState } from "react";
import "./index.scss";
import Radio from "../components/Radio/Radio";
import RadioGroup from "../components/Radio/RadioGroup";
import CheckGroup from "../components/CheckBox/CheckGroup";
import Check from "../components/CheckBox/Check";
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
  const checkChange = (e:any) => {
    console.log(e);
  }
  return (
    <div>
      <RadioGroup onChange={onChange}>
        <Radio value={1}>选项1</Radio>
        <Radio value={2}>选项2</Radio>
      </RadioGroup>
      <Select defaultValue="dzp" options={options}></Select>

      <CheckGroup value={[1]} onChange={checkChange}>
        <Check value={1}>选项1</Check>
        <Check disabled value={2}>选项2</Check>
        <Check value={3}>选项3</Check>
      </CheckGroup>
    </div>
  )
}
export default Home;