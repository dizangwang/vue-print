# vue-print
# vue打印指令插件 可以在页面中任意指定需要打印的元素
# 用法
## 安装
### npm install vue-directive-print
### import Vueprint form 'vue-directive-print'
### Vue.use(Vueprint)

## 使用
###  引入全局样式
``` 
@media print {
    .printTarget {
        overflow-y: unset!important;
        overflow-x: unset!important;
        height: auto!important;
    }
    .printNo {
        display: none
    }
} 
```

###  用法
``` 
<img src="./1.jpg" v-print>
```

