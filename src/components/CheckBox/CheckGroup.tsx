import React from "react";
import classNames from "classnames";
interface CheckGroupProps {
  className?:string
}
const Check = (props:CheckGroupProps) => {
  const {className} = props;
  const classes = classNames('check')
  return (
    <div className={classes}>check</div>
  )
}
export default Check;