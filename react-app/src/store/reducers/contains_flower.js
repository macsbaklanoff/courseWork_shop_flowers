export const contains = (arr, val) => {
    let resultFind = arr.find(x => x["Идентификатор букета"] === val["Идентификатор букета"])
    if (resultFind != undefined) {
        return true;
    }
    return false;
}
