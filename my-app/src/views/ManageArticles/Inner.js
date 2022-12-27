import { memo } from "react";
import Input from "antd/lib/input/Input";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import UploadFile from "../../components/UploadFile/UploadFile";
import ModalRetrainRule from "../../components/CommonModal/ModalRetrainRule";
import { Dropdown, Menu } from "antd";
import IconAction from "../../assets/icon/IconAction";

const Inner = ({ classList, addDataApprove, getData, deleteClass, disabledClass }) => {
  const [newData, setNewData] = useState({
    className: "",
    data: "",
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [classRetrain, setClassRetain] = useState("");
  const menu = (value) => (
    <Menu>
      <Menu.Item onClick={() => deleteClass(value.id)}>Xoá</Menu.Item>
      <Menu.Item onClick={() => handleDisabledClass(value)}>{value.banned ? 'Vô hiệu hoá' : 'Kích hoạt'}</Menu.Item>
      <Menu.Item onClick={() => handleRetrain(value.name)}>Retrain</Menu.Item>
      <Menu.Item onClick={() => getData(value.name)}>Tải dữ liệu</Menu.Item>
    </Menu>
  );
  const onChange = (e) => {
    setNewData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = () => {
    newData.data
      .split(";")
      .forEach((element) =>
        addDataApprove({ className: newData.className, data: element })
      );
  };
  const handleRetrain = (value) => {
    setIsModalVisible(true);
    setClassRetain(value);
  };
  const handleDisabledClass = (value) => {
    disabledClass({classId: value.id, status: !value.banned})
  }
  
  return (
    <>
      <div className="container">
        <div className="title">Danh sách các class trên hệ thống:</div>
        <ul>
          {classList?.map((value) => (
            <li>
              <div className="class-item">
                <div className="class-title">
                  {value.name} {!value.banned && "(Disabled)"}
                </div>
                <div className="class-button">
                  <Dropdown
                    overlay={() => menu(value)}
                  >
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
        <UploadFile />
      </div>
    </>
  );
};
export default memo(Inner);
