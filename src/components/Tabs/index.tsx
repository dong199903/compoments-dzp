import React from "react";
import classNames from "classnames";
interface itemProps {
  key:string 
  label:string 
  content:string
}
interface tabsProps {
  className?:string
  items?:itemProps[]
}
const Tabs = (props:tabsProps) => {
  const {
    className,
    items
  } = props;
  const classes = classNames('tabs',className);
  return (
    <div 
      className={classes}
    >
      tabs
    </div>
  )
}

Tabs.defaultProps = {
  items:[]
}
export default Tabs;