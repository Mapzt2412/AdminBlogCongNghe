import http from './http-common';

class PropertiesService {
    login(data) {
        return http.post("/admin/login", JSON.stringify(data))
    }
    getArticle(token) {
        return http.get("/admin/list-articles",{headers: {'Authorization': "Bearer " + token}})
    }
    getUser(token) {
        return http.get("/admin/list-users",{headers: {'Authorization': "Bearer " + token}})
    }
    getListReportUser(token){
        return http.get("/admin/list-reports-user",{headers: {'Authorization': "Bearer " + token}}) 
    }
    getListReportArticle(token){
        return http.get("/admin/list-reports-article",{headers: {'Authorization': "Bearer " + token}}) 
    }
}
export default new PropertiesService();