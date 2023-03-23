const {toJSON} = require("./helpers/node.helpers");
const {$} = require("./helpers/html.helpers");
const {data_attributes} = require("./helpers/render.helpers");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    return $('kbd',
        {class: 'button', ...data_attributes(node)},
        $('samp', {}, jNode.text)
    )
}
