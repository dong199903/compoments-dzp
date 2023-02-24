import React, { useEffect, useState } from "react";
interface PaginationProps {
  pageSize?:number
  pageNumber?:number
  total?:number,
  leftText?:string,
  rightText?:string
  showQuickJumper?:boolean
  onChange?:(e:number)=>void
}
const Pagination = (props:PaginationProps={pageSize:10,pageNumber:1,total:0}) => {
  const {pageSize,pageNumber,total,onChange,showQuickJumper,leftText,rightText} = props;
  const [paginationPageSize,setPaginationPageSize] = useState(pageSize);//页面容量
  const [paginationPageNumber,setPaginationPageNumber] = useState(pageNumber);//页面当前编号
  const [paginationTotal,setPaginationTotal] = useState(total);//总数量
  const [totalPageSize,setTotalPageSize] = useState(0);//总页码
  useEffect(()=>{
    setTotalPageSize(Math.ceil(paginationTotal!/paginationPageSize!));
  },[paginationPageNumber])
  const initPage = () => {
    if(totalPageSize<=7) {
      return (
        Array(totalPageSize).fill(1).map((item,index)=>(
          <div 
            className={paginationPageNumber===(index+1)?"pagination_item pagination_item_actived":"pagination_item"} 
            key={index+Math.random()}
          >
            {index+1}
          </div>
        ))
      )
    }
    if(paginationPageNumber!<=4) {
      //前6个+省略+最后一个
      return (
        <>
           {
             Array(6).fill(1).map((item,index)=>(
              <div 
                className={paginationPageNumber===(index+1)?"pagination_item pagination_item_actived":"pagination_item"} 
                key={index+Math.random()}
              >
                {index+1}
              </div>
            ))
           }
           
            <div 
              className='pagination_simple'
              onClick={()=>{
                if(paginationPageNumber!+5>=totalPageSize) {
                  setPaginationPageNumber(totalPageSize);
                  onChange!(totalPageSize);
                }else {
                  setPaginationPageNumber(paginationPageNumber!+5);
                  onChange!(paginationPageNumber!+5);
                }
              }}
            >
              ...
            </div>
           
            <div 
              className={paginationPageNumber===(totalPageSize)?"pagination_item pagination_item_actived":"pagination_item"} 
              key={paginationPageNumber!+Math.random()}
            >
              {totalPageSize}
            </div>
        </>
      )
    }
    //第1个+省略+当前页码前后5个+省略+最后一个
    if(paginationPageNumber!>=5 && paginationPageNumber!<=totalPageSize-4) {
      return (
        <>
          <div
            className={paginationPageNumber===(1)?"pagination_item pagination_item_actived":"pagination_item"} 
            key={0+Math.random()}
          >
            1
          </div>
          <div 
            className='pagination_simple'
            onClick={()=>{
              if(paginationPageNumber!-5<=1) {
                setPaginationPageNumber(1);
                onChange!(1);
              }else {
                setPaginationPageNumber(paginationPageNumber!-5);
                onChange!(paginationPageNumber!-5);
              }
            }}
            >
              ...
          </div>
          {
            Array(5).fill(paginationPageNumber!-2).map((item,index)=>(
              <div
                className={paginationPageNumber===(item+index)?"pagination_item pagination_item_actived":"pagination_item"} 
                key={item-Math.random()}
              >
                {item+index}
              </div>
            ))
          }
          <div 
            className='pagination_simple'
            onClick={()=>{
              if(paginationPageNumber!+5>=totalPageSize) {
                setPaginationPageNumber(totalPageSize);
                onChange!(totalPageSize);
              }else {
                setPaginationPageNumber(paginationPageNumber!+5);
                onChange!(paginationPageNumber!+5);
              }
            }}
            >
              ...
          </div>
          <div
            className={paginationPageNumber===(totalPageSize)?"pagination_item pagination_item_actived":"pagination_item"} 
            key={totalPageSize-Math.random()}
          >
            {totalPageSize}
          </div>
        </>
      )
    }
    //展示第1个+省略+后6个
    return (
      <>
        <div
          className={paginationPageNumber===(1)?"pagination_item pagination_item_actived":"pagination_item"} 
          key={0+Math.random()}
        >
          1
        </div>
        <div 
          className='pagination_simple'
          onClick={()=>{
            if(paginationPageNumber!-5<=1) {
              setPaginationPageNumber(1);
              onChange!(1);
            }else {
              setPaginationPageNumber(paginationPageNumber!-5);
              onChange!(paginationPageNumber!-5);
            }
          }}
          >
            ...
        </div>
        {
          Array(6).fill(totalPageSize-5).map((item,index)=>(
            <div
              className={paginationPageNumber===(item+index)?"pagination_item pagination_item_actived":"pagination_item"} 
              key={item-Math.random()}
            >
             {item+index} 
            </div>
          ))
        }
      </>
    )
  }
  return (
    <div className='pagination'>
      <div 
        onClick={()=>{
          if(paginationPageNumber!==1)
          {
            setPaginationPageNumber(paginationPageNumber!-1);
            onChange!(paginationPageNumber!-1);
          }   
        }}
        className={paginationPageNumber===1?"pagination_left pagination_left_disabled":"pagination_left"}
      >
        {leftText}
      </div>
      {
        initPage()
      }
      <div
        className={paginationPageNumber===Math.ceil(paginationTotal!/paginationPageSize!)?"pagination_right pagination_right_disabled":"pagination_right"}
        onClick={()=>{
          if(paginationPageNumber!==Math.ceil(paginationTotal!/paginationPageSize!)) {
            setPaginationPageNumber(paginationPageNumber!+1);
            onChange!(paginationPageNumber!+1);
          } 
        }}
      >
       {rightText}
      </div>

      <div className="pagination_info">每页{paginationPageSize}条</div>
      {
        showQuickJumper && (
          <div className="pagination_jump">
            <span>跳至</span>
            <input type="text" onKeyDown={(e)=>{
              if(e.code==='Enter'){
                //获取输入的数字进行跳转
                if(Number(e.currentTarget?.value)>=1 && Number(e.currentTarget?.value)<=totalPageSize!) {
                  setPaginationPageNumber(Number(e.currentTarget?.value));
                }
              }
            }}/>
            <span>页</span>
          </div>
        )
      }
      
    </div>
  )
}
Pagination.defaultProps = {
  pageNumber:1,
  pageSize:10,
  total:0,
  showQuickJumper:false,
  leftText:'<',
  rightText:'>'
}
export default Pagination;