import React,{useState} from "react";
import classNames from "classnames";
interface RadioGroupProps {
  className?:string,
  value?:any,
  onChange?:(e:any)=>void,
  children?:any
}
interface ContextProps {
  onChange?:(e:any)=>void,
  defaultValue?:any
}
export const choiceContext = React.createContext<ContextProps>({});
const RadioGroup = (props:RadioGroupProps) => {
  const {className,value,onChange,children} = props;
  //当前激活的value
  const [activeValue,setActiveValue] = useState(value?value:null);
  const classes = classNames('radio-group',className,{
  })

  //按钮激活点击
  const activedChange = (e:any) => {
    setActiveValue(e)
    onChange && onChange(e)
  }
  /**children配置 */
  const radioChild = () => {
    const res = React.Children.map(children,(item,index)=>{
      try{
        if(item?.type?.name!=='Radio') {
          throw new Error('error')
        }else{
          return React.cloneElement(item,{
            checked:item.props.value===activeValue,
            disabled:item.props.disabled===true,
            onChange:activedChange
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
    <choiceContext.Provider value={{onChange,defaultValue:value}}>
      <div className={classes}>
        {radioChild()}
      </div>
    </choiceContext.Provider>
    
  )
}
export default RadioGroup;