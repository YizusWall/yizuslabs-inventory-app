// Import product model
Product = require('../models/Product');// Handle index actions

// Handle index actions
exports.index = function (req, res) {
    Product.get(function (err, products) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Products retrieved successfully",
            data: products
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var product = new Product();
    product.ProductID=req.body.ProductID ? req.body.ProductID : product.ProductID;  
    product.TypeCode=req.body.TypeCode;
    product.Category=req.body.Category;
    product.Name=req.body.Name;
    product.Description=req.body.Description;
    product.SupplierID=req.body.SupplierID;
    product.MeasureUnit=req.body.MeasureUnit;
    product.WeightUnit=req.body.WeightUnit;
    product.CurrencyCode=req.body.CurrencyCode;
    product.Price=req.body.Price
// save the contact and check for errors
    product.save(function (err) {
        if (err) res.json(err);
        else
            res.json({
                message: 'New product created!',
                data: product
            });
    });
};

// Handle view product info
exports.view =  function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
        res.json({
            message: 'Product details loading..',
            data: product
        });
    });
};
// Handle update product info
exports.update =  function (req, res) {
        
    Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
        product.ProductID=req.body.ProductID ? req.body.ProductID : product.ProductID;  
        product.TypeCode=req.body.TypeCode;
        product.Category=req.body.Category;
        product.Name=req.body.Name;
        product.Description=req.body.Description;
        product.SupplierID=req.body.SupplierID;
        product.MeasureUnit=req.body.MeasureUnit;
        product.WeightUnit=req.body.WeightUnit;
        product.CurrencyCode=req.body.CurrencyCode;
        product.Price=req.body.Price
        // save the product and check for errors
        product.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Product Info updated',
                data: product
            });
        });
    });

};
// Handle delete product
exports.delete =  function (req, res) {
    Product.remove({
        _id: req.params.product_id
    }, function (err, product) {
        if (err) res.send(err);
        else
            res.json({
                status: "success",
                message: 'product deleted'
            });
    });

};

