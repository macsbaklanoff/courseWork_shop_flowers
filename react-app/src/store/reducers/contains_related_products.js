export const contains = (arr, val) => {
    let resultFind = arr.find(x => x["Идентификатор товара"] === val["Идентификатор товара"])
    if (resultFind != undefined) {
        return true;
    }
    return false;
}
