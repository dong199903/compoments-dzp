import React,{useContext,useEffect,useState} from "react";
import classNames from "classnames";
import { choiceContext } from "./RadioGroup";
interface RadioProps {
  className?:string,
  value?:any,//value
  children?:React.ReactNode,
  disabled?:boolean//是否禁用
  checked?:boolean//是否选中
  onChange?:(e:any)=>void
}
const Radio = (props:RadioProps) => {
  const {className,value,children,disabled,checked,onChange} = props;
  const classes = classNames('radio',className,{});
  return (
    <span className={classes}>
      <input type="radio" onClick={()=>onChange && onChange(value)} checked={checked} disabled={disabled} />
      {children}
    </span>
  )
}
export default Radio;