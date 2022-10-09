
const MainLayout = ({leftMenu, contentHeader, content}) => {
    return <>
        <div className="main-layout">
            <div className="left-menu">
                { leftMenu }
            </div>
            <div className="main-layout-content">
                <div className="content-header">
                    { contentHeader }
                </div>
                <div className="content">
                    { content }
                </div>
            </div>
        </div>
    </>
}

export default (MainLayout)
