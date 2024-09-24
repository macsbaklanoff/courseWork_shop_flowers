const delete_records_db= require("./delete_records_db");

const create_order_string = (order) => {
    let local_order = []
    let cost = 0
    let count = 0
    for (let i = 0; i < order.arrayFlowerForBascetMap[0].length; i++) {
        local_order.push(order.arrayFlowerForBascetMap[0][i]['Наименование']);
        local_order.push(order.arrayFlowerForBascetMap[1][i]);
        count += order.arrayFlowerForBascetMap[1][i]
        cost += order.arrayFlowerForBascetMap[0][i]['Цена'] * order.arrayFlowerForBascetMap[1][i];
        local_order.push("шт.,");
    }
    for (let i = 0; i < order.arrayRelatedProductForBascetMap[0].length; i++) {
        local_order.push(order.arrayRelatedProductForBascetMap[0][i]['Наименование']);
        local_order.push(order.arrayRelatedProductForBascetMap[1][i]);
        count += order.arrayRelatedProductForBascetMap[1][i]
        cost += order.arrayRelatedProductForBascetMap[0][i]['Цена'] * order.arrayRelatedProductForBascetMap[1][i];
        local_order.push("шт.,");
    }
    return {
        'arrayOrder': local_order.join(' '),
        'cost': cost,
        'count': count,
    }
}



const go_to_db_order = async (order, connectForFlowers) => {
    const order_for_db = create_order_string(order)
    let indexForClientTable = await connectForFlowers.query('SELECT COUNT(*) FROM "Клиент";');
    let indexForOrderTable = await connectForFlowers.query('SELECT COUNT(*) FROM "Заказ";');
    await connectForFlowers.query(`
        INSERT INTO "Заказ" VALUES (
        ${Number(indexForOrderTable.rows[0].count) + 1},
        ${Number(indexForClientTable.rows[0].count)},
        '${order_for_db.arrayOrder}',
        ${order_for_db.cost},
        ${order_for_db.count}
        );
        `)
        delete_records_db.delete_records_db(order, connectForFlowers)
}
module.exports.go_to_db_order = go_to_db_order;