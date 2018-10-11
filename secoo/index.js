define(['jquery','jquery-cookie'],function($){
    function main(){
        $(function(){
            $("#show").mouseenter(function(){
                $('.showServe').css('display','block')
			});
			$("#show").mouseleave(function(){
                $('.showServe').css('display','none')
			});
            $(".showServe").mouseenter(function(){
                $('.showServe').css('display','block')
			});
			$(".showServe").mouseleave(function(){
                $('.showServe').css('display','none')
			});

            $.ajax({
                url: '../data/data1.json',
                type: "GET",
                success: function(res){
                    var html1 = "";
                    var html2 = '';
                    for(var i = 0; i < res.length+1; i++){

                        if(i == res.length){
                            html1 += `<a href=""><li><img src="${res[0].img}" alt=""></li></a>`;
                        }else{
                            html1 += `<a href=""><li><img src="${res[i].img}" alt=""></li></a>`;
                            html2 += `<li></li>`;
                        }
					}
					$(".containerbody ul").html(html1);
                    $(".containerbody ol").html(html2);
                },
                error: function(msg){
                    alert(msg);
                }
            })

            var oOl = $('.containerbody').find('ol');
            var oUl = $(".containerbody").find("ul");
            var iNow = -1;
            var timer = null;
            $(".containerbody ul li").eq(0).css('opacity','1');
            oOl.on('click','oBtns',function(){
                iNow = $(this).index();

                tab();
            })
            $('.containerbody ol').on('click', 'li', function(){
                iNow = $(this).index();
                $(".containerbody ul li").stop().animate({
                    opacity : 0
                },300)
                $(".containerbody ul li").eq(iNow).stop().animate({
                    opacity : 1
                },300)
                tab();
            })
            //添加自动滚动
            timer = setInterval(timerInner, 4000);
            $(".containerbody").hover(function(){
                clearInterval(timer);
            }, function(){
                timer = setInterval(timerInner, 4000);
            })

            function timerInner(){
                iNow++;
                tab();
            }
            //点击切换图片
            function tab(){
                $('.containerbody ol li').attr("class", "").eq(iNow).attr("class", "active");
                // $('.containerbody ul li').attr('class','').eq(iNow).attr('class','on');

                $(".containerbody ul li").eq(iNow).stop().animate({
                    opacity : 1
                },1000,function(){
                    if(iNow == $(".containerbody ul li").size() -1){
                        $(".containerbody ul li").css('opacity','0');
                        iNow = -1;
                        // $(".containerbody ul li").eq(6).css('opacity','1')
                    }
                })
            }

            $(".containerbody").mouseenter(function(){
                $('.slider-left').css('opacity','0.6').css('transition','0.7s')
            });
            $(".containerbody").mouseleave(function(){
                $('.slider-left').css('opacity','0').css('transition','0.7s')
            });
            $(".containerbody").mouseenter(function(){
                $('.slider-right').css('opacity','0.6').css('transition','0.7s')
            });
            $(".containerbody").mouseleave(function(){
                $('.slider-right').css('opacity','0').css('transition','0.7s')
            });


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

            $('.activity-list').on('mouseenter', 'a', function(){
                $(this).css('color','orange').css('transition','0.7s');
                $(this).find('div').css('opacity','0.7').css('transition','0.7s');
            })
            $('.activity-list').on('mouseleave', 'a', function(){
                $(this).css('color','black').css('transition','0.7s');
                $(this).find('div').css('opacity','1').css('transition','0.7s');
            })


            $.ajax({
                url: '../data/data3.json',
                type: "GET",
                success: function(res){
                    var html1 = "";

                    for(var i = 0; i < res.length; i++){
                        // html2+= `<li></li>`;
                        $("<li></li>").appendTo($(".like-list ul"));
                        // $(".like-list ul").html(html2);
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




        })
    }
    return {
        main : main
    }
})
