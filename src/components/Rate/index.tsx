import React,{useEffect, useState} from "react";
import classNames from 'classnames';
interface intefaceProps{
  className?:string
  defaultValue?:number
  value?:number
  onChange?:(e:number)=>void
  count?:number
  disabled:boolean
  allowHalf?:boolean
}
const Rate = (props:intefaceProps) => {
  const {
    className,
    defaultValue,
    value,
    count,
    disabled,
    onChange,
    allowHalf
  } = props;
  const [currentIndex,setCurrentIndex] = useState(value || 1);//选择的评分
  const [moveIndex,setMoveIndex] = useState(0);//移动时的评分
  const [lastIndex,setLastIndex] = useState(0);//实时展示的评分
  useEffect(()=>{
    if(moveIndex>0) setLastIndex(moveIndex);
    else {
      setLastIndex(currentIndex);
    }
  },[currentIndex,moveIndex])
  //移入评分组件start
  const onMouseEnterRate = (e:any) => {
    if(disabled) return ;
    setMoveIndex(e);
  }
  //移出评分组件start
  const onMounseLeaveRate = () => {
    if(disabled) return ;
    setMoveIndex(0)
  }
  const classes = classNames('rate',className);
  return (
    <div className={classes}>
      {
        new Array(count).fill(1).map((item,index)=>(
          <i 
            className={index<=lastIndex-1 ?"iconfont icon-pingfen-xing icon-actived":"iconfont icon-pingfen-xing"}
            key={index}
            onMouseEnter={()=>{
              if(disabled) return ;
              onMouseEnterRate(index+1);
            }}
            onMouseLeave={onMounseLeaveRate}
            onClick={()=>{
              if(disabled) return ;
              setCurrentIndex(index+1);
              onChange && onChange(index+1);
            }}
          >
          </i>
        ))
      }
    </div>
  )
}
Rate.defaultProps = {
  count:5,
  disabled:false
}
export default Rate;