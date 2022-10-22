import { memo } from 'react';
import AvatarDefault from '../../assets/icon/AvatarDefault';

const Drawer = () => {
    const handleLogout = () => {
        
    }
    return(
        <>
            <div className='drawer-content-header'>
                <AvatarDefault width={86} height={86}/>
            </div>
            <div className='drawer-content-name'>
                <p>Vantoana2s</p>
            </div>
            <div className='drawer-content'>
                <div className='drawer-content-item'>
                    <div className='drawer-content-item-title'>
                        Họ và tên
                    </div>
                    <div className='drawer-content-item-content'>
                        Võ Văn Toàn
                    </div>
                </div>
                <div className='drawer-content-item'>
                    <div className='drawer-content-item-title'>
                        Số điện thoại
                    </div>
                    <div className='drawer-content-item-content'>
                        0213112333
                    </div>
                </div>
                <div className='drawer-content-item'>
                    <div className='drawer-content-item-title'>
                        Quyền hạn
                    </div>
                    <div className='drawer-content-item-content'>
                        Quản trị viên
                    </div>
                </div>
            </div>
            <div className='drawer-content-footer'>
                <div  className='drawer-content-footer-logout' onClick={handleLogout}>
                    Đăng xuất
                </div>
            </div>
        </>
    )
}
export default memo(Drawer)