// const client = algoliasearch("UXG2M4SA2H", "bda025f6c0876247b2554b5d2a3bd270");
// // console.log(client)
// const index = client.initIndex("filteredProducts");
// let results = await sequelize.query("CALL get_all_products()", {
//     type: Sequelize.QueryTypes.RAW,
// });
// let arr = results.map((ele) => {
//     return ele;
// });
// // console.log(typeof arr, arr)
// // await index.saveObject(arr, {
// //     autoGenerateObjectIDIfNotExist: true,
// // });
// await index.replaceAllObjects(arr, {
//     autoGenerateObjectIDIfNotExist: true,
// });

// module.exports = index;