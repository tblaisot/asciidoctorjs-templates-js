const {toJSON} = require("./helpers/node.helpers");
const {data_attributes} = require("./helpers/render.helpers");
const {$} = require("./helpers/html.helpers");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    return $('ol',
        {
            id: jNode.id,
            class: ['callout-list', jNode.style, jNode.role],
            ...data_attributes(node)
        },
        $(jNode.items.map(item => $('li', {}, item.text)))
    )
}
