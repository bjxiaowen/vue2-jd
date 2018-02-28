import Vue from 'vue'

Vue.directive('focus', {
    inserted: function (el) {
        // 聚焦元素
        el.focus();
        console.info('inserted'+el)
    }
})
