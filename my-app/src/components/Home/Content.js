import { Input, Table } from "antd";
import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import useHomeContext from "./Context";
import {
  columnsArticle,
  columnsUser,
  columnsArticleReport,
  columnsTopics,
  columnsUserReport,
} from "../../libs/commonConstant";
import { Spin, Pagination } from "antd";
import propertiesService from "../../services/properties.service";
import { getToken } from "./../../libs/common";
import ManageArticles from "../../views/ManageArticles/index";
import ModalUpdateTopic from "../CommonModal/ModalUpdateTopic";

const Content = ({ data, page }) => {
  const [loading, setLoading] = useState(false);
  const [dataTable, setDataTable] = useState(data);
  const [columns, setColumns] = useState(columnsArticle);
  const [topic, setTopic] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { totalPages, pageNum, handleChangePage, handleReload } =
    useHomeContext();

  const [id, setId] = useState("");
  const handleChangeTopic = (e) => {
    setTopic(e.target.value);
  };
  const handleClick = useCallback((type, data) => {
    if (type === "deleteTopic") {
      setId(data);
      setIsModalVisible(true);
    } else if (type === "handleReport") {
      propertiesService
        .handleReportArticle({ reportId: data }, getToken())
        .then((data) => console.log(data));
    } else if (type === "banUser") {
      propertiesService
        .banUser({ userId: data, status: "ban" }, getToken())
        .then((data) => {
          alert("Cấm người dùng thành công");
          handleReload();
        });
    } else if (type === "unBanUser") {
      propertiesService
        .banUser({ userId: data, status: "unban" }, getToken())
        .then((data) => {
          alert("Bỏ cấm người dùng thành công");
          handleReload();
        });
    } else if (type === "hideArticle") {
      propertiesService
        .deleteArticle({ articleId: data }, getToken())
        .then((data) => alert("Xoá bài viết thành công"));
    }
  }, [handleReload]);

  useEffect(() => {
    setLoading(true);
    if (page === "1") {
      setColumns(columnsArticle(handleClick));
    } else if (page === "4" || page === "5") {
      setColumns(columnsUser(handleClick));
    } else if (page === "3") {
      setColumns(columnsArticleReport(handleClick));
    } else if (page === "sub3") {
      setColumns(columnsTopics(handleClick));
    } else if (page === "6") {
      setColumns(columnsUserReport(handleClick));
    }
  }, [handleClick, page]);
  useEffect(() => {
    if (data) {
      setDataTable(data);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (page === "sub6") {
      setLoading(false);
    }
  }, [page]);
  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      propertiesService
        .createTopic({ topicName: topic }, getToken())
        .then((data) => setDataTable((pre) => [...pre, data.data.data]));
    }
  };
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
          <Spin size="large" />
        </div>
      ) : page === "sub6" ? (
        <>
          <ManageArticles />
        </>
      ) : (
        <>
          <Table
            columns={columns}
            dataSource={dataTable}
            columnWidth={100}
            pagination={false}
          />
          {totalPages && (
            <div className="pagination-table">
              <Pagination
                current={pageNum}
                onChange={(e) => {
                  handleChangePage(e);
                  setLoading(true);
                }}
                pageSize={10}
                total={totalPages * 10}
              />
            </div>
          )}
        </>
      )}
      <ModalUpdateTopic
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        id={id}
      />
    </div>
  );
};

export default Content;
