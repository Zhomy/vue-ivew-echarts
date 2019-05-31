let path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => {
        lintOnSave: true,
        config.resolve.alias
        .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
    },
    baseUrl: './',
    devServer: {
        // port:3000,
        // 设置代理
        proxy: {
            "/web": {
                target: "https://www.chinartas.com/shopbbc-app-api", // 域名
                ws: false, // 是否启用websockets
                changOrigin: false, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    '^/web': '/web'
                }
            }
        }
    },
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
}