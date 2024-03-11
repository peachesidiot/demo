/**
 * 登陆页面JS
 * Created by www.szfangwei.cn on 2015-9-18
 */

 $(function(){

  $('#btn').click(function(){
    feedback2();
  })


})

function feedback2() {
 
    var company = $.trim($("#company").val());

    var email = $.trim($("#email").val());
    var detail = $.trim($("#detail").val());
    var realname = $.trim($("#realname").val());
    var phone = $.trim($("#phone").val());
    var city = $.trim($("#city").val());
    var device_sn = $.trim($("#device_sn").val());
    //alert(star);

     if (realname == '') {
    layer.tips('Please enter name', '#realname', { time: 1000, tips: [1,'#dd2727'] });
    $('#realname').focus();
   
    }
    else  if (email == '' || !is_email(email) ) {
    layer.tips('Please enter the correct email address', '#email', { time: 1000, tips: [1,'#dd2727'] });
    $('#email').focus();
    } else if (city == '') {
        layer.msg('Please select a country');
          $('#type').focus();
    }
    else if (company == '') {
        layer.tips('Please enter company name', '#company', { time: 1000, tips: [1,'#dd2727'] });
        $('#company').focus();     
    }
    else if( phone==''   ){
    layer.tips('Please enter the contact number', '#phone', { time: 1000, tips: [1,'#dd2727'] });
    $('#phone').focus();
    }else  if (detail == '') {
  
   layer.tips('Please enter your requirement', '#detail', { time: 1000, tips: [1,'#dd2727'] });
       $('#detail').focus();
     
   } 
    else {
        //提交数据
		var index = layer.load(2, {time: 10*1000});
       
        $.ajax({
            url: url_index_submit,
            type: "POST",
            cache: false,
            data: {realname: realname, phone: phone,detail:detail,email:email,city:city,company:company,device_sn:device_sn},
            success: function (val) {
               
                if (val['status'] == '1') {
					layer.msg('successfully!',{time:1*1000},function(){
                    var login_url = val['url'];
                     setTimeout(document.location =login_url,2000);
                    });
                        layer.close(index);
                }
                else {
                  
					layer.msg(val['info'], {icon: 5});
					layer.close(index);
                }
            },
            error: function () {
              layer.msg('Error!', {icon: 5});
				layer.close(index); 
            }
        });
    }
}


function is_phone(e) {
    var pattern = /^1[3|5|7|8|][0-9]{9}$/;
    return pattern.test(e);
}
function is_email(e) {
    var pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return pattern.test(e);
}


function is_fax(e){

    var pattern = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
    return pattern.test(e);
}