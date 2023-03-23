const {toJSON, $, $blockWithTitle, data_attributes} = require("../helpers/index.cjs");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    return $blockWithTitle(
        {
            title: jNode.title,
            id: jNode.id,
            class: ['literal-block', jNode.role]
        },
        $('pre',
            {class: {'nowrap': jNode.options.nowrap}, ...data_attributes(node)},
            jNode.content
        )
    )
}
