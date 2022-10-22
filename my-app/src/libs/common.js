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