const {toJSON, $, $h, data_attributes} = require("../helpers/index.cjs");

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
