define(['jquery','jquery-cookie'],function($){
    function main(){
        $(function(){
            $.ajax({
                url: '../data/data5.json',
                type: "GET",
                success: function(res){
                        for(var j = 0; j < res[0].length; j++){
                            $(`<li>
                                <div class="imgbox">
                                    <a href="">
                                        <img src="${res[0][j].img}" alt="">
                                    </a>
                                </div>
                                <p class="namebox">
                                    <a href="">${res[0][j].name}</a>
                                </p>
                                <p class="pricebox">${res[0][j].price}</p>
                            </li>`).appendTo($(".bag .clearfix"));
                        }
                },
                error: function(msg){
                    alert(msg);
                }
            })
            $.ajax({
                url: '../data/data5.json',
                type: "GET",
                success: function(res){
                        for(var j = 0; j < res[1].length; j++){
                            $(`<li>
                                <div class="imgbox">
                                    <a href="">
                                        <img src="${res[1][j].img}" alt="">
                                    </a>
                                </div>
                                <p class="namebox">
                                    <a href="">${res[1][j].name}</a>
                                </p>
                                <p class="pricebox">${res[1][j].price}</p>
                            </li>`).appendTo($(".peis .clearfix"));
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
