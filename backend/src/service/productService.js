const Category = require("../model/category")
const Product = require("../model/product")


function calculateDiscountPercentage(mrp,sellingPrice){
    if (mrp<=0 || sellingPrice<0 || sellingPrice>mrp){
        throw new Error("Price is not Valid")
    }
    const discount = (mrp-sellingPrice)
    return Math.round((discount/mrp)*100)
}

class ProductService{

    async createProduct(req,seller){
        try {
            const discountPercent = calculateDiscountPercentage(req.mrpPrice,req.sellingPrice)
            const category1 = await this.createOrGetCategory(req.category,1)
            const category2 = await this.createOrGetCategory(req.category2,2,category1._id)
            const category3 = await this.createOrGetCategory(req.category3,3,category2._id)
            const product = await Product.create({
                title:req.title,
                description:req.description,
                images:req.images,
                sellingPrice:req.sellingPrice,
                mrpPrice:req.mrpPrice,
                discountPercent,
                size:req.size,
                seller:seller._id,
                color:req.color,
                quantity:req.quantity,
                category:category3._id  
            })
            return product

        } catch (error) {
            throw new Error(error.message)
        }
    }

    async createOrGetCategory(name, level, parent= null){
        let category = await Category.findOne({categoryId:name})
        if (!category){
            category = await Category.create({
                name,
                categoryId:name,
                level,
                parentCategory:parent
            })
        }
        return category;
    }

    async deleteProduct(productId){
        try {
            const product = await Product.findByIdAndDelete(productId);
            if (!product){
                throw new Error("Prodcut Not found")
            }
            return "Product deleted"
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateProduct(productId,updatedProduct){
        try {
            const product = await Product.findByIdAndUpdate(productId,updatedProduct,{new:true})
            return product
        } catch (error) {
            throw new Error(error)
        }
    }

    async findProductbyId(productId){
        try{const product = await Product.findById(productId)
        if (!product){
            throw new Error("Product Not Found")
        }
        return product}
        catch (error) {
            throw new Error(error)
        }
    }

    async searchProduct(query){
        try {
            const products = await Product.find({title: new RegExp(query,'i')})
            return products
        } catch (error) {
            throw new Error(error)
        }

    }

    async getProductsbySellerId(sellerId){
        return await Product.find({seller:sellerId})
    }

    async getAllProducts(req){
        const filterQuery = {}
        if (req.category){
            const category = await Category.findOne({categoryId:req.category})
            if (!category){
                return {
                    content:[],
                    totalpages:0,
                    totalElement:0
                }
            }
            filterQuery.category = category._id.toString();
        }

        if (req.color){
            filterQuery.color = req.color;
        }
        if (req.minPrice && req.maxPrice){
            filterQuery.sellingPrice = {$gte:parseInt(req.minPrice), $lte:parseInt(req.maxPrice)}
        }
        if (req.minDiscount){
            filterQuery.discountPercent = {$gte:parseInt(req.minDiscount)};
        }
        if (req.size){
            filterQuery.size = req.size;
        }
        let sortQuery = {};
        if (req.sort === "price_low"){
            sortQuery.sellingPrice = 1;
        }else if (req.sort === "price_high"){
            sortQuery.sellingPrice = -1;
        }

        const products = await Product.find(filterQuery)
        .sort(sortQuery)
        .skip(req.pageNumber*10)
        .limit(10)

        const totalElement = await Product.countDocuments(filterQuery)
        const totalpages = Math.ceil(totalElement/10)
        const res = {
            content:products,
            totalpages:totalpages,
            totalElement:totalElement
        }
        return res;

    }

}

module.exports = new ProductService()
module.exports.calculateDiscountPercentage = calculateDiscountPercentage;