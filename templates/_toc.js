const {$} = require("../helpers/index.cjs");
const renderOutline = require("./outline.js")

module.exports.tocTemplate = function (node) {
    return $('nav', {
            id: 'toc',
            class: node.document.getAttribute('toc-class', 'toc'),
            role: 'doc-toc'
        },
        $('h2', {
                id: 'toc-title'
            },
            node.document.getAttribute('toc-title'),
        ),
        renderOutline({node: node.document})
    )
}
