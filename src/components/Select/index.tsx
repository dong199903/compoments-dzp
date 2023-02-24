import React,{useState,useRef, useEffect} from "react";
import classNames from "classnames";
interface selectProps {
  defaultValue?:string,
  className?:string
  options?:Array<any>,
  onChange?:()=>void,
}
const Select = (props:selectProps) => {
  /**
   * 1.搜索框内点击切换下拉列表
   * 2.搜索框外点击隐藏下拉列表
   * 3.
   */
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
    setDivHeight(domRef.current?.offsetHeight!);
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