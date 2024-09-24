const go_to_client = require("./go_to_client");

const go_to_db = async (order, connectForFlowers) => {
    go_to_client.go_to_client(order, connectForFlowers)
    /*for (let i = 0; i < order.arrayFlowerForBascetMap[0].length; i++) {
        if (order.arrayFlowerForBascetMap[0][i]['Количество'] == order.arrayFlowerForBascetMap[1][i]) {
            console.log(`DELETE FROM "Букет" WHERE "Идентификатор букета" = ${order.arrayFlowerForBascetMap[0][i]['Идентификатор букета']};`)
        }
        else {
            console.log(`
                UPDATE "Букет" SET 
                "Количество" = ${order.arrayFlowerForBascetMap[0][i]['Количество'] - order.arrayFlowerForBascetMap[1][i]} 
                WHERE "Идентификатор букета" = ${order.arrayFlowerForBascetMap[0][i]['Идентификатор букета']};`)
        }
    }
        */
}

module.exports.go_to_db = go_to_db;