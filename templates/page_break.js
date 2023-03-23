const {$, data_attributes} = require("../helpers/index.cjs");

module.exports = function ({node}) {
    return $('div', {
        role: 'doc-pagebreak',
        style: {
            'page-break-after': 'always'
        },
        ...data_attributes(node)
    })
}
