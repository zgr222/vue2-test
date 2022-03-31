
// vue/cli 的配置文件
module.exports = {
	devServer: {
		proxy: {
			'/task': {
				// 学习代理解决跨域
				target: 'https://zhidao.baidu.com'
			},
			"/api": {
				target: "http://test.my-site.com",
			},
		}
	},
	configureWebpack: require('./webpack.config'),
	publicPath: "./",
}