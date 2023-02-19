import React,{createContext,useState} from 'react';

import classNames from 'classnames';
type mode = 'horizontal' | 'vertical'//方向
interface MenuProps {
  className?:string
  children?:React.ReactNode
  defaultIndex?:number//激活的索引
  style?:React.CSSProperties//css样式
  mode?:mode//方向
  onSelect?:(index:number)=>void//选中时的回调函数
}

interface ContextProps {
  index?:number,
  onSelect?:(index:number)=>void,
  mode?:mode
}

export const contextMenuItem = createContext<ContextProps>({})
const Menu = (props:MenuProps) => {
  const { className,children,defaultIndex,style,mode,onSelect } = props;
  const [choiceIndex,setChoiceIndex] = useState<number>(defaultIndex?defaultIndex:1);

  /**点击item触发的回调函数 */
  const clickMenuItem = (index:number) => {
    console.log('index',index);
    setChoiceIndex(index);
    if(onSelect) onSelect(index);
  }
  const classes = classNames('menu',className,{
    'menu-horizontal':'horizontal'===mode,
    'menu-vertical':'vertical'===mode
  })
  const findIndexMenu = (index:number) => {
    //<=index实际的item个数
    let num = 0;
    React.Children.forEach(children,(item:any,idx:number)=>{
      if(idx<=index && item && (item?.type?.name==='MenuItem' || item?.type?.name==='SubMenu') ){
        num++;
      }
    })
    return num;
  }
  let MunuItemProps = () => {
    //1.如果存在一个非item类型提示错误，正常显示
    let errorType:boolean = false;
    const resNodeItem = React.Children.map(children,(item:any,index)=>{
      if(item && (item?.type?.name==='MenuItem' || item?.type?.name==='SubMenu')) {
        let idx = findIndexMenu(index);
        return React.cloneElement(item,{
          index:idx
        })
      }
      errorType = true;
      return item;
    })
    if(errorType) console.error('子类似必须是menu-item或sub-menu');
    return resNodeItem;
  }
  return (
    <div
      className={classes}
      style={style}
    >
      <contextMenuItem.Provider value={{index:choiceIndex,onSelect:clickMenuItem,mode:mode}}>
        {MunuItemProps()}
      </contextMenuItem.Provider>
     
    </div>
  )
}

Menu.defaultProps = {
  defaultIndex:1,
  mode:'horizontal'
}
export default Menu;
