import { message } from "antd";

export const saveToken = (token) => {
    if (typeof window !== 'undefined') {
        console.log("ngu")
    localStorage.setItem('token', token)
    window.location.reload();
    }
}
export const deleteToken = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        window.location.reload();
    }
}

export const getToken = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if(token){
            return token
        }
        return false
    }
}
export const handleError = (content) => {
    if (content === "jwt expired") {
      deleteToken();
      message.warn("Vui lòng đăng nhập lại");
      return;
    }
    message.error(content);
  };