const {toJSON} = require("./helpers/node.helpers");
const {$, $p, $section, $h6} = require("./helpers/html.helpers");
const {isDefined} = require("./helpers/utils.helpers");
const {data_attributes} = require("./helpers/render.helpers");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    if (isDefined(jNode.title)) {
        return $section(
            {id: jNode.id, class: "paragraph", ...data_attributes(node)},
            $([
                $h6({class: "block-title"}, jNode.title),
                $p({class: jNode.role}, jNode.content)
            ])
        )
    }
    return $p({id: jNode.id, class: jNode.role, ...data_attributes(node)}, jNode.content)
}
