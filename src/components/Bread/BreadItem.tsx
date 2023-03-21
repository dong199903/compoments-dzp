import React from "react";
import { useNavigate } from "react-router-dom"
import classNames from 'classnames';

interface BreadItemProps {
  className?:string,
  children?:React.ReactNode,
  link?:string,
  separator?:React.ReactNode
  onClick?:(e:any)=>void
}
type BreadItemUnin = BreadItemProps & React.BaseHTMLAttributes<HTMLElement> 
type BreadItemUnion =BreadItemUnin & React.AnchorHTMLAttributes<HTMLElement>
type BreadItemPropsResult = Partial<BreadItemUnion>
const BreadItem = (props:BreadItemPropsResult) => {
  const {children,className,link,onClick,separator,...reset} = props;
  const classes = classNames('bread-item',className);
  const nav = useNavigate();
  return (
    <div className={classes}
      {...reset}
      onClick={(e)=>{
        if(onClick) onClick(e);
        //如果有路由，则跳转
        if(link) {
          nav(link);
        }
      }}
    >
      {children} 
      {
        separator && (
          <span className="bread-item-separator">
            {separator}
          </span>
        )
      }
    </div>
  )
}

export default BreadItem;