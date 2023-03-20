import React,{useEffect,useState} from "react";
import classNames from "classnames";
interface SwiperProps {
  autoplay?:boolean,
  children?:React.ReactNode,
  className?:string,
  duration?:number,
  onChange?:(e:any)=>void
}
const Swiper = (props:SwiperProps) => {
  const {autoplay,className,children,duration,onChange} = props;
  const [activedIndex,setActivedIndex] = useState(0);
  const [count,setCount] = useState(0);
  useEffect(()=>{
    let timer:any = null;
    if(autoplay) {
      timer = setInterval(()=>{
        let index = activedIndex+1;
        if(index===count) {
          index = 0;   
        }
        setActivedIndex(index);
        onChange && onChange(index)
      },duration);
    }
    return () => {
      timer && clearInterval(timer);
    }
  },[activedIndex])

  useEffect(()=>{
    if(!children) {
      console.error('至少传递一个子元素');
      return;
    }
    if(Array.isArray(children)) setCount(children.length);
    else{
      setCount(0);
    }
  },[])

  //deal with classes
  const classes = classNames('swiper',className);
  //click the dot
  const changeIndex = (index:number) => {
    setActivedIndex(index);
    onChange && onChange(index);
  }
  //son nodes deal
  const swiperChilds = (
    <>
    {
      React.Children.map(children,(item:any,index:number)=>{
        return (
          <div 
            key={index} 
            className={index===activedIndex?'swiper-item swiper-item-actived':'swiper-item'}
          >
            { React.cloneElement(item,{
                index:index
              })
            }
          </div>
        )
      })
    }
    </>
  ) 
  return (
    <div className={classes}>
      {swiperChilds}
      <ul className="swiper-control">
        {Array.from(new Array(count)).map((item,index)=>(
          <li 
            onClick={()=>changeIndex(index)} 
            key={index}
            className={index===activedIndex?"swiper-control-item swiper-control-item-actived":"swiper-control-item"}
          >
          </li>
        ))}
      </ul>
    </div>
  )
}
Swiper.defaultProps = {
  duration:1500,
  autoplay:false
}
export default Swiper;