import React,{useContext} from 'react';
import classNames from 'classnames';
import {contextMenuItem} from "./Menu";
interface MenuItemProps {
  className?:string,
  children?:React.ReactNode,
  index?:number,
  disabled?:boolean
}
const MenuItem = (props:MenuItemProps) => {
  const {
    className,
    children,
    index,
    disabled
  } = props;
  const MenuItemContext = useContext(contextMenuItem);
  
  const classes = classNames('menu-item',className,{
    'menu-item-actived':!disabled && index===MenuItemContext.index,
    'menu-item-disabled':disabled
  });
  return (
    <li 
    className={classes}
    onClick={()=>{!disabled && MenuItemContext.onSelect && MenuItemContext.onSelect(props.index as number)}}
    >
      {children}
    </li>
  )
}

MenuItem.defaultProps = {
  disabled:false
}
export default MenuItem;
