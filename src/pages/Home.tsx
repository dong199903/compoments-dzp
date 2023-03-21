import React from "react";
import Bread from "../components/Bread/Bread";
import BreadItem from "../components/Bread/BreadItem";
const Home = () => {
  return (
    <div>
      <Bread separator='>'>
        <BreadItem onClick={(e)=>{console.log(e)}}>首页</BreadItem>
        <BreadItem>我的</BreadItem>
        <BreadItem>其他</BreadItem>
      </Bread>
    </div>
  )
}
export default Home;