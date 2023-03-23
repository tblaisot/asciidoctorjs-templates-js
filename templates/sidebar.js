const {toJSON} = require("./helpers/node.helpers");
const {$aside, $h6,} = require("./helpers/html.helpers");
const {isDefined} = require("./helpers/utils.helpers");
const {data_attributes} = require("./helpers/render.helpers");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    return $aside({
            class: ['sidebar', jNode.role],
            id: jNode.id,
            ...data_attributes(node)
        },
        isDefined(jNode.title) ? $h6({class: 'block-title'}, jNode.title) : '',
        jNode.content
    )
}
