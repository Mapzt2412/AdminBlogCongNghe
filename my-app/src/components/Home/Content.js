import { Space, Table, Tag } from 'antd';
import React from 'react';
import { useEffect, useState } from 'react';
import { Image } from 'antd';
import { columnsArticle, columnsUser, columnsArticleReport } from '../../libs/commonConstant';


const Content = ({data, page}) => {
  const [dataTable, setDataTable] = useState(data)
  const [columns, setColumns] = useState(columnsArticle);

  useEffect(() =>{
      if(page === "1" ){
        setColumns(columnsArticle);
      }else if(page === "6" || page === "4" ){
        setColumns(columnsUser);
      }else if(page === "3" ){
        setColumns(columnsArticleReport)
      }
  },[page])
  console.log(dataTable)
  useEffect(() =>{
    if(data){
      setDataTable(dataTable);
    }
},[data])
  return (
    <div className='content-container'>
      <Table columns={columns} dataSource={dataTable} columnWidth={100}/>
    </div>
    
  )
}


export default Content;