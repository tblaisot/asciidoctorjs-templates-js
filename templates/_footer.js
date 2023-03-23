const {$, $div, isEmptyString} = require("../helpers/index.cjs");

module.exports.templateFooter = function (node) {
    const docinfo_content = node.getDocinfo('footer')

    return $([
        $div(
            {id: 'footer-text'},
            node.hasAttribute('revnumber')
                ? ` ${node.getAttribute('version-label')} ${node.getAttribute('revnumber')}`
                : '',
            node.hasAttribute('last-update-label')
                ? $([
                    $('br'),
                    ` ${node.getAttribute('last-update-label')} ${node.getAttribute('docdatetime')}`
                ])
                : '',
        ),
        !isEmptyString(docinfo_content) ? docinfo_content : ''
    ])

}
