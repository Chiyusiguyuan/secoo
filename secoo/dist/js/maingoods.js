define(['jquery','jquery-cookie'],function($){
    function main(){
        $(function(){
            //展示图片部分
            $('#imgshow .imgbox').on('mouseover','a',function(){
                var imgsrc = $(this).find('img').attr('src');
                $('#imgshow dt img').attr('src',imgsrc);
            });
            $("#imgshow dt").mouseenter(function(){
                $('.dashedzoom').css('display','block')
			});
            $("#imgshow dt").mouseleave(function(){
                $('.dashedzoom').css('display','none')
            });
            $("#imgshow dt").mouseenter(function(){
                $('.bigimg').css('display','block')
            });
            $("#imgshow dt").mouseleave(function(){
                $('.bigimg').css('display','none')
            });
            $('body').mousemove(function(event){
                var x = event.pageX - 340;
                var y = event.pageY - 375;
                $('.dashedzoom').css('left',x).css('top',y);
                if (x > 200) {
                    $('.dashedzoom').css('left','200px');
                }else if (x < 0 ) {
                    $('.dashedzoom').css('left',0);
                }
                if (y > 200) {
                    $('.dashedzoom').css('top','200px');
                }else if (y < 0 ) {
                    $('.dashedzoom').css('top',0);
                }
            })
            $('body').mousemove(function(event){
                var x = event.pageX -370;
                var y = event.pageY -380;
                $('.bigimg img').css('left',-x).css('top',-y);
                if ( x < 0) {
                    $('.bigimg img').css('left','0');
                }
                else if (x > 92) {
                    $('.bigimg img').css('left','-92px');
                }
                if (y > 117) {
                    $('.bigimg img').css('top','-117px');
                }
                else if (y < 0) {
                    $('.bigimg img').css('top','0px');
                }
            })
            //展示图片部分结束
            //变换颜色开始
            $('.psize ul').on('click','li',function(){
                $('.psize li').attr('class','');
                $(this).attr('class','on');
            })
            //变换颜色结束
            //购买数量加减
            var num = $('#buyNumVal').attr('value');
            var kucun = $('.color9d0').html();
            $('#addProduct').click(function(){
                num++;
                if(num > kucun){
                    num = kucun;
                }
                $('#buyNumVal').attr('value',num);
            });
            $('#subProduct').click(function(){
                num--;
                if(num < 1){
                    num = 1;
                }
                $('#buyNumVal').attr('value',num);
            })
            //购买数量加减结束
        })
    }
    return {
        main : main
    }
})
