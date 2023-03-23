const {toJSON, $} = require("../helpers/index.cjs");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    return jNode.text + $('br')
}
