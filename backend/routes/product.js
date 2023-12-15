const Product= require("../models/Product.js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();


router.post("/" , async(req , res)=>{
    const newProduct = new Product(req.body)

    try{
        const savedProduct=await newProduct.save();
        res.status(200).json(savedProduct);

    }catch(err){
        res.status(500).json(err);
    }


})


// update the product
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //delete method;

router.delete("/:id " ,verifyTokenAndAdmin, async(req , res )=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted succesfuly ");

    }catch(err){
        res.status(500).json(err);

    }

});

// //get product method

router.get("/find/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// //GET ALL PRODUCT;
router.get("/",  async (req, res) => {
    const qNEW = req.query.new;
    const qCategory = req.query.category;
    try {
        let products ;
        if(qNEW){
            products=await Product.find().sort({createdAt:-1 }).limit(1);
        }else if(qCategory){
            products = await Product.find({
                categories:{
                    $in:[qCategory],
                },
            });
        }else{
            products=await Product.find();
        }
        res.status(200).json(products);
      
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;


