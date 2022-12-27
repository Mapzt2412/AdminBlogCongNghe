import { memo, useState } from "react";
import { Drawer } from "antd";
import AvatarDefault from "../../assets/icon/AvatarDefault";
import DrawerProfile from "../Drawer/DrawerProfile";
const HeaderContent = ({ tab }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="header-content-wrapper">
        <div className={"header-content-item " + (tab === "sub1" && "active")}>
          Quản lý bài viết
        </div>
        <div className={"header-content-item " + (tab === "sub2" && "active")}>
          Quản lý người dùng
        </div>
        <div className={"header-content-item " + (tab === "sub4" && "active")}>
          Xem danh sách phản hồi
        </div>
        <div className={"header-content-item " + (tab === "sub5" && "active")}>
          Tạo báo cáo
        </div>
        <div className={"header-content-item " + (tab === "sub6" && "active")}>
          Quản lý duyệt bài
        </div>
        <div className={"header-content-user "}>
          <div className="user-avatar" onClick={showDrawer}>
            <AvatarDefault />
          </div>
        </div>
      </div>
      <Drawer
        title="Thông tin cá nhân"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <button className="save"> Lưu </button>
        <DrawerProfile/>
      </Drawer>
    </>
  );
};
export default memo(HeaderContent);
