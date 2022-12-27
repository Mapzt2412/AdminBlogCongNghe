import { memo, useState } from "react";
import { Modal } from "antd";
import UploadFile from "../../components/UploadFile/UploadFile";
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
    };
    const onCancel = () => {
        setIsModalVisible(false)
    };
    console.log(isModalVisible)
    return (
        <Modal open={isModalVisible} onOk={onOk} onCancel={onCancel}> 
            <div>{classRetrain}</div>
            <input type="file" onChange={handleFileSelected}/>
        </Modal>
    )
}
export default memo(ModalRetrainRule)