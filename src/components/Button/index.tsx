import React from "react"
import classNames from "classnames"
interface ButtonProps {
  type:'primary' | 'danger'  | 'link' | 'default' //类型
  size:'large' | 'small' | 'middle' //尺寸
  classname:string //class
  disabled:Boolean //禁用选项
  children:React.ReactNode
  href:string //链接地址
}
type ButtonUnin = ButtonProps & React.BaseHTMLAttributes<HTMLElement> 
type ButtonUnion =ButtonUnin & React.AnchorHTMLAttributes<HTMLElement>
type ButtonPropsResult = Partial<ButtonUnion>
const Button = (props:ButtonPropsResult) => {
  const { type,size,classname,disabled,children,href,...resetProps } = props;
  const classes = classNames('btn',classname,{
    [`btn-${type}`]:type,
    [`btn-${size}`]:size,
    [`btn-disabled`]:disabled
  });
  if(type && type === 'link') {
    return (
      <a 
        {...resetProps} 
        href={href}>
        {children}
      </a>
    )
    
  }
  return (
    <button
      className={classes}
      {...resetProps}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  type: 'default',
  size: 'middle'
}
export default Button;