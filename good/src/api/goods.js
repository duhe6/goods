import request from "../utils/request.js";
export default{
    getData(page,size){
        return request({
            url:'/goods/list',
            method:'post',
            data:{
                page,size
            }
        })
    }
}