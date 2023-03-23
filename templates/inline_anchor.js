const {
    toJSON,
    $a,
    xrefText,
    linkRel,
    bibrefText,
    data_attributes
} = require("../helpers/index.cjs");

// FIXME case .xref-resolved-text
// FIXME case .xref-xrefstyle
module.exports = function ({node}) {
    const jNode = toJSON(node);

    switch (jNode.type) {
        case 'xref':
            return $a({href: jNode.target, class: jNode.role, ...data_attributes(node)}, xrefText(node));
        case 'ref':
            return $a({id: jNode.id, 'aria-hidden': 'true', ...data_attributes(node)})
        case 'bibref':
            return $a({id: jNode.id, 'aria-hidden': 'true', ...data_attributes(node)}) + bibrefText(node)
        default:
            return $a({
                    id: jNode.id,
                    class: jNode.role,
                    href: jNode.target,
                    target: jNode.attributes.window,
                    rel: linkRel(node),
                    title: jNode.attributes.title,
                    ...data_attributes(node)
                },
                jNode.text
            )
    }
}
