import http from './http-common';

class PropertiesService {
    login(data) {
        return http.post("/auth/admin-login", {"username":"admin","password":"1234"})
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
    getTopic(){
        return http.get("/topics")
    }
    createTopic(data, token) {
        return http.post("/admin/create-topic", JSON.stringify(data) , {headers: {'Authorization': "Bearer " + token}})
    }
    deleteTopic(data, token) {
        return http.delete("/admin/delete-topic" ,{ headers: {'Authorization': "Bearer " + token}, data : JSON.stringify(data)})
    }
}
export default new PropertiesService();