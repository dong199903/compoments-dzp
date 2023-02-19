import React,{useContext,useState} from "react";
import classNames from "classnames";
import { CSSTransition } from 'react-transition-group';
import {contextMenuItem} from "./Menu";
interface SubMenuProps {
  title?:React.ReactNode
  children?:React.ReactNode
  className?:string,
  disabled?:boolean,
  index?:number
}
const SubMenu = (props:SubMenuProps) => {
  /**
   * mode是横向，hover展开
   * mode是纵向，点击展开，占据空间
   */
  const {className,title,children,index,disabled} = props;
  const menuSunContext = useContext(contextMenuItem);
  const [show,setShow] = useState(true);
  
  const classes = classNames('menu-sub',className,{
    [`menu-sub-${menuSunContext?.mode}`]:menuSunContext?.mode,
  });
  const handleChange = () => {
    setShow(!show);
  }

  const sumMenuContext = React.Children.map(children,(item:any)=>{
    if(item && item?.type?.name==='MenuItem') {
      return React.cloneElement(item,{
        isSubParent:true
      })
    }
    return item;
  })
  return (
    <div
      className={classes}
      onMouseEnter={()=>{
        menuSunContext.mode==='horizontal'&& setShow(true)
      }}
      onMouseLeave={()=>{
        menuSunContext.mode==='horizontal'&& setShow(false)
      }}
      
    >
      <div className="menu-sub-title"
        onClick={(e)=>{
          console.log()
          menuSunContext.mode==='vertical' && handleChange()
        }}
      >{title}</div>
       {/**sub-menu展示区 */}
       <CSSTransition in={show} timeout={500} classNames="menu-sub-node" >
        <ul className="menu-sub-items">
          {sumMenuContext}
        </ul>
       </CSSTransition>
      
      
    </div>
  )
}

export default SubMenu;