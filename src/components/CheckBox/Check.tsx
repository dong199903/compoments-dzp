import React from "react";
import classNames from "classnames";
interface CheckProps {
  className?:string,
  children?:React.ReactNode,
  value?:any,
  disabled?:boolean,
  checked?:boolean,
  onChange?:(e:any,isChoice:boolean)=>void
}
const Check = (props:CheckProps) => {
  const {className,children,value,checked,disabled,onChange} = props;
  const classes = classNames('check',className);
  return (
    <span className={classes}>
      <input 
        type='radio' 
        disabled={disabled} 
        checked={checked} 
        onClick={(e)=>{
          onChange && onChange(value,checked!);
        }}
      />
      <text>{children}</text>
    </span>
  )
}
export default Check;