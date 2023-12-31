const express = require("express");
const router = express.Router();
const userSignUp = require("../../controller/userController/userLogin");
const allProductForUser = require("../../controller/userController/userProducts");
const getProductsByCategory = require("../../controller/userController/userDashboardProducts");
const postUserOrderProduct = require("../../controller/userController/userProductOrder");
const { getFilteredProducts } = require('../../controller/userController/userGetFilterProducts')
const authorize = require("../../middlewares/userAuthorize");
const {
    userGetProductsById,
} = require("../../controller/userController/userGetProductsById");

router.post("/sign-up", userSignUp.userSignUp);

router.post("/log-in", userSignUp.userLogIn);

router.get(
    "/get-all-products",
    authorize.authorize,
    allProductForUser.getAllProductsForUser
);

//Dashboard product routes

router.get(
    "/get-burgers-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetBurgers
);

router.get(
    "/get-chinese-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetChineseCategory
);

router.get(
    "/get-galic-bread-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetGalicBreadCategory
);

router.get(
    "/get-sandwich-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetSandwichCategory
);

router.get(
    "/get-pizza-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetPizzaCategory
);

router.get(
    "/get-pasta-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetPastaCategory
);

router.get(
    "/get-french-fries-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetFrenchFriesCategory
);

router.get(
    "/get-soft-drinks-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetSoftDrinksCategory
);

router.get(
    "/get-pink-chai-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetPinkChaiCategory
);

router.get(
    "/get-chai-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetChaiCategory
);

router.get(
    "/get-hot-milk-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetHotMilkCategory
);

router.get(
    "/get-cold-coffee-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetColdCoffeeCategory
);

router.get(
    "/get-hot-coffee-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetHotCoffeeCategory
);

router.get(
    "/get-mock-tails-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetMockTailsCategory
);

router.get(
    "/get-shakes-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetShakesCategory
);

router.get(
    "/get-soups-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetSoupCategory
);

router.get(
    "/get-ice-cream-category",
    authorize.authorize,
    getProductsByCategory.userDashboardGetIceCreamCategory
);

router.post(
    "/get-products-by-id/:productId",
    authorize.authorize,
    userGetProductsById
);

router.post(
    "/order-items",
    authorize.authorize,
    postUserOrderProduct.userProductOrder
);

router.post('/filter-items', authorize.authorize, getFilteredProducts )

module.exports = router;
