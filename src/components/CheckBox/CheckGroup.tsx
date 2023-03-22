import React,{ useState } from "react";
import classNames from "classnames";
interface CheckGroupProps {
  className?:string,
  children?:React.ReactNode,
  value?:any[]//默认选中的数据
  onChange?:(e:any)=>void
}
const Check = (props:CheckGroupProps) => {
  const {className,children,value,onChange} = props;
  const [activeChoices,setActiveChoices] = useState(value?value:[]);//当前选中
  const classes = classNames('check',className);


  //点击check回调,拿到子元素
  const checkClick = (val:any,isChoice:boolean) => {
    console.log('val',val);
    //如果是ture,移出,否则添加
    let tmp = [...activeChoices];
    if(isChoice) {
      if(tmp.includes(val)) {
        let index = tmp.indexOf(val);
        tmp.splice(index,1);
      }
    }else{
      tmp.push(val);
    }
    onChange && onChange(tmp);
    setActiveChoices(tmp);
  }
  const checkChild = () => {
    let res = React.Children.map(children,(item:any)=>{
      if(item?.type?.name!=='Check') {
        console.error('子元素必须是Check组件');
        return null;
      }
      else{
        const val = item.props.value;//
        //如果本身是checked，添加数组
        const isChoice = activeChoices.includes(val);
        return React.cloneElement(item,{
          disabled:item.props.disabled,
          checked:isChoice,
          onChange:checkClick
        })
      }
    })
    return res;
  }
  return (
    <div className={classes}>
      {checkChild()}
    </div>
  )
}
export default Check;