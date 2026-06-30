const Category = require("../model/category")
const Product = require("../model/product")


function calculateDiscountPercentage(mrp,sellingPrice){
    if (mrp<=0 || sellingPrice<0){
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
                category:category3._id  
            })
            return product

        } catch (error) {
            throw new Error(error.message)
        }
    }

    async createOrGetCategory(categoryId,level,parent= null){
        let category = await Category.findOne({categoryId})
        if (!category){
            category = await Category.create({
                categoryId,
                level,
                parentCategory:parent
            })
        }
        return category;
    }

}