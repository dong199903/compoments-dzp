import React from "react";

import Button from "./components/Button";
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
    </div>
  );
}

export default App;
