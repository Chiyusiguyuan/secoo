define(['jquery','jquery-cookie'],function($){
    function main(){
        $(function(){
            //input样式
            $('.reg_in').focus(function(){
                $(this).css('border-color','rgba(138,0,48,1)').css('transition','0.2s');
                $(this).parents('.loginTips').css('box-shadow','0 3px 3px #ccc');
            })
            $('.reg_in').blur(function(){
                $(this).css('border-color','#dedede').css('ttransition','0.2s');
                $(this).parents('.loginTips').css('box-shadow','');
            })
            //input样式结束
            //判断用户名
            $('#usernameInput').blur(function(){
                var oUsername = $('#usernameInput').val();
                 if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(oUsername)){
                     $(this).css('border-color','red');
                     $('.username').html('请输入正确的手机号或邮箱!').css('color','red').css('font-size','14px');
                }else{
                    $('.username').css('display','none');
                    //用户名输入正确展开验证码
                    $('.kapt_show,.verifyCodeDiv').css('display','block');
                    $('#showCapt').html(testCodeWithStr(5));

                    $('#showCapt').click(function(){
                        $('#showCapt').html(testCodeWithStr(5));
                    })
                    $('#changeKapt').click(function(){
                        $('#showCapt').html(testCodeWithStr(5));
                    })

                    $('#kapt').blur(function(){
                        var oKapt = $('#kapt').val();
                        oKapt = oKapt.toLowerCase();
                        var oCapt = $('#showCapt').html();
                        oCapt = oCapt.toLowerCase();
                        if(!oKapt){
                            $(this).css('border-color','red');
                        }
                        else if (oKapt != oCapt) {
                            $(this).css('border-color','red');
                        }
                    })

                    //短信验证码
                    var oDuan ='';
                    var oDuanuser ='';
                    $('#verifyCodeBtn').click(function(){
                         oDuan = testCodeWithStr(4);
                        console.log('您的短信验证码为:'+ oDuan);
                    })
                    $('#verifyCode').blur(function(){
                        oDuanuser = $('#verifyCode').val();
                        oDuan = oDuan.toLowerCase();
                        oDuanuser = oDuanuser.toLowerCase();
                        if (!oDuanuser) {
                            $('#verifyCode').css('border-color','red');
                        }
                        else if (oDuanuser != oDuan) {
                            $(this).css('border-color','red');
                        }

                    })
                }
            })
            //判断用户名结束
            //判断密码
            $('#passwordInput').blur(function(){
                var oPassord = $('#passwordInput').val();
                if(!oPassord){
                    $(this).css('border-color','red');
                    $('.password').css('display','block').css('color','red').css('font-size','14px');

                }
                else if(oPassord.length > 18 || oPassord.length < 6){
					$('.password').html('长度应为6~18个字符').css('display','block').css('color','red').css('font-size','14px');
				}
                else{
                    $('.password').css('display','none');
                }
            })

            $('#checkedInput').blur(function(){
                var oCheckpassword = $('#checkedInput').val();
                var oPassord = $('#passwordInput').val();
                if(oCheckpassword != oPassord){
                    $('.checkpassword').html('两次输入密码不一致！').css('display','block').css('color','red').css('font-size','14px');
                }else{
                    $('.checkpassword').css('display','none');
                }
            })
            //判断密码结束
            //贵宾验证码部分
            var i = 0;
            $('.guibing').click(function(){
                if(i == 0){
                    $('#yaoqingInput').css('display','block');
                    i = 1;
                }
                else if (i == 1) {
                    $('#yaoqingInput').css('display','none');
                    i = 0;
                }
            })
            //贵宾验证码结束
            //用户协议
            
            //用户协议结束

            //函数部分
            function testCodeWithStr(n){
                var arr = [];
                for(var i = 0; i < n; i++){
                    var num = parseInt(Math.random() * 100);
                    if(num >= 0 && num <= 9){
                        arr.push(num);
                    }else if(num >= 65 && num <= 90){
                        var str = String.fromCharCode(num);
                        arr.push(str);
                    }else if(num >= 17 && num <= 42){
                        var str = String.fromCharCode(num + 80);
                        arr.push(str);
                    }else{
                        //随机出来没有用的数字，i--让他多循环一次。
                        i--;
                    }
                }
                return arr.join("");
            }
            //函数部分结束
        })
    }
    return {
        main : main
    }
})
