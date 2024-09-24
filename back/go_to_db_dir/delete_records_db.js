const delete_records_db = async(order, connectForFlowers) => {
    for (let i = 0; i < order.arrayFlowerForBascetMap[0].length; i++) {
        if (order.arrayFlowerForBascetMap[0][i]['Количество'] == order.arrayFlowerForBascetMap[1][i]) {
            await connectForFlowers.query(`DELETE FROM "Букет" WHERE "Идентификатор букета" = ${order.arrayFlowerForBascetMap[0][i]['Идентификатор букета']};`)
        }
        else {
            await connectForFlowers.query(`
                UPDATE "Букет" SET 
                "Количество" = ${order.arrayFlowerForBascetMap[0][i]['Количество'] - order.arrayFlowerForBascetMap[1][i]} 
                WHERE "Идентификатор букета" = ${order.arrayFlowerForBascetMap[0][i]['Идентификатор букета']};`)
        }
    }
    for (let i = 0; i < order.arrayRelatedProductForBascetMap[0].length; i++) {
        if (order.arrayRelatedProductForBascetMap[0][i]['Количество'] == order.arrayRelatedProductForBascetMap[1][i]) {
            await connectForFlowers.query(`DELETE FROM "Товар" WHERE "Идентификатор товара" = ${order.arrayRelatedProductForBascetMap[0][i]['Идентификатор товара']};`)
        }
        else {
            await connectForFlowers.query(`
                UPDATE "Товар" SET 
                "Количество" = ${order.arrayRelatedProductForBascetMap[0][i]['Количество'] - order.arrayRelatedProductForBascetMap[1][i]} 
                WHERE "Идентификатор товара" = ${order.arrayRelatedProductForBascetMap[0][i]['Идентификатор товара']};`)
        }
    }
}
module.exports.delete_records_db = delete_records_db;