import React from "react";
import classNames from 'classnames';

interface BreadItemProps {
  className?:string,
  children?:React.ReactNode,
  separator?:string
}
type BreadItemUnin = BreadItemProps & React.BaseHTMLAttributes<HTMLElement> 
type BreadItemUnion =BreadItemUnin & React.AnchorHTMLAttributes<HTMLElement>
type BreadItemPropsResult = Partial<BreadItemUnion>
const BreadItem = (props:BreadItemPropsResult) => {
  const {children,className,separator,...reset} = props;
  const classes = classNames('bread-item',className)
  return (
    <div className={classes}
      {...reset}
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