const {
    toJSON,
    $,
    $blockWithTitle,
    $printItemContent,
    data_attributes
} = require("../helpers/index.cjs");

// FIXME case .with-numeration-styles
// FIXME case .max-nesting
module.exports = function ({node}) {
    const jNode = toJSON(node);
    return $blockWithTitle(
        {
            title: jNode.title,
            id: jNode.id,
            class: ['olist', jNode.style, jNode.role],
            ...data_attributes(node)
        },
        $(
            'ol',
            {
                class: jNode.style,
                start: jNode.attributes.start,
                type: jNode.marker,
                reversed: jNode.options.reversed,
            },
            ...jNode.items.map(item =>
                $(
                    'li',
                    {id: item.id, class: item.role},
                    $printItemContent(item)
                )
            )
        )
    )
}
