const {toJSON} = require("./helpers/node.helpers");
const {$, $blockWithTitle} = require("./helpers/html.helpers");
const {data_attributes} = require("./helpers/render.helpers");

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
