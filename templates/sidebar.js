const {toJSON, $aside, $h6, isDefined, data_attributes} = require("../helpers/index.cjs");

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
