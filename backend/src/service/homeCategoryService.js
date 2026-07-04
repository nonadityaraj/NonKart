const HomeCategory  = require("../model/homeCategory")

class HomeCategoryService {

    async getAllHomeCategories(){
        try {
            const homeCategories = await HomeCategory.find()
            return homeCategories
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async createHomeCategory(homeCategory){
        try {
            const newHomeCategory = new HomeCategory(homeCategory)
            const saveHomeCategory = await newHomeCategory.save()
            return saveHomeCategory
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async createHomeCategories(homeCategories){
        try {
            const newHomeCategories = await HomeCategory.insertMany(homeCategories)
            return newHomeCategories
        } catch (error) {
            throw new Error(error.message)
        }
    }


    async updateHomeCategory(homeCategory,id){
        try {
            const existingHomeCategory = await HomeCategory.findById(id)
            if (!existingHomeCategory){
                throw new Error("Home Category Not Found")
            }
            return await HomeCategory.findByIdAndUpdate(
                existingHomeCategory._id,
                homeCategory,
                {new:true}
            )
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

module.exports = new HomeCategoryService()

