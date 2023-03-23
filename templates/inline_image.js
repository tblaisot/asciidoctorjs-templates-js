const {toJSON} = require("./helpers/node.helpers");
const {$, $wrapIf} = require("./helpers/html.helpers");
const {isDefined} = require("./helpers/utils.helpers");
const {linkRel, icon_fa_classes, data_attributes} = require("./helpers/render.helpers");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    const link_rel = linkRel(node)

    let content = '';
    if (jNode.type === 'icon' && node.document.getAttribute('icons') === 'font') {
        content = $('i', {
            class: [...icon_fa_classes(node), jNode.role],
            title: jNode.attributes.title,
            ...(!isDefined(jNode.attributes.link) ? data_attributes(node) : [])
        })

    } else if (jNode.type === 'icon' && !node.document.hasAttribute('icons')) {
        content = $('b', {
                class: ['icon', jNode.role],
                title: jNode.attributes.title,
                ...(!isDefined(jNode.attributes.link) ? data_attributes(node) : [])
            },
            `[${jNode.attributes.alt}]`
        )
    } else {
        content = $('img',
            {
                src: jNode.type === 'icon' ? node.getIconUri(jNode.target) : node.getImageUri(jNode.target),
                alt: jNode.attributes.alt,
                width: jNode.attributes.width,
                height: jNode.attributes.height,
                title: jNode.attributes.title,
                loading: jNode.attributes.loading,
                class: [{[jNode.type]: jNode.type !== 'image'}, jNode.role],
                style: {float: jNode.attributes.float},
                ...(!isDefined(jNode.attributes.link) ? data_attributes(node) : [])
            }
        )
    }

    return $wrapIf(isDefined(jNode.attributes.link), 'a', {
            'class': 'image',
            'href': jNode.attributes.link,
            'target': jNode.attributes.window,
            'rel': link_rel,
            ...data_attributes(node)
        },
        content
    )
}
