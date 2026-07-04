const homecategoryService = require('../service/homeCategoryService')
const homeservice = require('../service/homeService.js')



class HomeCategoryController {

    async createHomeCategory(req,res){
        try {
            await homecategoryService.createHomeCategory(req.body)
            const allCategories = await homecategoryService.getAllHomeCategories()
            const home = await homeservice.createHomePageData(allCategories)
            res.status(201).json(home)
        } catch (error) { 
            res.status(500).json({error:error.message})
        }
    }

    async getAllHomeCategories(req,res){
        try {
            const homeCategories = await homecategoryService.getAllHomeCategories()
            res.status(200).json(homeCategories)
        }catch(error) {
            res.status(500).json({error:error.message})
        }
    }


    async updateHomeCategory(req,res){
        try {
            const homeCategory = await homecategoryService.updateHomeCategory(req.body,req.params.id)
            res.status(200).json(homeCategory)
        } catch (error) {
            if (error.message === "Home Category Not Found"){
                return res.status(404).json({error:error.message})
            }
            res.status(500).json({error:error.message})
        }
    }

}

module.exports = new HomeCategoryController()