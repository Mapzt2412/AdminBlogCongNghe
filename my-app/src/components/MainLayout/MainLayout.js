import Content from "../Home/Content.js";

const MainLayout = ({leftMenu, contentHeader, content}) => {
    return <>
        <div className="main-layout">
            <div className="left-menu">
                <p>hello</p>
            </div>
            <div className="main-layout-content">
                <div className="content-header">
                    <p>Hello</p>
                </div>
                <div className="content">
                    <Content />
                </div>
            </div>
        </div>
    </>
}

export default (MainLayout)
