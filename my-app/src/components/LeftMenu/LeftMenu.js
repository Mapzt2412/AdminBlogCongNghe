import { Menu } from "antd";
import React, { useState } from "react";
import Logo from "./../../assets/icon/Logo";

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

const LeftMenu = ({ mode, setTab }) => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const onClick = ({ key }) => {
    if (key <= 3) {
      setTab("sub1");
    } else if (key <= 6) {
      setTab("sub2");
    } else {
      setTab(key);
    }
  };
  return (
    <>
      <div className="logo">
        <Logo />
      </div>
      <Menu
        mode={mode}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={onClick}
        theme={"dark"}
        style={{
          width: 256,
        }}
        items={items}
      />
    </>
  );
};

export default LeftMenu;
