function isString(str) {
    return Object.prototype.toString.call(str) === '[object String]'
}

function isArray(arr) {
    return Array.isArray(arr)
}

function isObject(obj) {
    return typeof obj === 'object'
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isEmptyString(str) {
    return !isDefined(str) || String.prototype.trim.apply(str).length === 0
}

function toBoolean(val) {
    return val && val !== 'false' && val.toString() !== '0' || false
}

module.exports = {
    isString,
    isArray,
    isObject,
    isDefined,
    isEmptyString,
    toBoolean
}
