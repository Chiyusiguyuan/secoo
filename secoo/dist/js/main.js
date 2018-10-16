console.log("加载成功");
/*
	管理我们index.html引入的所有模块
*/
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
        'index':'index',
        'goods':'goods',
        'maingoods':'maingoods'
	},
	shim: {
		"jquery-cookie": ["jquery"],
	}
})

require(['index','goods','maingoods'], function(index,goods,maingoods){
	index.main();
    goods.main();
    maingoods.main();
})
