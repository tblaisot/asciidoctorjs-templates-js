const {toJSON} = require("./helpers/node.helpers");
const {$, $section} = require("./helpers/html.helpers");
const {data_attributes} = require("./helpers/render.helpers");

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
