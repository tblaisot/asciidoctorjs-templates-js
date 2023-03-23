const {toJSON} = require("./helpers/node.helpers");
const {$, $blockWithTitle, $wrapIf} = require("./helpers/html.helpers");
const {data_attributes} = require("./helpers/render.helpers");

function attributionTemplate(jNode) {
    return $('footer', {},
        '&#8212;',
        $('cite', {}, [jNode.attributes.attribution, jNode.attributes.citetitle].join(', '))
    )
}


module.exports = function ({node}) {
    const jNode = toJSON(node);
    let attribution = '';
    if (jNode.attributes.attribution || jNode.attributes.citetitle) {
        attribution = attributionTemplate(jNode)
    }
    return $blockWithTitle({
            title: jNode.title,
            id: jNode.id,
            class: ['quote-block', jNode.role],
            ...data_attributes(node)
        },
        $('blockquote', {},
            $wrapIf(!jNode.hasBlocks, 'p', {}, jNode.content),
            attribution
        )
    )
}
