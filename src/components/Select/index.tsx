import React,{useState,useRef, useEffect} from "react";
import classNames from "classnames";
interface selectProps {
  defaultValue?:string,
  className?:string
  options?:Array<any>,
  onChange?:()=>void,
}
const Select = (props:selectProps) => {
  const {
    defaultValue,
    className,
    options,
    onChange
  } = props;
  const domRef = useRef<HTMLDivElement>(null);
  const [divHeight,setDivHeight] = useState(0);
  const [downModal,setDownModal] = useState(false);
  const [choiceItem,setChoiceItem] = useState<{label:any,value:any}>();
  const classes = classNames('select',className,{})
  useEffect(()=>{
    /** 监听是否点击非元素自身 */
    setDivHeight(domRef.current?.offsetHeight!);
    const handle = (e:MouseEvent) => {
      const isOutside = !domRef.current?.contains(e.target as Node)
      if(isOutside) setDownModal(false)
    }
    document.addEventListener('click',handle);
    /**初始化选择 */
    options?.forEach(item=>{
      if(item.value===defaultValue) setChoiceItem(item);
    })
    return ()=>{
      document.removeEventListener('click',handle);
    } 
  },[])
  return (
    <div 
      className={classes}
      onClick={()=>{setDownModal(!downModal)}}
      ref={domRef}
    >
      <div className="select_box">
        {choiceItem && choiceItem?.value}
      </div>
      {
        downModal && options && options.length>0 && (
          <div className='select_list' style={{top:`${divHeight}px`}}>
            {options.map(item=>(
              <div 
                className='select_list_item' 
                key={item.label}
                onClick={()=>{
                  setChoiceItem(item)
                  onChange && onChange()
                }}
              >
                {item.value}
              </div>
            ))}
          </div>
        )
      }
    </div>
  )
}
export default Select;