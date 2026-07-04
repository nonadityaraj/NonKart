const Deal = require("../model/deal")
const HomeCategory = require("../model/homeCategory")

class DealServices {

    async getDeals() {
        try {
            const deals = await Deal.find().populate({path:'category'})
            return deals
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async createDeal(deals){
        try{
            const category = await HomeCategory.findById(deals.category)
            if (!category){
                throw new Error("Category Not Found")
            }
            const newDeal = new Deal({
                ...deals,
                category:category
            })
            const saveDeal = await newDeal.save()
            return await Deal.findById(saveDeal._id).populate({path:'category'})
        }catch (error) {
            throw new Error(error.message)
        }
    }

    async updateDeal(deal,id){
        try {
            const existingDeal = await Deal.findById(id)
            if (!existingDeal){
                throw new Error("Deal Not Found")
            }
            return await Deal.findByIdAndUpdate(
                existingDeal._id,
                {discount:deal.discount},
                {new:true}
            ).populate({path:'category'})
        } catch (error) {
            throw new Error(error.message)
        }
    }


    async deleteDeal(id){
        const deal = await Deal.findByIdAndDelete(id)
        return deal;

    }
}

module.exports = new DealServices()
    