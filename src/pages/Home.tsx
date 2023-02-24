import Menu from "./../components/Menu/Menu";
import MenuItem from "./../components/Menu/MenuItem";
import SubMenu from "../components/Menu/SubMenu";
import Process from "../components/Process";
import Tabs from "../components/Tabs";
import Pagination from "../components/Pagination";
import Select from "../components/Select";
const Home = ()=>{
  const options = [
    {label:'xiaoming',value:'xiaoming'},
    {label:'zhaogang',value:'zhaogang'},
    {label:'lili',value:'lili'}
  ]
  return (
    <div>
      
      <Select options={options}></Select>
    </div>
  )
}
export default Home;