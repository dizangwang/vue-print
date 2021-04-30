# vue-print
# 用法
## 安装
### npm install vue-print
### import Vueprint form 'vue-print'
### Vue.use(Vueprint)

## 使用
###  引入全局样式
(```) @media print {
    .printTarget {
        overflow-y: unset!important;
        overflow-x: unset!important;
        height: auto!important;
    }
    .printNo {
        display: none
    }
} 
(```)

###  用法
(```) 
<img src="./1.jpg" v-print>
(```)

