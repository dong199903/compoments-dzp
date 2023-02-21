import React,{ useState,useEffect } from "react";
import classNames from "classnames";
interface itemProps {
  key:string 
  label:string 
  content:React.ReactNode,
  disabled?:boolean
}
interface tabsProps {
  activeKey?:string//当前激活的key
  className?:string
  items?:itemProps[]
  tabPosition?:'left' | 'top'//tab的位置
  onTabClick?:(key:string,e:any)=>void
}
const Tabs = (props:tabsProps) => {
  const {
    className,
    items,
    activeKey,
    tabPosition,
    onTabClick
  } = props;
  const [activedContent,setActivedContent] = useState<any>();

  const [tabKey,setTabKey] = useState(activeKey?activeKey:items![0].key);
  useEffect(()=>{
    //get active content
    const idx:number = items!.findIndex(item=>{
      return item.key === tabKey;
    })
    if(idx===-1) {
      if(items!.length>0) setActivedContent(items![0]?.content);
      else setActivedContent(null);    
    } else {
      setActivedContent(items![idx]?.content)
    }
  },[tabKey,items])
  const classes = classNames('tabs',className,{
    [`tabs_${tabPosition}`]:tabPosition
  });
  return (
    <div 
      className={classes}
    >
      {/* tab list header */}
      <div className="tabs_list">
        
        {items?.map(item=>(
          <div 
            className={item?.disabled ? 'tabs_list_item_disabled':item.key===tabKey ? "tabs_list_item tabs_list_item_actived":"tabs_list_item" }
            key={item.key}
            onClick={(e)=>{
              if(!item.disabled) {
                setTabKey(item.key);
                onTabClick && onTabClick(item.key,e);
              }
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* content show */}
      <div className="tabs_content">
          {activedContent}
      </div>
    </div>
  )
}

Tabs.defaultProps = {
  items:[],
  tabPosition:'top'
}
export default Tabs;