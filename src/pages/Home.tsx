import React,{useState} from "react";
import Select from "../components/Select";
import AutoComplate from '../components/AutoComplete/index';
import Input from "../components/Input";
const Home = () => {
  const [val,setVal] = useState()
  return (
    <div>
      <Input 
        value={val} 
        onChange={(e:any)=>{setVal(e.target.value)}}
        prepend="dzp"
      />
    </div>
  )
}
export default Home;