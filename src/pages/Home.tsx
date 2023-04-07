import React from "react";
import Select from "../components/Select";
import AutoComplate from '../components/AutoComplete/index';
const Home = () => {
  const search = (value:any) => {
    //模拟后后端请求
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        let arr = Array.from(new Array(7),item=>Math.floor(Math.random()*10));
        resolve(arr);
      }, 500);
    })
  }
  return (
    <div>
      <AutoComplate onSearch={search}/>
    </div>
  )
}
export default Home;