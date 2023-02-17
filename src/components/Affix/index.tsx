import React,{useRef,useEffect,useState} from "react";
import classNames from "classnames";
import _ from "lodash";
interface AffixProps {
  children?:React.ReactNode,
  top?:number,//页面滚动出去多少固定
}
const Affix = (props:AffixProps)=> {
  const { children,top } = props;
  const [isFixed,setIsFixed] = useState(false);
  const affixRef = useRef<HTMLDivElement>(null);
  
  const classnames = classNames('affix',{
    'affix-fixed':isFixed
  })
  //判断滚动是否满足
  const scrollJudge = () => {
    const scrollTop = document.documentElement.scrollTop;
    const fixTop = top ? top:0;
    console.log(scrollTop,fixTop);
    if(scrollTop>=fixTop) {
      setIsFixed(true);
    }else {
      setIsFixed(false);
    }
  }
  useEffect(()=>{
    //全局监听滚动事件
    window.addEventListener('scroll',_.throttle(scrollJudge,500))
    return ()=>{
      window.removeEventListener('scroll',_.throttle(scrollJudge,500))
    }
  },[])

  if(!children) {
    console.error('affix必须添加子元素')
    return <></>;
  }
  return (
    <div 
     className={classnames}
     ref={affixRef}
    >
      {children}
    </div>
  )
}

export default Affix;