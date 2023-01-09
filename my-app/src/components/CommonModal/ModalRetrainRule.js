import { memo, useState } from "react";
import { Modal } from "antd";
import propertiesService from "../../services/properties.service";

const ModalRetrainRule = ({ isModalVisible, setIsModalVisible, classRetrain }) => {
    const [file, setFile] = useState();
    const handleFileSelected = (e)  => {
        const files = Array.from(e.target.files)
        setFile(files)
      }
    //   console.log(file)
    const onOk = () => {
        console.log({
            className: classRetrain,
            upload: file[0],
        })
        propertiesService.retrainClass({
            className: classRetrain,
            upload: file[0],
        })
        setIsModalVisible(false)
    };
    const onCancel = () => {
        setIsModalVisible(false)
    };
    return (
        <Modal title={"Cập nhật dữ liệu"} open={isModalVisible} onOk={onOk} onCancel={onCancel}> 
            <div>Tên tập dữ liệu: {classRetrain}</div>
            <div>Chọn tập dữ liệu mới cần thay đổi</div>
            <input type="file" onChange={handleFileSelected}/>
        </Modal>
    )
}
export default memo(ModalRetrainRule)