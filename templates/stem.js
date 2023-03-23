const {
    toJSON,
    $blockWithCaption,
    $div,
    stemLang,
    delimitStem,
    data_attributes
} = require("../helpers/index.cjs");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    return $blockWithCaption(node, {
            position: 'top',
            title: jNode.title,
            id: jNode.id,
            class: ['stem-block', jNode.role],
            ...data_attributes(node)
        },
        $div({
                class: 'math',
                'data-lang': stemLang(jNode)
            },
            delimitStem(jNode, jNode.content, node.getStyle())
        )
    )
}
