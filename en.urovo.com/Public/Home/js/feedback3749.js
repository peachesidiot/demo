/**
 * 登陆页面JS
 * Created by www.szfangwei.cn on 2015-9-18
 */

 $(function(){

  $('#btn').click(function(){
    feedback();
  })

  $('#btn2').click(function(){
    feedback2();
  })

})

function feedback() {
 
    var company = $.trim($("#company").val());
  
    var zhiw = $.trim($("#job").val());
    var email = $.trim($("#email").val());
    var detail = $.trim($("#detail").val());
    var realname = $.trim($("#realname").val());
    var region =$.trim($("#region").val());
    var country =$.trim($("#country").val());
    var phone = $.trim($("#phone").val());
    var product=$.trim($("#product").val());

    var industry=$.trim($("#industry").val());
    var type = $.trim($("#type").val());
    var sn = $.trim($("#sn").val());
    var code = $.trim($("#code").val());
    //alert(star);
  
    if (type == '') {
     layer.msg('Please select the type of consultation');
       $('#type').focus();
    }else if( type=='Technical Support' &&  sn==''){
        
        layer.msg('Please enter SN of Device(Device ID)');
        $('#sn').focus();

    }else if( type=='TQM Compliance' &&  product==''){
        
        layer.msg('Please select Product Model');
        $('#product').focus();

    }else if (region == '') {
        layer.msg('Please select the region');
        $('#region').focus();     
    }else if (country == '') {
        layer.msg('Please select the country');
        $('#country').focus();     
    }else if (realname == '') {
    layer.tips('Please enter name', '#realname', { time: 1000, tips: [1,'#dd2727'] });
    $('#realname').focus();
    }
   else if (company == '') {
        layer.tips('Please enter company name', '#company', { time: 1000, tips: [1,'#dd2727'] });
        $('#company').focus();     
    } else  if (email == '' || !is_email(email) ) {
        layer.tips('Please enter the Company Email', '#email', { time: 1000, tips: [1,'#dd2727'] });
        $('#email').focus();
   }else  if (detail == '') {
  
   layer.tips('Please enter your requirement', '#detail', { time: 1000, tips: [1,'#dd2727'] });
       $('#detail').focus();
     
   } else  if (code == '') {
  
    layer.tips('Please enter  Verification Code', '#code', { time: 1000, tips: [1,'#dd2727'] });
        $('#code').focus();
      
    } 
    else {
        //提交数据
		var index = layer.load(2, {time: 10*1000});
        $('#btn').prop('disabled',true);
        $.ajax({
            url: url_index_submit,
            type: "POST",
            cache: false,
            data: {region:region,realname: realname, phone: phone,detail:detail,email:email,type:type,zhiw:zhiw,country:country,company:company,product:product,industry:industry,sn:sn,code:code},
            success: function (val) {
               
                if (val['status'] == '1') {
					layer.msg('successfully!',{time:1*1000},function(){
                    var login_url = val['url'];
                     setTimeout(document.location =login_url,2000);
                    });
                        layer.close(index);
                }
                else {
                    $('#btn').prop('disabled',false);
					layer.msg(val['info'], {icon: 5});
                    $('#verify').click();
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



function feedback2() {
 
    var company = $.trim($("#company2").val());
  
    var zhiw = $.trim($("#job2").val());
    var email = $.trim($("#email2").val());
    var detail = $.trim($("#detail2").val());
    var realname = $.trim($("#realname2").val());
    var region =$.trim($("#region2").val());
    var country =$.trim($("#country2").val());
    var phone = $.trim($("#phone2").val());
    var product=$.trim($("#product2").val());

    var industry=$.trim($("#industry2").val());
    var type = $.trim($("#type2").val());

    //alert(star);
    var sn = $.trim($("#sn2").val());
    var code = $.trim($("#code2").val());
    if (type == '') {
     layer.msg('Please select the type of consultation');
       $('#type2').focus();
    }else if( type=='Technical Support' &&  sn==''){
        layer.msg('Please enter SN of Device(Device ID)');
        $('#sn2').focus();

    }else if( type=='TQM Compliance' &&  product==''){
        
        layer.msg('Please select Product Model');
        $('#product2').focus();

    }else if (region == '') {
        layer.msg('Please select the region');
        $('#region2').focus();     
    }else if (country == '') {
        layer.msg('Please select the country');
        $('#country2').focus();     
    }else if (realname == '') {
    layer.tips('Please enter name', '#realname', { time: 1000, tips: [1,'#dd2727'] });
    $('#realname2').focus();
    }
   else if (company == '') {
        layer.tips('Please enter company name', '#company', { time: 1000, tips: [1,'#dd2727'] });
        $('#company2').focus();     
    } else  if (email == '' || !is_email(email) ) {
        layer.tips('Please enter the Company Email', '#email2', { time: 1000, tips: [1,'#dd2727'] });
        $('#email2').focus();
   }else  if (detail == '') {
  
   layer.tips('Please enter your requirement', '#detail', { time: 1000, tips: [1,'#dd2727'] });
       $('#detail2').focus();
     
   } 
   else  if (code == '') {
  
    layer.tips('Please enter  Verification Code', '#code2', { time: 1000, tips: [1,'#dd2727'] });
        $('#code2').focus();
      
    } 
    else {
        //提交数据
		var index = layer.load(2, {time: 10*1000});
        $('#btn2').prop('disabled',true);
        $.ajax({
            url: url_index_submit,
            type: "POST",
            cache: false,
            data: {region:region,realname: realname, phone: phone,detail:detail,email:email,type:type,zhiw:zhiw,country:country,product:product,company:company,industry:industry,sn:sn,code:code},
            success: function (val) {
               
                if (val['status'] == '1') {
					layer.msg('successfully!',{time:1*1000},function(){
                    var login_url = val['url'];
                     setTimeout(document.location =login_url,2000);
                    });
                        layer.close(index);
                }
                else {
                    $('#btn2').prop('disabled',false);
					layer.msg(val['info'], {icon: 5});
                    $('#verify2').click();
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