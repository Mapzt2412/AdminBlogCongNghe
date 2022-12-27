import Inner from "./Inner";
import PropertiesService from "../../services/properties.service";
import { useState } from 'react';
import { useEffect } from 'react';
import FileDownload from 'js-file-download';

const ManageArticles = ( ) => {
    const [data, setData] = useState();
    const [classList, setClassList] = useState();
    const getData = (className) => {
        PropertiesService.getDataTextRule({
            className: className
        }).then((data) => {
            FileDownload(data.data, `${className}.txt`)
            setData(data.data.blob())
        })
    }
    const deleteClass = (id) => {
        PropertiesService.deleteClass(id).then((data) => {
            if(data.data.message === 'success'){
                getClasslist();
            }
        })
    }
    const getClasslist = () => {
        PropertiesService.getClasslist().then((data) =>{
            setClassList(data.data.data)
        })
    }
    const addDataApprove = (data) => {
        PropertiesService.postClassdata(data).then((data) => {
            if(data.data.message === 'success'){
                getClasslist();
            }
        })
    }
    const disabledClass = (data) => {
        PropertiesService.disabledClass(data).then((data) => {
            if(data.data.message === 'success'){
                getClasslist();
            }
        })
    }
    useEffect((
    ) => {
        getClasslist();
    },[])
    console.log(data)
    return (
        <Inner classList={classList} addDataApprove={addDataApprove} getData={getData} deleteClass={deleteClass} disabledClass={disabledClass}/>
    )
}
export default ManageArticles;