import React, { useEffect,useState } from "react";
import Select from "../components/Select";
import AutoComplate from "../components/AutoComplete";
import "./index.scss";
const Home = () => {
  const options = [
    {label:'value1',value:'value1'},
    {label:'value2',value:'value2'},
    {label:'value3',value:'value3'},
  ]
  const onSearch = (e:any) => {
    //e是输入框的值,模拟后端请求接口
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let len = Math.floor(Math.random()*5+5);
        let tmp = new Array(len).fill(Math.floor(Math.random()*10));
        resolve(tmp);
      },500)
    })
  }
  return (
    <div>
     <AutoComplate 
      placeholder="请输入text"
      options={options}
      onSearch={onSearch}
     />
    </div>
  )
}
export default Home;