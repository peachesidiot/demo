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
    var contact = $.trim($("#contact").val());
    var city = $.trim($("#city").val());
    var phone = $.trim($("#phone").val());
    var position=$.trim($("#position").val());
    var website=$.trim($("#website").val());
    var company_info=$.trim($("#company_info").val());
    var product=$.trim($("#product").val());
    var work=$.trim($("#work").val());
    var know_us=$.trim($("#know_us").val());
   
    //alert(star);

   if (company == '') {
    layer.tips('Please enter company name', '#company', { time: 1000, tips: [1,'#dd2727'] });
    $('#company').focus();
   
    }else if (city == '') {
        layer.msg('Please select a country');
          $('#city').focus();
    }
    else if (contact == '') {
        layer.tips('Please enter your contact', '#contact', { time: 1000, tips: [1,'#dd2727'] });
        $('#contact').focus();
       
    } else if( phone==''   ){
        layer.tips('Please enter the contact number', '#phone', { time: 1000, tips: [1,'#dd2727'] });
        $('#phone').focus();
    }
   else if( phone==''   ){
    layer.tips('Please enter the contact number', '#phone', { time: 1000, tips: [1,'#dd2727'] });
    $('#phone').focus();
}
    else  if (email == '' || !is_email(email) ) {
    layer.tips('Please enter the correct email address', '#email', { time: 1000, tips: [1,'#dd2727'] });
    $('#email').focus();
    } 
    else  if (product=='' ) {
        layer.tips('Please select product preference', '#product', { time: 1000, tips: [1,'#dd2727'] });
        $('#product').focus();
     }      
    else if (work == '') {
        layer.msg('Be Urovo partner You would like to work');
          $('#work').focus();
     }else if (know_us == '') {
        layer.msg('How did you hear about us');
        $('#know_us2').focus();  
    
    } else {
        //提交数据
		var index = layer.load(2, {time: 10*1000});
       
        $.ajax({
            url: url_index_submit,
            type: "POST",
            cache: false,
            data: {company: company, phone: phone,detail:detail,email:email,position:position,website:website,work:work,know_us:know_us,company_info:company_info,product:product,contact:contact,city:city},
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