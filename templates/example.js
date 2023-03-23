const {
    toJSON,
    $div,
    $,
    $blockWithCaption,
    isDefined,
    data_attributes
} = require("../helpers/index.cjs");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    if (jNode.options.collapsible) {
        return $('details',
            {
                id: jNode.id,
                class: jNode.role,
                open: jNode.options.open,
                ...data_attributes(node)
            },
            isDefined(jNode.title) ? $('summary', {}, jNode.title) : '',
            $div({class: 'content'}, jNode.content),
        )
    } else {
        return $blockWithCaption(
            node,
            {
                position: 'top',
                title: jNode.title,
                id: jNode.id,
                class: ['example-block', jNode.role],
                ...data_attributes(node)
            },
            $div({class: 'example'}, jNode.content)
        )
    }
}
