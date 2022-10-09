import MainLayout from "../MainLayout/MainLayout.js"
import Content from "./Content.js";
import LeftMenu from "../LeftMenu/LeftMenu.js";
import HeaderContent from "../HeaderContent/HeaderContent.js";
import { useState } from 'react';
import { useEffect } from 'react';
import propertiesService from "../../services/properties.service.js";
import { getToken } from './../../libs/common';

const Home = () => {
    const [tab, setTab] = useState("sub1");
    const [key, setKey] = useState("1");
    const [data, setData] = useState([]);
    useEffect(() => {
        if(getToken()){
            if(key === "1"){
                propertiesService.getArticle(getToken()).then((data) => setData(data.data.data))
            }else if(key === "6"){
                propertiesService.getListReportUser(getToken()).then((data) => setData(data.data.data))
            }
            else if(key === "3"){
                propertiesService.getListReportArticle(getToken()).then((data) => {
                    for( let i =0 ; i < data.data.data?.length; i++){
                        setData([...data, {...data.data.data.articleInfo , type:data.data.data[i].type, descriptionReport:data.data.data[i].description}])
                    }
                })
            }else if(key === "4"){
                propertiesService.getUser(getToken()).then((data) => setData(data.data.data))
            }
        }
        
    },[key])    
    return <>
        <MainLayout leftMenu={<LeftMenu mode={"inline"} setTab={setTab} setKey={setKey}/>} contentHeader={<HeaderContent tab={tab}/>} content={<Content data={data}  page={key}/>} />
    </>
} 

export default (Home)