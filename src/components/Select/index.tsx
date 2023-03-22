import React,{useState,useRef, useEffect} from "react";
import classNames from "classnames";
interface selectProps {
  defaultValue?:string|string[]|number|number[],
  className?:string
  options?:Array<any>,
  onChange?:(e:any)=>void,
  mode?:string,
  children?:React.ReactNode
}
const Select = (props:selectProps) => {
  const {
    defaultValue,
    className,
    options,
    onChange,
    mode
  } = props;
  const domRef = useRef<HTMLDivElement>(null);
  const [divHeight,setDivHeight] = useState(0);
  const [downModal,setDownModal] = useState(false);
  const [choiceItem,setChoiceItem] = useState<{label:any,value:any}>();
  const [muiltItems,setMuiltItems] = useState<any>([]);//多选模式
  const classes = classNames('select',className,{})
  

  //初始化选择列表（排除用户随意添加默认值）
  const initSelect = () => {
    if(mode==='tags') {
      options?.forEach(item=>{
        if(item.value===defaultValue) {
          setChoiceItem(item);
        }
      })
    }else{
      if(options) {
        if(Array.isArray(defaultValue)) {
          let tmp = [];
          for(let i=0;i<defaultValue.length;i++) {
            let val = options?.find(item=>item.value===defaultValue[i])
            if(val) tmp.push(val);
          }
          setMuiltItems(tmp);
        }else {
          let val = options?.find(item=>item.value===defaultValue)
          if(val) {
            setMuiltItems([val])
          }
        }
      }   
    }
  }
  useEffect(()=>{
    /** 监听是否点击非元素自身 */
    const handle = (e:MouseEvent) => {
      const isOutside = !domRef.current?.contains(e.target as Node);
      if(isOutside) setDownModal(false);
    }
    document.addEventListener('click',handle);
    /**初始化选择列表 */
    initSelect();

    //组件卸载时销毁全局监听事件
    return ()=>{
      document.removeEventListener('click',handle);
    } 
  },[])

  //动态计算盒子高度
  useEffect(()=>{
    setDivHeight(domRef.current?.offsetHeight!);
  },[muiltItems])


  //点击下拉列表
  const clickItems = (e:any,item:any) => {
    e.stopPropagation()//阻止冒泡，否则触发列表关闭
    if(mode === 'tags') {
      setDownModal(false);
      setChoiceItem(item);
      onChange && onChange(item.value)
    } else {
      //多选是数组,存在添加，否则删除
      let tmp:any = [...muiltItems]
      let isHave = false;
      for(let i=0;i<tmp.length;i++) {
        if(tmp[i]=== item) {
          tmp.splice(i,1);
          isHave = true;
          break;
        }
      }
      if(!isHave) tmp.push(item);
      setMuiltItems(tmp);
      onChange && onChange(tmp);
    }
  }
  //点击祖先元素
  const clickSelectBox = (e:any)=> {
    e.stopPropagation();
    setDownModal(!downModal);
  }
  //根据下拉状态动态绑定class
  const judgeSelectClassName = (item:any) => {
    if(mode==='tag' && item.value===choiceItem?.value) {
      if(item.disabled){
        return "select_list_item select_list_item_disabled";
      }else{
        return "select_list_item select_list_item_actived";
      }
    }
      
    if(mode==='multiple' && muiltItems.includes(item)){
      if(item.disabled){
        return "select_list_item select_list_item_disabled";
      }else{
        return "select_list_item select_list_item_actived";
      }
    }
      
    if(item.disabled) {
      return "select_list_item select_list_item_disabled";
    }
    else{
      return "select_list_item"
    }
  }
  return (
    <div 
      className={classes}
      onClick={clickSelectBox}
      ref={domRef}
    >
      <div className="select_box">
        {mode==='tags' && choiceItem && choiceItem?.value}
        {mode === 'multiple' && (
          <>
            {muiltItems && muiltItems?.length>0 && muiltItems.map((item:any)=>(
              <div className="select_muilt" key={item.value}>
                {item?.value}
                <span 
                  onClick={(e)=>{
                    //关闭
                    e.stopPropagation()
                    let tmp:any = [...muiltItems]
                    for(let i=0;i<tmp.length;i++) {
                      if(tmp[i]=== item) {
                        tmp.splice(i,1);
                        break;
                      }
                    }
                    setMuiltItems(tmp);
                    onChange && onChange(tmp);
                  }}
                >
                  x
                </span>
              </div>
            ))}
          </>
        )}
      </div>
      {
        <div className='select_list' style={{top:`${divHeight}px`}}>
          {downModal && options && options.length>0 && options.map(item=>(
          <div 
            className={judgeSelectClassName(item)}
            key={item.label}
            onClick={(e)=>{
              if(!item.disabled)
                clickItems(e,item)
            }}
          >
            {item.value}
          </div>
        ))}
        </div>
      }
    </div>
  )
}
Select.defaultProps = {
  mode:'tags',
  options:[]
}
export default Select;