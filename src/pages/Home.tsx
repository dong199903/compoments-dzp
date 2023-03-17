import React, { useEffect,useState } from "react";
import "./index.scss";
import Radio from "../components/Radio/Radio";
import RadioGroup from "../components/Radio/RadioGroup";
import CheckGroup from "../components/CheckBox/CheckGroup";
import Check from "../components/CheckBox/Check";
import Select from "../components/Select";
import Swiper from "../components/Swiper";
const Home = () => {
  
  return (
    <div>
      <Swiper duration={2000} onChange={(e)=>{console.log(e)}}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Swiper>
    </div>
  )
}
export default Home;