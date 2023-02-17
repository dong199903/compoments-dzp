import Bread from "./../components/Bread/Bread";
import BreadItem from "./../components/Bread/BreadItem";
const Home = ()=>{
  return (
    <div>
      <Bread>
        <BreadItem link='/header' onClick={()=>console.log('item1')}>item1</BreadItem>
      </Bread>

    </div>
  )
}
export default Home;