const go_to_client = require("./go_to_client");

const go_to_db = async (order, connectForFlowers) => {
    go_to_client.go_to_client(order, connectForFlowers)
}

module.exports.go_to_db = go_to_db;