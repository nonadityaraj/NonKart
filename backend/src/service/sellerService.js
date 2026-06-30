const Seller = require('../model/seller')
const jwtProvider = require('../util/jwtProvider')
const Address = require('../model/address')

class SellerService{

    async createSeller(sellerData){
        const userFound = await Seller.findOne({email:sellerData.email})
        if (userFound){
            throw new Error("Email Already existed")
        }

        let saveAddress = sellerData.pickupAddress;
        saveAddress = await Address.create(sellerData.pickupAddress);
        const newSeller = await Seller.create({
            sellerName:sellerData.sellerName,
            email:sellerData.email,
            mobile:sellerData.mobile,
            password:sellerData.password,
            pickupAddress:saveAddress._id,
            GSTIN:sellerData.GSTIN,
            bankDetails:sellerData.bankDetails,
            bussinessDetails:sellerData.bussinessDetails
        })
        return newSeller
    }


    async getSellerProfile(jwt){
        const email = jwtProvider.getEmailFromjwt(jwt)
        return this.getSellerByEmail(email);
    }

    async getSellerByEmail(email){
        const seller = await Seller.findOne({email:email})
        if (!seller){
            throw new Error("Seller not found")
        }
        return seller;

    }
    
    async getSellerById(id){
        const seller = await Seller.findById(id);
        if (!seller){
            throw new Error("Seller Not Present")
        }
        return seller
    }
    async getAllSeller(status){
        const allSellers = await Seller.find({accountStatus:status})
        return allSellers
    }
    async updateSeller(existingSeller,newSellerData){
        const updatedSeller = await Seller.findByIdAndUpdate(existingSeller._id,newSellerData,{new:true});
        return updatedSeller;
    }
    
    async updateSellerstatus(sellerId, status){
        return await Seller.findByIdAndUpdate(sellerId,
            {$set:{accountStatus:status}},
            {new:true})
    }

    async deleteSeller(sellerId){
        return await Seller.findByIdAndDelete(sellerId);
    }

}



module.exports = new SellerService();
