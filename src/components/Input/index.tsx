import React,{
  ChangeEvent,
  InputHTMLAttributes
} from "react";
import classNames from "classnames";
import _default from '../../../../../school/miniprogram_npm/tdesign-miniprogram/date-time-picker/locale/en';
export type InputSize = 'lg' | 'sm' | 'md';
interface inputProps{
  className?:string,
  prepend?:string|React.ReactElement
  append?:string|React.ReactElement
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  disabled?:boolean
  size?:string
}
type inputExtendProps = inputProps & Omit<InputHTMLAttributes<HTMLElement>, 'size' >

const Input = (props:inputExtendProps) => {
  const {
    className,
    prepend,
    append,
    disabled,
    size,
    ...reset
  } = props;
  const classes = classNames('input',{
    
  })
  //value与defaultValue不可以同时存在
  if(reset?.value) {
    delete reset?.defaultValue;
  }
  //受控组件传递的value是空，需要
  if(reset?.value===undefined || reset?.value===null)
    reset.value = ''
  return (
    <div className={classes}>
      {prepend && <div className="prepend">{prepend}</div>}
      <input 
        disabled={disabled}
        {...reset}
      />
      {Object.keys(reset).length}
      {append && <div className="append">{append}</div>}
    </div>
  )
}
Input.defaultProps = {
  disabled:false
}
export default Input;