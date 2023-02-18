import Menu from "./../components/Menu/Menu";
import MenuItem from "./../components/Menu/MenuItem";
const Home = ()=>{
  return (
    <div>
      <Menu 
        onSelect={(e)=>{console.log('e',e)}}
        className='menu-test'
        defaultIndex={2}
      >
        <div>1</div>
        <MenuItem className="menu-item-test">item1</MenuItem>
        <MenuItem disabled={true}>item2</MenuItem>
      </Menu>

    </div>
  )
}
export default Home;