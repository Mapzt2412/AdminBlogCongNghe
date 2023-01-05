import { memo, useEffect } from "react";
import Input from "antd/lib/input/Input";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import ModalRetrainRule from "../../components/CommonModal/ModalRetrainRule";
import { Dropdown, Menu, Switch, Spin } from "antd";
import IconAction from "../../assets/icon/IconAction";
import io from "socket.io-client";

const socket = io(process.env.REACT_APP_APPROVE_API);

const Inner = ({
  classList,
  addDataApprove,
  getData,
  deleteClass,
  disabledClass,
  imageClassList,
  statusCopyleak,
  changeStatusImageClass,
  setStatusCopyleak,
  loadding,
}) => {
  const [newData, setNewData] = useState({
    className: "",
    data: "",
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [classRetrain, setClassRetain] = useState("");
  const menu = (value) => (
    <Menu>
      <Menu.Item onClick={() => deleteClass(value.id)}>Xoá</Menu.Item>
      <Menu.Item onClick={() => handleRetrain(value.name)}>Retrain</Menu.Item>
      <Menu.Item onClick={() => getData(value.name)}>Tải dữ liệu</Menu.Item>
    </Menu>
  );
  const menuImageClass = (value) => (
    <Menu>
      <Menu.Item
        onClick={() =>
          changeStatusImageClass({
            className: value.className,
            status: !value.banned,
          })
        }
      >
        {!value.banned ? "Cấm" : "Huỷ cấm"}
      </Menu.Item>
    </Menu>
  );
  const onChange = (e) => {
    setNewData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = () => {
    addDataApprove({
      className: newData.className,
      data: newData.data.split(";"),
    });
  };
  const handleRetrain = (value) => {
    setIsModalVisible(true);
    setClassRetain(value);
  };
  const handleDisabledClass = (value) => {
    disabledClass({ classId: value.id, status: !value.banned });
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const onChangeStatusCopy = () => {
    setStatusCopyleak(!statusCopyleak);
  };

  useEffect(() => {
    socket.on("trainingComplete", (data) => {
      console.log(data);
    });
    return () => {
      socket.off("trainingComplete");
    };
  }, []);

  return (
    <>
      {loadding ? (
        <div className="spin-container">
          <Spin size="large" />
        </div>
      ) : (
        <div className="container">
          <div className="content-item">
            <div className="title">Danh sách class phân loại hình ảnh:</div>
            <ul>
              {imageClassList?.map((value) => (
                <li>
                  <div className="class-item">
                    <div className="class-title">
                      {value.className} {value.banned && "(Cấm)"}
                    </div>
                    <div className="class-button">
                      <Dropdown overlay={() => menuImageClass(value)}>
                        <IconAction />
                      </Dropdown>
                      <ModalRetrainRule
                        isModalVisible={isModalVisible}
                        setIsModalVisible={setIsModalVisible}
                        classRetrain={classRetrain}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div
              className="link"
              onClick={() =>
                openInNewTab(
                  "https://teachablemachine.withgoogle.com/train/image/1uJ8yWvSOcdYURXytR_DBbJL1-oYVYPdp"
                )
              }
            >
              Link model phân loại hình ảnh
            </div>
          </div>
          <div className="content-item">
            <div className="title">Danh sách class :</div>
          </div>
          <div className="content-item">
            <div className="title">Danh sách các class trên hệ thống:</div>
            <ul>
              {classList?.map((value) => (
                <li>
                  <div className="class-item">
                    <div className="class-title">
                      {value.name} {!value.banned && "(Disabled)"}
                    </div>
                    <div className="class-button">
                      <Dropdown overlay={() => menu(value)}>
                        <IconAction />
                      </Dropdown>
                      <ModalRetrainRule
                        isModalVisible={isModalVisible}
                        setIsModalVisible={setIsModalVisible}
                        classRetrain={classRetrain}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <Input
              placeholder="Thêm class mới"
              value={newData.className}
              onChange={onChange}
              name="className"
            />
            <TextArea
              rows={4}
              placeholder="Nhập vào tập dữ liệu bị cấm. Mỗi chữ cách nhau bởi dấu ';'"
              name="data"
              onChange={onChange}
              value={newData.data}
            />
            <button onClick={onSubmit}>Lưu</button>
          </div>
          <div className="content-item">
            <div className="title">
              Kiểm tra bản quyền:{" "}
              {
                <Switch
                  checked={statusCopyleak}
                  onChange={onChangeStatusCopy}
                />
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default memo(Inner);
