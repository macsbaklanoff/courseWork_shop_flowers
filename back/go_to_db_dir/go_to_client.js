const go_to_db_order = require("./go_to_db_order");


const go_to_client = async (order, connectForFlowers) => {
    console.log('plohi')
    let indexForClientTable = await connectForFlowers.query('SELECT COUNT(*) FROM "Клиент";');
    let indexForOrderTable = await connectForFlowers.query('SELECT COUNT(*) FROM "Заказ";');
    //console.log(order)
   await connectForFlowers.query(
        `INSERT INTO "Клиент" VALUES 
        (
        ${Number(indexForClientTable.rows[0].count) + 1},
        ${Number(indexForOrderTable.rows[0].count) + 1}, 
        '${order.secondNameClient}', 
        '${order.firstNameClient}', 
        '${order.threeNameClient}', 
        '${order.telephone}', 
        '${order.adressClient}');`)
         
        await go_to_db_order.go_to_db_order(order, connectForFlowers);
}
module.exports.go_to_client = go_to_client;