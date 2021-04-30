export default {
    install: function(Vue, options) {
        Vue.directive('print', {
            inserted: function(el, binding, vnode) {
                el.classList.add("printTarget");
                let parent = el.parentNode;
                while (parent) {
                    if (parent.hasOwnProperty("classList")) {
                        parent.classList.add("printTarget");
                    }
                    parent.childNodes.forEach((item) => {
                        if (item.hasOwnProperty("classList")) {
                            if (!item.classList.contains("printTarget")) {
                                item.classList.add("printNo")
                            }
                        }
                    })
                    parent = parent.parentNode
                }
            }
        })
    }
}


/**
 * @media print {
    .printTarget {
        overflow-y: unset!important;
        overflow-x: unset!important;
        height: auto!important;
    }
    .printNo {
        display: none
    }
}

<img src="" v-print>
 * 
 */