// Load Insert validation
const validateInsertProduct = require("../validation/insertProduct")

//Load Product Service
const productService = require("../services/productService")


//Find All product
module.exports.findAllProducts = async (req , res) => {

    const products = await productService.findAllproduct(req.body,res);

};

//Create and Save Product
module.exports.insertProduct = async (req, res) => {

    //validation
    const{errors , isValid } = validateInsertProduct(req.body);

    //check Validation
    if(isValid) {
        return res.status(400).json(errors);
    }

    const order = await productService.insertProduct(req.body , res);
    return res.json(order)

};
