const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo');

module.exports = mongoose.model('Good', {
    goodsName: String,

    goodsType: String,
    money: String,
    stockNum: String,

    supplier: String,

    warehousTime: String
});

