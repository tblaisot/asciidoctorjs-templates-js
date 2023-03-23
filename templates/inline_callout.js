const {toJSON} = require("./helpers/node.helpers");
const {$} = require("./helpers/html.helpers");
const {data_attributes} = require("./helpers/render.helpers");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    return $('b',
        {class: 'conum', 'data-value': jNode.text, ...data_attributes(node)},
        jNode.text
    )
}
