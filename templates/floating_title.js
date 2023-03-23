const {toJSON} = require("./helpers/node.helpers");
const {$, $h} = require("./helpers/html.helpers");
const {data_attributes} = require("./helpers/render.helpers");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    return $h(
        {
            level: jNode.level + 1,
            id: jNode.id,
            class: [jNode.style, jNode.role],
            ...data_attributes(node)
        },
        jNode.title,
    )
}
