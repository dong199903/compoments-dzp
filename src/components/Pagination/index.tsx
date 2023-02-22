import React, { useEffect, useState } from "react";
interface PaginationProps {
  pageSize?:number
  pageNumber?:number
  total?:number,
  showQuickJumper?:boolean
  onChange?:(e:number)=>void
}
const Pagination = (props:PaginationProps={pageSize:10,pageNumber:1,total:0}) => {
  const {pageSize,pageNumber,total,onChange,showQuickJumper} = props;
  const [paginationPageSize,setPaginationPageSize] = useState(pageSize);//页面容量
  const [paginationPageNumber,setPaginationPageNumber] = useState(pageNumber);//页面当前编号
  const [paginationTotal,setPaginationTotal] = useState(total);//总数量
  const [totalPageSize,setTotalPageSize] = useState(0);//总页码
  useEffect(()=>{
    console.log(paginationPageSize,paginationPageNumber,paginationTotal)
    setTotalPageSize(Math.ceil(paginationTotal!/paginationPageSize!));
  },[paginationPageNumber])
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
        {'<'}
      </div>
      {
        totalPageSize>0 && Array(totalPageSize).fill(1).map((item,index)=>(
          <div 
            className={paginationPageNumber===(index+1)?"pagination_item pagination_item_actived":"pagination_item"} 
            key={index}
          >
            {index+1}
          </div>
        ))
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
        {'>'}
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
  showQuickJumper:false
}
export default Pagination;