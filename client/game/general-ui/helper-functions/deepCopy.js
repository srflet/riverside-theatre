//Making a deep copy of an object to avoid overlapping references
//See https://www.codementor.io/@junedlanja/copy-javascript-object-right-way-ohppc777d
export const deepCopy = obj => {
    return JSON.parse(JSON.stringify(obj))
}