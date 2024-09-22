const create_order_string = (order) => {
    let local_order = []
    console.log(order.arrayFlowerForBascetMap[0].length)
    for (let i = 0; i < order.arrayFlowerForBascetMap[0].length; i++) {
        local_order.push(order.arrayFlowerForBascetMap[0][i]['Наименование']);
        local_order.push(order.arrayFlowerForBascetMap[1][i]);
    }
    return local_order.join(' ');
}

const go_to_db_order = async (order, connectForFlowers) => {
    create_order_string(order)
    let indexForClientTable = await connectForFlowers.query('SELECT COUNT(*) FROM "Клиент";');
    let indexForOrderTable = await connectForFlowers.query('SELECT COUNT(*) FROM "Заказ";');
   await connectForFlowers.query(`
        INSERT INTO "Заказ" VALUES (
        ${Number(indexForOrderTable.rows[0].count) + 1},
        ${Number(indexForClientTable.rows[0].count)},
        '${create_order_string(order)}'
        )
        `)
}
module.exports.go_to_db_order = go_to_db_order;