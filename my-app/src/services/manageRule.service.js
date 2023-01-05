import http, { approve, formDataHttp } from "./http-common";

class ManageRuleService {
    getImageClass (){
        return approve.get('/images/get-class-list');
    }
    changeStatusImageClass (data) {
        return approve.post('/images/change-class-status', JSON.stringify(data));
    }
    getStatusCopyleak ( ){
        return approve.get('/copyleaks/check-status');
    }
    changeStatusCopyleaks (data) { 
        return approve.post('/copyleaks/manage-check', JSON.stringify(data))
    }
}
export default new ManageRuleService(); 