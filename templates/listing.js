const {
    toJSON,
    $,
    $blockWithCaption,
    isDefined,
    data_attributes
} = require("../helpers/index.cjs");
const _colist = require('./colist')

module.exports = function ({node}) {
    const jNode = toJSON(node);
    let listing = ''
    if (jNode.style === 'source') {
        listing = $('pre',
            {
                class: [jNode.document.attributes['source-highlighter'], 'highlight', {
                    'linenums': jNode.attributes.linenums,
                    nowrap: jNode.options.nowrap
                }],
            },
            $('code', {
                    class: [
                        isDefined(jNode.attributes.language) ? `language-${jNode.attributes.language}` : '',// FIXME
                        'hljs'
                    ],
                    'data-lang': jNode.attributes.language// FIXME
                },
                jNode.content)
        )
    } else {
        listing = $('pre',
            {class: {nowrap: jNode.options.nowrap},},
            jNode.content
        )
    }
    const colist = isDefined(node.callout_list) ? _colist({node: node.callout_list}) : ''
    return $blockWithCaption(
        node,
        {
            id: jNode.id,
            title: jNode.title,
            position: 'top', // FIXME initialement top puis bottom mais comprend pas pkoi
            class: ['listing-block', jNode.role],
            ...data_attributes(node)
        },
        listing,
        colist
    )
}

