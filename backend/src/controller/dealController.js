const Deal = require("../model/deal")
const HomeCategory = require("../model/homeCategory")
const dealServices = require("../service/dealServices")


class DealController {

    async getAllDeals(req,res){
        try {
            const deals = await dealServices.getDeals()
            res.status(200).json(deals)
        }catch (error) {
            res.status(500).json({error:error.message})
        } 
    }


    async createDeals(req,res){
        try {
            const deal = await dealServices.createDeal(req.body)
            res.status(201).json(deal)
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }


    async updateDeals(req,res){
        try {
            const deal = await dealServices.updateDeal(req.body,req.params.id)
            res.status(200).json(deal)
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }

    async deleteDeals(req,res){
        try {
            const deal = await dealServices.deleteDeal(req.params.id)
            res.status(200).json(deal)
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }
}

module.exports = new DealController()