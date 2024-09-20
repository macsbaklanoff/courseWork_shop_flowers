export const countProductsAll = (map1, map2) => {
    let count = 0
    for (const [key, val] of map1) {
        count += val
    }
    for (const [key, val] of map2) {
        count += val
        
    }
    return count;
}