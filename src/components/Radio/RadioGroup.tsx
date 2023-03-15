import React,{useState} from "react";
import classNames from "classnames";
interface RadioGroupProps {
  className?:string,
  value?:any,
  onChange?:(e:any)=>void,
  children?:any
}
export const choiceContext = React.createContext({});
const RadioGroup = (props:RadioGroupProps) => {
  const {className,value,onChange,children} = props;
  const classes = classNames('radio-group',className,{
  })
  const [selectIndex,setSelectIndex] = useState(-1);//当前选择的
  /**children配置 */
  const radioChild = () => {
    const res = React.Children.map(children,(item,index)=>{
      try{
        if(item?.type?.name!=='Radio') {
          throw new Error('error')
        }else{
          return React.cloneElement(item,{
            index
          })
        }
      }catch(e){
        console.error(e)
      }
    })
    return res;
  }
  radioChild()
  return (
    <choiceContext.Provider value={{index:selectIndex,setIndex:setSelectIndex,onChange,value}}>
      <div className={classes}>
        {radioChild()}
      </div>
    </choiceContext.Provider>
    
  )
}
export default RadioGroup;