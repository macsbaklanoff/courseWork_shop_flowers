export const costProducts = (map1, map2) => {
    let cost = 0
    for (const [key, index] of map1) {
        cost += key['Цена'] * index;
    }
    for (const [key, index] of map2) {
        cost += key['Цена'] * index;
    }
    return cost;
    
}