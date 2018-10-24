define(['jquery','jquery-cookie'],function($){
    function main(){
        $(function(){
            //cookie添加
            var cookie_arr = eval($.cookie('goods'));
            if(!$.cookie('goods')){
                $('.nullCart').css('display','block');
                $('.cartBox').css('display','none');
            }else{
                for(var i = 0; i < cookie_arr.length; i++){
                    $('.namePro a').html(cookie_arr[i].name);
                    $('.cartNames .color999').html('颜色： '+cookie_arr[i].color);
                    $('.goodsPrice').html(`<span class="rmb">¥</span><span class="price">${cookie_arr[i].price}</span>`);
                    $('.Num').val(cookie_arr[i].num);
                    $('.shoppingCarNum').html(`(${cookie_arr[i].num})`);
                }
            }

            //cookie添加结束

            //数量加减操作
            $('.cMinus').click(function(){

                var num = $('.Num').val();
                num++;
                $('.Num').val(num);
                var money = $('.goodsPrice .price').html();
                money *= num;
                $('.colore93 .rmbValue').html(money);
                var allMoney = $('.totalPriceBottom strong').html();
                allMoney = '￥' + $('.colore93 .rmbValue').html();
                $('.totalPriceBottom strong').html(allMoney);
                $.cookie('goods', `[{id:1,num:${$('.Num').val()},color:'黑色',price:4500,name:'Mulberry/玛百莉Darley小号女士牛皮学院包RL4957/205A100'}]`, { expires: 7 });
            })
            $('.cPlus').click(function(){
                var num = $('.Num').val();
                num--;
                //在数量减到0的时候弹出对话框
                if(num == 0){
                    num = 1;
                    $('.cartPop01').css('display','block');
                    $('.btn01').click(function(){
                        $('.nullCart').css('display','block');
                        $('.cartBox').css('display','none');
                        $('.cartPop01').css('display','none');
                    })
                    $('.btn02').click(function(){
                        $('.cartPop01').css('display','none');
                    })
                }
                $('.Num').val(num);
                var money = $('.goodsPrice .price').html();
                money *= num;
                $('.colore93 .rmbValue').html(money);
                var allMoney = $('.totalPriceBottom strong').html();
                allMoney = '￥' + $('.colore93 .rmbValue').html();
                $('.totalPriceBottom strong').html(allMoney);
                $.cookie('goods', `[{id:1,num:${$('.Num').val()},color:'黑色',price:4500,name:'Mulberry/玛百莉Darley小号女士牛皮学院包RL4957/205A100'}]`, { expires: 7 });
            })
            //数量加减结束
            //其他选项功能
            $('.del').click(function(){
                $('.cartPop01').css('display','block').css('left','1086px');
                $('.btn01').click(function(){
                    $('.nullCart').css('display','block');
                    $('.cartBox').css('display','none');
                    $('.cartPop01').css('display','none');
                })
                $('.btn02').click(function(){
                    $('.cartPop01').css('display','none');
                })
                $.cookie('goods', `[{id:1,num:${$('#buyNumVal').val()},color:'黑色',price:4500,name:'Mulberry/玛百莉Darley小号女士牛皮学院包RL4957/205A100'}]`, {expires: -1});
            })
            var num = $('.Num').val();
            var money = $('.goodsPrice .price').html();
            money *= num;
            $('.colore93 .rmbValue').html(money);

            var allMoney = $('.totalPriceBottom strong').html();
            allMoney = '￥' + ($('.price').html())* $('.Num').val();
            $('.totalPriceBottom strong').html(allMoney);

            $('.a01').mouseenter(function(){
                $(this).css('background','#e93b39').css('color','white').css('transition','0.5s');
            })
            $('.a01').mouseleave(function(){
                $(this).css('background','white').css('color','#e93b39').css('transition','0.5s');
            })


            //其他功能结束
        })
    }
    return {
        main : main
    }
})
