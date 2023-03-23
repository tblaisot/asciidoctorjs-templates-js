const {
    toJSON,
    $,
    $blockWithCaption,
    $blockWithTitle,
    isDefined,
    $printItemContent,
    data_attributes
} = require("../helpers/index.cjs");

module.exports = function ({node}) {
    const jNode = toJSON(node);
    return $blockWithTitle({
            title: jNode.title,
            id: jNode.id,
            // class: ['dlist', jNode.style, jNode.role]
            class: ['dlist', jNode.style],
            role: jNode.style === 'qanda' ? 'doc-qna' : '',
            ...data_attributes(node)
        },
        $('dl',
            {class: jNode.style},
            $(
                jNode.items.flatMap(item => {
                    const dt = item.terms.map(term => $('dt', {}, term))
                    const dd = isDefined(item.description) ? $('dd', {}, $printItemContent(item.description)) : '';
                    return [...dt, dd];
                })
            )
        )
    )
}
