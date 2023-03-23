const {toJSON, $, data_attributes} = require("../helpers/index.cjs");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    return $('b',
        {class: 'conum', 'data-value': jNode.text, ...data_attributes(node)},
        jNode.text
    )
}
