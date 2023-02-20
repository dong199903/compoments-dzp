
import React from "react";
import classNames from "classnames";
interface processProps {
  num:number
  className?:string,
  color?:string,
}
const Process = (props:processProps) => {
  const {className,color,num} = props;
  const classes = classNames('process',className);
  if(!num) {
    console.error('num必须传递');
    return <></>
  }
  return (
    <div className={classes}>
      <div className="process-box">
        <div className="process-box-content" style={{backgroundColor:color,width:`${num}%`}}></div>
      </div>
      <span>{num}%</span>
    </div>
  )
}
Process.defaultProps = {
  color:'green'
}
export default Process;