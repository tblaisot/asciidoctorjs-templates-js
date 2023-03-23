const {
    toJSON,
    $h,
    $a,
    $section,
    sectionTitle,
    data_attributes,
    isDefined
} = require("../helpers/index.cjs");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    return $section({
            class: ['doc-section', `level-${jNode.sectionLevel}`, jNode.role],
            ...data_attributes(node)
        },
        $h({
                level: jNode.sectionLevel + 1,
                id: jNode.id
            },
            isDefined(jNode.id) && jNode.document.hasAttributes.sectanchors
                ? $a({class: "anchor", href: `#${jNode.id}`, 'aria-hidden': "true"})
                : '',
            isDefined(jNode.id) && jNode.document.hasAttributes.sectlinks
                ? $a({class: "link", href: `#${jNode.id}`}, sectionTitle(node))
                : sectionTitle(node),
            !isDefined(jNode.id) ? sectionTitle(node) : ''
        ),
        jNode.content
    )
}
