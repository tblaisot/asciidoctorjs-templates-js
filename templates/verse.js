// = block_with_title :class=>'verse-block'
//   - if attr?(:attribution) || attr?(:citetitle)
//     blockquote.verse
//       pre.verse =content
//       include _attribution.html
//   - else
//     pre.verse =content

const {toJSON, $blockWithTitle, data_attributes} = require("../helpers/index.cjs");

module.exports = function ({node}) {
    const jNode = toJSON(node);

    return $blockWithTitle({
            title: jNode.title,
            id: jNode.id,
            class: 'verse-block',
            ...data_attributes(node)
        },
        jNode.content
    )
}
