// Load Insert validation
const validateInsertProduct = require("../validation/insertProduct")

//Load Product Service
const productService = require("../services/productService")


//Find All product
module.exports.findAllProducts = async (req , res) => {

    try {
        const products = await productService.findAllproduct();
        res.send(products)
    } catch (error) {
        res.status(400).send(error);
    }
};


//Find one Product
module.exports.findOneProduct =async (req, res) => {

    try {
        const product = await productService.findOneproduct(req.params.id, res);

    }catch (error) {
        res.status(400).send(error);

    }
};


//Create and Save Product
module.exports.insertProduct = async (req, res) => {

   // validation
    const {errors , isValid } = validateInsertProduct(req.body);

   // check Validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    try {
        const product = await productService.insertProduct(req.body);
        res.send(product)
    } catch (error) {
        res.status(400).send(error);
    }
};

// Update an Order identified by the id in the request
module.exports.updateProduct =async (req, res) => {

    //Validation
    const { errors, isValid } = validateInsertProduct(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    try {
        const order = await productService.updateProduct(req.params.id, req.body ,res);

    }catch (error) {
        res.status(400).send(error);
    }
};

module.exports.deleteProduct =async (req, res) => {

    try {
        const product = await productService.deleteProduct(req.params.id, res);

    }catch (error) {
        res.status(400).send(error);
    }
};
