import React,{useContext,useEffect,useState} from "react";
import classNames from "classnames";
import { choiceContext } from "./RadioGroup";
interface RadioProps {
  className?:string,
  value?:any,
  children?:React.ReactNode,
  index?:number
}
const Radio = (props:RadioProps) => {
  const ctx:any = useContext(choiceContext);
  const setIndex = ctx.setIndex//更新index
  const onChange = ctx.onChange//更新的fn
  const fnValue = ctx.value//父亲指定的初始value
  const fnIndex = ctx.index//父亲的index
  const {className,value,children,index} = props;
  const classes = classNames('radio',className,{

  })
  const [isS,setIsS] = useState(false);
  /**选择时，反选 */
  const change = (e:any) => {
    //1.更新index
    setIndex(index);
    //2.触发fn
    if(onChange) onChange(index)
  }
  return (
    <span className={classes}>
      <input type="radio" onClick={change} checked={index===fnIndex} />
      {children}
    </span>
  )
}
export default Radio;