import { memo, useState, useCallback } from "react";
import { Modal, Input } from "antd";
import propertiesService from "../../services/properties.service";
import { getToken } from "../../libs/common";
import useHomeContext from "../Home/Context";

const ModalUpdateTopic = ({ isModalVisible, setIsModalVisible, id, setPermissionScore }) => {
  const { handleReload } = useHomeContext();
  const [name, setName] = useState("");
  const onChange = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const onOk = () => {
    if (setPermissionScore) {
      setPermissionScore(name)
    } else {
      propertiesService
        .updateTopic({ newName: name, topicId: id }, getToken())
        .then(() => {
          handleReload();
          alert("Cập nhật thành công");
        });
    }

    setIsModalVisible(false);
  };
  const onCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      title={setPermissionScore ? "Cập nhật" : "Đổi tên topic"}
      open={isModalVisible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Input value={name} onChange={onChange} />
    </Modal>
  );
};
export default memo(ModalUpdateTopic);
