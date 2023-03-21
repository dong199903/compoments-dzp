import React from "react";
import classNames from "classnames";
interface BreadProps {
  children?:React.ReactNode,
  className?:string,
  separator?:React.ReactNode,
}
const Bread = (props:BreadProps) => {
  const {children,className,separator} = props;
  const classes = classNames('bread',className);

  /**判断是否是最后一个breaditem组件 */
  const judgeLastBreadItem = (idx:number) => {
    //从index+1往后找
    let isLast:boolean = true;
    React.Children.forEach(children,(item:any,index)=>{
      if(index>idx && item?.type?.name==='BreadItem') isLast = false;
    })
    return isLast;
  }
  const BreadElement = React.Children.map(children,(item :any,index:number)=>{
    //1.非breadItem类似的都直接展示
    if(typeof item !== "object") return item;
    if(!item?.type?.name || item?.type?.name !== 'BreadItem') {
      console.error('子组件必须是bredItem');
      return item;
    }
    if(children instanceof Array) {
      if(!judgeLastBreadItem(index)) 
        return React.cloneElement(item,{
          separator
        })
    }
    return item;
  })
  return (
    <div className={classes}>{BreadElement}</div>
  )
}
Bread.defaultProps = {
  separator:'>'
}
export default Bread;