import React from "react";
import classNames from "classnames";
interface CheckProps {
  className?:string
}
const Check = (props:CheckProps) => {
  const {className} = props;
  const classes = classNames('check')
  return (
    <div className={classes}>check</div>
  )
}
export default Check;