import Products from "../model/product.js"

export const addProduct = async(req,res)=>{
    const productName = req.body.name
    const available = await Products.findOne({name:productName})
    if(available){
        res.json({
            success:false,
            message:'Alreadt Exist'
        })
    }else{
        const newProduct = new Products({
            name:req.body.name,
            brand:req.body.brand,
            price:req.body.price,
            status:req.body.status
        })
        await newProduct.save()
        res.json({
            success:true,
            message:'successfully added'
        })
    }
}

export const fetchProducts = async (req,res)=>{
    const page = parseInt(req.query.page) || 1
    const pagesize = parseInt(req.query.pageSize) || 10

    try {
        const products = await Products.find()
          .skip((page - 1) * pagesize)
          .limit(pagesize)
          res.json({
            products
          })
    } catch (error) {
        res.status(500).json({
            message:'Internal server error'
        })
    }
}