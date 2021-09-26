+ vue.config.js
  + 配置 `vant amfe-flexible postcss-px2rem px2rem-loader`
+ ```js
+ const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = {
	lintOnSave: true,
	parallel: false,
	css: {
		requireModuleExtension: true,
		loaderOptions: {
			postcss: {
				plugins: [
					require('postcss-px2rem')({ remUnit: 37.5 }),
				],
			},
		},
	},
	chainWebpack: config => {
		config.module
			.rule("ts")
			.use("ts-loader")
			.tap(options => {
				options = merge(options, {
					transpileOnly: true,
					getCustomTransformers: () => ({
						before: [
							tsImportPluginFactory({
								libraryName: "vant",
								libraryDirectory: "es",
								style: true
							})
						]
					}),
					compilerOptions: {
						module: "es2015"
					}
				});
				return options;
			});
	},
}