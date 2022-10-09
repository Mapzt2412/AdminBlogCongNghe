import MainLayout from "../MainLayout/MainLayout.js"
import Content from "./Content.js";
import LeftMenu from "../LeftMenu/LeftMenu.js";
import HeaderContent from "../HeaderContent/HeaderContent.js";
import { useState } from 'react';

const Home = () => {
    const [tab, setTab] = useState(1);
    console.log(tab)
    return <>
        <MainLayout leftMenu={<LeftMenu mode={"inline"} setTab={setTab}/>} contentHeader={<HeaderContent tab={tab}/>} content={<Content />} />
    </>
} 

export default (Home)