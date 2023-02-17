import React from "react";
import { useNavigate } from "react-router-dom"
import classNames from 'classnames';

interface BreadItemProps {
  className?:string,
  children?:React.ReactNode,
  separator?:string
  link?:string
}
type BreadItemUnin = BreadItemProps & React.BaseHTMLAttributes<HTMLElement> 
type BreadItemUnion =BreadItemUnin & React.AnchorHTMLAttributes<HTMLElement>
type BreadItemPropsResult = Partial<BreadItemUnion>
const BreadItem = (props:BreadItemPropsResult) => {
  const {children,className,separator,link,...reset} = props;
  const classes = classNames('bread-item',className);
  const nav = useNavigate();
  let clickFun:any = null;
  if(reset) clickFun = reset?.onClick;
  return (
    <div className={classes}
      {...reset}
      onClick={()=>{
        if(clickFun) clickFun()
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