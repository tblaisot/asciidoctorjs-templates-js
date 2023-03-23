const {
    toJSON,
    $,
    $p,
    $section,
    $h6,
    isDefined,
    data_attributes
} = require("../helpers/index.cjs");

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
