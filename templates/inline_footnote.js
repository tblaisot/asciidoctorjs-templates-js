const {
    toJSON,
    $a,
    footnoteId,
    footnoteRefId,
    data_attributes
} = require("../helpers/index.cjs");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    const index = jNode.attributes.index;
    if (index) {
        return $a({
                id: (jNode.type === 'xref' ? '' : footnoteRefId(jNode)),
                href: `#${footnoteId(jNode)}`,
                class: ['footnote-ref', jNode.role],
                title: `View footnote ${index}`,
                role: 'doc-noteref',
                ...data_attributes(node)
            }, `[${index}]`
        )
    } else {
        return $a({class: ['footnote-ref', 'broken'], title: "Unresolved footnote reference."}, `[${jNode.text}]`)
    }
}
