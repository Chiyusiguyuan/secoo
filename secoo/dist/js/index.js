define(['jquery','jquery-cookie'],function($){
    function main(){
        $(function(){
            $("#show,.showServe").mouseenter(function(){
                $('.showServe').css('display','block')
			});
			$("#show,.showServe").mouseleave(function(){
                $('.showServe').css('display','none')
			});
            //导航栏图片滚动部分
            $.ajax({
                url:'../data/data1.json',
                type:'GET',
                success:function(res){
                    for(var i = 0; i < res.length; i++){
                        $(`<a href=""><li><img src="${res[i].img}" alt=""></li></a>`).appendTo('.containerbody ul');
                        $(`<li></li>`).appendTo('.containerbody ol');
                        $('.containerbody ul a').eq(i).find('li').css('z-index',`${10-i}`);
                    }
                },
                error :function(msg){
                    alert(msg);
                }
            })

            var iNow = -1 ;
            var timer = null;
            var oOl = $('.containerbody').find('ol');
            oOl.on('click','li',function(){
                iNow = $(this).index();
                // tabContainer();
                $('.containerbody ul li').stop().animate({
                    opacity : 0
                },1000)
                $('.containerbody ul li').eq(iNow).stop().animate({
                    opacity : 1
                },1000)
                $('.containerbody ol li').attr('class','').eq(iNow).attr('class','active');
            })

            timer = setInterval(timerInner,4000);
            $('.containerbody').hover(function(){
                clearInterval(timer);
            },function(){
                timer = setInterval(timerInner,4000);
            })

            function timerInner(){
                iNow++;
                tabContainer();
            }

            function tabContainer(){
                $('.containerbody ol li').attr('class','').eq(iNow).attr('class','active');
                $('.containerbody ul li').eq(iNow).stop().animate({
                    opacity : 0
                },1000,function(){
                    if(iNow ==  $(".containerbody ul li").size() -1){
                        iNow = -1;
                        $('.containerbody ul li').stop().animate({
                            opacity : 1
                        },1000)
                    }
                })
            }

            $('.containerbody .slider-left').click(function(){
                $('.containerbody ol li').attr('class','').eq(iNow -1).attr('class','active');
                $('.containerbody ul li').stop().animate({
                    opacity : 0
                },1000)
                $('.containerbody ul li').eq(iNow -1).stop().animate({
                    opacity : 1
                },1000)
                iNow--;
                if(iNow == -1){
                    iNow = 6;
                }
            })
            $('.containerbody .slider-right').click(function(){
                $('.containerbody ol li').attr('class','').eq(iNow +1).attr('class','active');
                $('.containerbody ul li').stop().animate({
                    opacity : 0
                },1000)
                $('.containerbody ul li').eq(iNow +1).stop().animate({
                    opacity : 1
                },1000)
                iNow++;
                if(iNow == 6){
                    iNow = -1;
                }
            })
            //导航栏图片滚动部分结束
            //左右边栏导航
            $(".containerbody,.like-list").mouseenter(function(){
                $('.slider-left').css('opacity','0.6').css('transition','0.7s')
            });
            $(".containerbody,.like-list").mouseleave(function(){
                $('.slider-left').css('opacity','0').css('transition','0.7s')
            });
            $(".containerbody,.like-list").mouseenter(function(){
                $('.slider-right').css('opacity','0.6').css('transition','0.7s')
            });
            $(".containerbody,.like-list").mouseleave(function(){
                $('.slider-right').css('opacity','0').css('transition','0.7s')
            });
            //左右边栏导航结束
            //主页图片及文字加载
            $.ajax({
                url: '../data/data2.json',
                type: "GET",
                success: function(res){
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        html += `<a href="">
                            <div>
                                <img src="${res[i].img}" alt="">
                            </div>
                            <h3>${res[i].title}</h3>
                        </a>`;
                    }

                    $(".activity-list").html(html);
                },
                error: function(msg){
                    alert(msg);
                }
            })
            //主页图片及文字加载结束
            //主页图片及文字描述的动画效果开始
            $('.activity-list').on('mouseenter', 'a', function(){
                $(this).css('color','orange').css('transition','0.7s');
                $(this).find('div').css('opacity','0.7').css('transition','0.7s');
            })
            $('.activity-list').on('mouseleave', 'a', function(){
                $(this).css('color','black').css('transition','0.7s');
                $(this).find('div').css('opacity','1').css('transition','0.7s');
            })
            //主页图片及文字描述的动画效果结束
            //猜你喜欢部分数据加载
            $.ajax({
                url: '../data/data3.json',
                type: "GET",
                success: function(res){
                    for(var i = 0; i < res.length; i++){
                        $("<li></li>").appendTo($(".like-list ul"));
                        for(var j = 0; j < res[i].length; j++){
                            $(`<a href=""><div><img src="${res[i][j].img}" alt=""></div><p>${res[i][j].name}</p><span>${res[i][j].price}</span>
                                     </a>`).appendTo($(".like-list ul li").eq(i));
                        }
                    }
                },
                error: function(msg){
                    alert(msg);
                }
            })
            //猜你喜欢部分数据加载结束
            //猜你喜欢动画效果开始
            var iNow1 = 0;
            var timer1 = null;
            $('.like-list ol').on('click','li',function(){
                iNow1 = $(this).index();
                $('.like-list ul li').eq(iNow1).stop().animate({
                    left : 0
                },1000);

                $('.like-list ul li').eq(iNow1 -1).stop().animate({
                    left : '-120%'
                },1000,function(){
                    $('.like-list ul li').eq(iNow -1).css('left','100%');
                });

                $('.like-list ol li').attr('class','').eq(iNow1).attr('class','active');
            })

            timer1 = setInterval(timerInner1,4000);
            $('.like-list').hover(function(){
                clearInterval(timer1);
            },function(){
                timer1 = setInterval(timerInner1,4000);
            })
            function timerInner1(){
                iNow1++;
                tabLike();
            }

            function tabLike(){
                $('.like-list ol li').attr('class','').eq(iNow1).attr('class','active');
                $('.like-list ul li').eq(iNow1).stop().animate({
                    left : 0
                },1000,function(){
                    if(iNow1 ==  $(".like-list ul li").size() -1){
                        iNow1 = 0;
                    }
                })
                $('.like-list ul li').eq(iNow1 -1).stop().animate({
                    left : '-120%'
                },1000)
                $('.like-list ul li').eq(0).css('left','0');
                $('.like-list ul li').css('left','100%');

            }
            //猜你喜欢动画效果结束
            //分类区数据加载
            $.ajax({
                url: '../data/data4.json',
                type: "GET",
                success: function(res){
                    $(`<div class="unflot">
                            <div class="unflot-g">
                                <dl>
                                    <dd class="fenlei">
                                        <p>分类</p>
                                    </dd>
                                    <dd class="pinpai">
                                        <p>品牌</p>
                                    </dd>
                                    <dd class="reci">
                                        <p>热词</p>
                                    </dd>
                                </dl>
                                </div>
                      </div>`).appendTo($(".bander .bander-goods"));
                    for(var i = 0; i < res.length; i++){
                        for(var j = 0; j < res[i].length; j++){
                            for(var k = 0; k < res[i][j].length;k++){
                                $(`<a href="#">${res[i][j][k]}</a>`).appendTo($(".bander .bander-goods").eq(i).find(".unflot-g dl dd").eq(j));
                            }
                        }
                    }
                },
                error: function(msg){
                    alert(msg);
                }
            })
            //分类区数据加载结束
            //分类区动画效果
            $(".bander-goods,.unflot").mouseenter(function(){
                $(this).find('.unflot').css('display','block')
            });
            $(".bander-goods,.unflot").mouseleave(function(){
                $(this).find('.unflot').css('display','none')
            });
            //分类区动画效果结束


        })
    }
    return {
        main : main
    }
})
