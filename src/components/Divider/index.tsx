import React from "react";
import classNames from "classnames";
interface dividerProps {
  className?:string,
  type?:'horizontal' | 'vertical',//方向
  children?:React.ReactNode,
  dashed?:boolean,//是否虚线
  orientation?:'left'|'center'|'right'//文字内容
}
const Divider = (props:dividerProps)=> {
  const {className,type,children,dashed,orientation } = props;
  const classnames = classNames('divider',className,{
    [`divider-${type}`]:type,
    [`divider-dashed`]:dashed,
    [`divider-${orientation}`]:orientation,
  })
  if(type==='vertical' && children) console.error('vertical禁止添加children属性');
  console.log(children);
  return (
    <div className={classnames}>
      {
        'horizontal'===type && children && (
          <span className="divider-children">{children}</span>
        )
      }
    </div>
  )
}
Divider.defaultProps = {
  type:'horizontal',
  dashed:false,
  orientation:'center'
}
export default Divider;