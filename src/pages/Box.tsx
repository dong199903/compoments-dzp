import React from "react";
const Box = (props:any)=>{
  const {children} = props;
  console.log(children)
  const domFrag = React.Children.map(children,(item,index)=>{
    return React.cloneElement(item,{index})
  })
  return (
    <div>{domFrag}</div>
  )
}
export default Box;