import { Button, Input, Menu } from "antd";
import React, { useState, useEffect } from "react";
import Logo from "./../../assets/icon/Logo";
import { getToken, saveToken } from './../../libs/common';
import PropertiesService from "../../services/properties.service"

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Quản lý bài viết", "sub1", [
    getItem("Xem danh sách bài viết đã duyệt", "1"),
    getItem("Xem danh sách bài viết đợi duyệt", "2"),
    getItem("Xem danh sách báo cáo", "3"),
  ]),
  getItem("Quản lý người dùng", "sub2", [
    getItem("Xem danh sách người dùng", "4"),
    getItem("Xem danh sách cấm", "5"),
    getItem("Xem danh sách báo cáo", "6"),
  ]),
  getItem("Xem danh sách phản hồi", "sub3"),
  getItem("Tạo báo cáo", "sub4"),
]; // submenu keys of first level

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const LeftMenu = ({ mode, setTab, setKey }) => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const [token, setToken] = useState(getToken());
  const [data, setData] = useState(getToken());

  const handleLogin = () => {
    PropertiesService.login(data).then(() => saveToken(data.data.token))
  }
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const onClick = ({ key }) => {
    if(key !== "undefined"){
      setKey(key);
    }
    if (key <= 3) {
      setTab("sub1");
    } else if (key <= 6) {
      setTab("sub2");
    } else {
      setTab(key);
    }
  };
  const onChangeInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  } 
  return (
    <>
      <div className="logo">
        <Logo />
      </div>
      {
        token ? <Menu
        mode={mode}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={onClick}
        theme={"dark"}
        style={{
          width: 256,
        }}
        items={items}
      />:
      (
        <>
          <div className="login-title">Đăng nhập</div>
          <Input placeholder="Nhập tên đăng nhập" name="email" onChange={onChangeInput}/>
          <Input.Password placeholder="Nhập mật khẩu" name={"password"} type="password" onChange={onChangeInput}/>
          <br/>
          <Button onClick={handleLogin}>
            Đăng nhập
          </Button>
        </>
      )
      }
    </>
  );
};

export default LeftMenu;
