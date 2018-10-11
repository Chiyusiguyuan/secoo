console.log("加载成功");
/*
	管理我们index.html引入的所有模块
*/
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
        'index':'index'
	},
	shim: {
		"jquery-cookie": ["jquery"],
	}
})

require(['index'], function(index){
	index.main();
})
