import Menu from "./../components/Menu/Menu";
import MenuItem from "./../components/Menu/MenuItem";
import SubMenu from "../components/Menu/SubMenu";
import Process from "../components/Process";
import Tabs from "../components/Tabs";
const Home = ()=>{
  const items = [
    {
      key:'key1',
      label:'label1',
      content:'content1'
    },
    {
      key:'key2',
      label:'label2',
      content:'content2',
      disabled:true
    },
    {
      key:'key3',
      label:'label3',
      content:<div style={{color:'gold'}}>content3</div>
    }
  ]
  const onTabClick = (key:string,e:any) => {
    console.log('key',key,e)
  }
  return (
    <div>
      <Tabs items={items} onTabClick={onTabClick} ></Tabs>
    </div>
  )
}
export default Home;