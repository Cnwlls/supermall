//如何更改别名 手动配置vue.config.js
module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                'assets':"@/assets",
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}