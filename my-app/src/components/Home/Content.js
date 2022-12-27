import { Input, Space, Table, Tag } from "antd";
import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import { Image } from "antd";
import {
  columnsArticle,
  columnsUser,
  columnsArticleReport,
  columnsTopics,
} from "../../libs/commonConstant";
import { Spin, Pagination  } from "antd";
import propertiesService from "../../services/properties.service";
import { getToken } from './../../libs/common';
import ManageArticles from '../../views/ManageArticles/index';

const Content = ({ data, page }) => {
  const [loading, setLoading] = useState(false);
  const [dataTable, setDataTable] = useState(data);
  const [columns, setColumns] = useState(columnsArticle);
  const [topic, setTopic] = useState("");
  const heightTable = window.innerHeight - 108 - 55;
  const widthTable = window.innerWidth - 276;
  const handleChangeTopic = (e) => {
    setTopic(e.target.value);
  };
  const handleClick = useCallback((type, data) => {
    if(type === "deleteTopic"){
      propertiesService.deleteTopic({ topicId: data}, getToken()).then((data) => setDataTable(pre => pre?.filter(value => value.id !== data)))
    }else if(type === "handleReport"){
      propertiesService.handleReportArticle({ reportId  : data}, getToken()).then((data) => console.log(data))
    }else if(type === "banUser"){
      propertiesService.banUser({userId: data , status:""}, getToken()).then((data) => alert("Cấm người dùng thành công"))
    }else if(type === "hideArticle"){
      propertiesService.hideArticle({articleId : data , status:""}, getToken()).then((data) => alert("Ẩn bài viết thành công"))
    }
  },[])
  useEffect(() => {
    setLoading(true);
    if (page === "1") {
      setColumns(columnsArticle(handleClick));
    } else if (page === "6" || page === "4" || page === "5") {
      setColumns(columnsUser(handleClick));
    } else if (page === "3") {
      setColumns(columnsArticleReport(handleClick));
    } else if (page === "sub3") {
      setColumns(columnsTopics(handleClick));
    }
  }, [handleClick, page]);
  useEffect(() => {
    console.log("change");
    console.log(data)
    if (data) {
      setDataTable(data);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if( page === 'sub6'){
      setLoading(false);
    }
  },[page])
  const handleSubmit = (e) => {
    if(e.keyCode === 13) {
      propertiesService.createTopic({topicName: topic} , getToken()).then((data) => setDataTable(pre => [...pre, data.data.data]))
    }
  }
  return (
    <div className="content-container">
      {page === "sub3" && (
        <div className="content-input">
          <Input
            placeholder="Thêm topic mới"
            value={topic}
            onChange={handleChangeTopic}
            onKeyDown={handleSubmit}
          />
        </div>
      )}
      {loading ? (
       <div className="spin-container">
        <Spin  size="large"/>
       </div>
      ) : (
        page === 'sub6' ? <>
            <ManageArticles/>
        </> : <>
        <Table columns={columns} dataSource={dataTable} columnWidth={100} pagination={false}/>
        <div className="pagination-table">
          <Pagination defaultCurrent={1} total={50} />
        </div>
        </>
      )}
    </div>
  );
};

export default Content;
