const {toJSON} = require("./helpers/node.helpers");
const {$} = require("./helpers/html.helpers");
const {data_attributes} = require("./helpers/render.helpers");

module.exports = function ({node}) {
    return $('div', {
        role: 'doc-pagebreak',
        style: {
            'page-break-after': 'always'
        },
        ...data_attributes(node)
    })
}
