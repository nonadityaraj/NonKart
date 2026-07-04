const dealService = require('../service/dealServices')
const HomeCategoryStatus = require('../domian/homeCategoryStatus')


class HomeService{
    async createHomePageData(allCategories){

        const gridCategories = allCategories.filter(e =>(
            e.section === HomeCategoryStatus.GRID
        ))
        const shop_by_category = allCategories.filter(e =>(
            e.section === HomeCategoryStatus.SHOP_BY_CATEGORY
        ))
        const electronics = allCategories.filter(e =>(
            e.section === HomeCategoryStatus.ELECTRONICS
        ))
        const deals = await dealService.getDeals()
        const dealCategories = allCategories.filter(e =>(
            e.section === HomeCategoryStatus.DEALS
        ))


        const home = {
            grid :gridCategories,
            shopByCategories:shop_by_category,
            electricCategories:electronics,
            deals:deals,
            dealCategories:dealCategories
        }
        return home;
    }
}

module.exports = new HomeService();