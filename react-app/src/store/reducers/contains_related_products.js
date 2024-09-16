export const containsRelatedProduct = (arr, key) => {
    let resultArray = []
    for (const [key, value] of arr) {
        resultArray.push(key)
    }
    resultArray = resultArray.filter(x => x['Идентификатор товара'] == key['Идентификатор товара'])
    if (resultArray == undefined || resultArray.length == 0) {
        return false;
    }
    return true;
}