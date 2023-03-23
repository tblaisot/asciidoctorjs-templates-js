const {toJSON, data_attributes, $} = require("../helpers/index.cjs");

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
