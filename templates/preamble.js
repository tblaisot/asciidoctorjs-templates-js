const {$, $section, data_attributes} = require("../helpers/index.cjs");

module.exports = function ({node}) {
    let toc = '';
    if (node.document.getAttribute('toc') && node.document.getAttribute('toc-placement') === 'preamble') {
        toc = tocTemplate(node)
    }
    return $([
        $section({
                id: 'preamble',
                'aria-label': 'Preamble',
                ...data_attributes(node)
            },
            node.getContent()
        ),
        toc
    ])
}
