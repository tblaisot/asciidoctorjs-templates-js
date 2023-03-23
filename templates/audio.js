const {toJSON, $, $blockWithCaption, isDefined} = require("../helpers/index.cjs");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    return $blockWithCaption(
        node,
        {
            id: jNode.id,
            position: 'bottom',
            class: ['audio-block', jNode.role],
            title: jNode.title
        },
        $('audio',
            {
                src: node.getMediaUri(jNode.attributes.target),
                autoplay: jNode.options.autoplay,
                controls: !isDefined(jNode.options.nocontrols),
                loop: jNode.options.loop,
                'data-rewind': jNode.options.rewind,
                'data-volume': jNode.options.muted ? 0 : jNode.attributes.volume
            },
            'Your browser does not support the audio tag.'
        )
    )
}
