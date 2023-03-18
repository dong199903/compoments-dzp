import React,{useState,useRef, useEffect} from "react";
import classNames from "classnames";
interface selectProps {
  defaultValue?:string,
  className?:string
  options?:Array<any>,
  onChange?:()=>void,
  mode?:string
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
  /**
   * 单选模式
   * > 点击1个元素后，关闭下拉
   * > 选中的元素无法点击
   * 
   * 多选模式
   * > 可以持续点击多个元素
   * > 选中的元素可以点击取消
   */
  useEffect(()=>{
    /** 监听是否点击非元素自身 */
    console.log(domRef.current?.offsetHeight!)
    setDivHeight(domRef.current?.offsetHeight!);
    const handle = (e:MouseEvent) => {
      const isOutside = !domRef.current?.contains(e.target as Node);
      const itemClass = (e.target as HTMLElement)?.className
      if(isOutside && mode==='tags') setDownModal(false);
      if(isOutside && mode==='multiple' && itemClass!=='select_list_item') setDownModal(false);
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

  //点击下拉列表
  const clickItems = (e:any,item:any) => {
    e.stopPropagation()
    if(mode === 'tags') {
      setDownModal(false);
      setChoiceItem(item);
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
    }
    onChange && onChange()
  }
  //点击祖先元素
  const clickSelectBox = (e:any)=> {
    console.log(e.target.className)
    e.stopPropagation();
    setDownModal(!downModal);
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
            className='select_list_item' 
            key={item.label}
            onClick={(e)=>{
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
  mode:'tags'
}
export default Select;