var express = require('express');
var Goods = require("./goods.js")
var router = express.Router();
router.post("/goods/list",function(req,res){
    let page = req.body.page ||1;
    let size = req.body.size || 10;
    Goods.find({},function(err,data){
        if(err){
            return res.status(200).json({
                code:3000,
                flag:false,
                message:'server error'
            })
        }
        let count = data.length;
        Goods.find({}).skip((page-1)*parseInt(size)).limit(parseInt(size)).exec(function(err,goods){
            if(err){
                return res.status(200).json({
                    code:3000,
                    flag:false,
                    message:'server error,分页'
                })
            }
            return res.status(200).json({
                code:2000,
                flag:true,
                message:'查询成功',
                data:{
                    total:count,
                    rows:goods
                }
            })

        })
    })
})
module.exports= router