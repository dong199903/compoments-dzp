import React from "react";
import Button from "./components/Button";
import Divider from "./components/Divider";
import Affix from "./components/Affix";
import Bread from "./components/Bread/Bread";
import BreadItem from "./components/Bread/BreadItem";
import "./index.css";
function App() {
  return (
    <div className="App">
      <div>button测试</div>
      <Button>dzp</Button>
      <Button size="large">dzp</Button>
      <Button size="small">dzp</Button>
      <Button type="primary" size="large">dzp</Button>
      <Button type="danger">dzp</Button>
      <Button type="link" href="http://www.baidu.com" onClick={()=>{console.log('a')}}>dzp</Button>
      <Button disabled={true}>dzp</Button>
      <Button onClick={()=>console.log('click')}>惦记我</Button>

      <Divider/>
      <Divider orientation="right">dzp</Divider>
      <Divider  type="vertical" className='dzp'>pppp</Divider>
      <Divider><div style={{width:'100px',height:'100px',backgroundColor:'red'}}>测试盒子</div></Divider>

      <Affix
        top={100}
      >
        <div style={{backgroundColor:'red'}}>content</div>
      </Affix>

      <Bread>
        <BreadItem className="test1">item1</BreadItem>
        <BreadItem onClick={()=>{console.log('click test')}}>item2</BreadItem>
        <div>dzp</div>
        <BreadItem><a href="http://www.baidu.com">a link</a></BreadItem>
      </Bread>
    </div>
  );
}

export default App;
