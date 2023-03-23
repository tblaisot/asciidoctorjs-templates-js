const {toJSON, $, data_attributes} = require("../helpers/index.cjs");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    return $('kbd',
        {class: 'button', ...data_attributes(node)},
        $('samp', {}, jNode.text)
    )
}
