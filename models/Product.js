const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    ProductID: {type: String, unique:true},
    TypeCode:String,
    Category:String,
    Name:String,
    Description:String, 
    SupplierID:String,
    MeasureUnit:String,
    WeightUnit:Number,
    CurrencyCode:String,
    Price:Number,
    create_date: {
        type: Date,
        default: Date.now
    }    
})

const Product =module.exports = mongoose.model('product', productSchema)

module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}