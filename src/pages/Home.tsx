import React from "react";
import Select from "../components/Select";
const Home = () => {
  const options=[
    {label:'小米',value:'小米'},
    {label:'华为',value:'华为'},
    {label:'网易',value:'网易'},
    {label:'京东',value:'京东',disabled:true},
  ]
  return (
    <div>
      <Select options={options} mode='multiple' defaultValue={['小米']} onChange={(e:any)=>console.log(e)}/>
       {/* <Select defaultValue={['小米']} options={options} mode='multiple' >

      </Select> */}
    </div>
  )
}
export default Home;