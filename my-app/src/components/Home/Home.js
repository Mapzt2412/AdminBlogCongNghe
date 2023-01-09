import MainLayout from "../MainLayout/MainLayout.js";
import Content from "./Content.js";
import LeftMenu from "../LeftMenu/LeftMenu.js";
import HeaderContent from "../HeaderContent/HeaderContent.js";
import { useState, useCallback } from "react";
import { useEffect } from "react";
import propertiesService from "../../services/properties.service.js";
import { getToken } from "./../../libs/common";
import { Context } from "./Context.js";

const Home = () => {
  const [tab, setTab] = useState("sub1");
  const [key, setKey] = useState("1");
  const [data, setData] = useState([]);
  const [pageNum, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [reload, setReload] = useState(false);
  const handleChangePage = useCallback((value) => {
    console.log(value);
    setPage(value);
  }, []);
  const handleReload = useCallback(() => {
    console.log("ngu");
    setReload((pre) => !pre);
  }, []);
  useEffect(() => {
    setPage(1);
  }, [key]);
  const getArticles = useCallback(() => {
    propertiesService.getArticle(getToken(), pageNum).then((data) => {
      setData(data.data.data);
      setTotalPages(data.data.totalPage);
    });
  }, [pageNum]);

  const getListReportUser = useCallback(() => {
    propertiesService.getListReportUser(getToken(), pageNum).then((data) => {
      setData(data.data.data);
      setTotalPages(data.data.totalPage);
    });
  }, [pageNum]);

  const getListReportArticle = useCallback(() => {
    propertiesService.getListReportArticle(getToken(), pageNum).then((data) => {
      setData(data.data.data);
      setTotalPages(data.data.totalPage);
    });
  }, [pageNum]);

  const getUser = useCallback(() => {
    propertiesService.getUser(getToken(), pageNum).then((data) => {
      setTotalPages(data.data.totalPage);
      setData(data.data.data);
    });
  }, [pageNum]);
  const getBanUser = useCallback(() => {
    propertiesService.getBanUser(getToken(), pageNum).then((data) => {
      setData(data.data.data);
      setTotalPages(data.data.totalPage);
    });
  }, [pageNum]);
  const getTopics = useCallback(() => {
    propertiesService.getTopic().then((data) => setData(data.data.data));
  }, []);
  const getListFeedback = useCallback(() => {
    propertiesService
      .getListFeedback(getToken())
      .then((data) => setData(data.data.data));
  }, []);
  useEffect(() => {
    if (getToken()) {
      if (key === "1") {
        getArticles();
      } else if (key === "6") {
        getListReportUser();
      } else if (key === "3") {
        getListReportArticle();
      } else if (key === "4") {
        getUser();
      } else if (key === "5") {
        getBanUser();
      } else if (key === "sub3") {
        getTopics();
      } else if (key === "sub4") {
        getListFeedback();
      }
    }
  }, [
    getArticles,
    getBanUser,
    getListFeedback,
    getListReportArticle,
    getListReportUser,
    getTopics,
    getUser,
    key,
    pageNum,
    reload,
  ]);
  return (
    <Context.Provider
      value={{
        pageNum,
        totalPages,
        handleChangePage,
        handleReload,
      }}
    >
      <MainLayout
        leftMenu={<LeftMenu mode={"inline"} setTab={setTab} setKey={setKey} />}
        contentHeader={<HeaderContent tab={tab} />}
        content={<Content data={data} page={key} />}
      />
    </Context.Provider>
  );
};

export default Home;
