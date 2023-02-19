import Menu from "./../components/Menu/Menu";
import MenuItem from "./../components/Menu/MenuItem";
import SubMenu from "../components/Menu/SubMenu";
const Home = ()=>{
  return (
    <div>
      <Menu 
        onSelect={(e)=>{console.log('e',e)}}
        className='menu-test'
        defaultIndex={2}
        mode="vertical"
      >
        <SubMenu title={<div style={{color:'red'}}>sub-menu-dzp</div>}>
          <MenuItem>sub1</MenuItem>
          <MenuItem>sub2</MenuItem>
          <MenuItem>sub3</MenuItem>
        </SubMenu>
        <MenuItem className="menu-item-test">item1</MenuItem>
        <MenuItem disabled={true}>item2</MenuItem>
      </Menu>

    </div>
  )
}
export default Home;