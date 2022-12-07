$(function () {

    $(".hide").hide();
    $(".menu-t1").click(function(){
        $(".hide").slideUp();
        $(this).next().slideToggle();
    });
    // $(".menu-t2").click(function () {
    //     $("#resultBlock").css("display","block");
    // });
    //-------------------------------进行个人信息管理
    let username=getUrlParam('username');
    let password=getUrlParam('password');
    // document.getElementById("personInfo").innerHTML="<input type=\"hidden\" id=\"password\" name=\"password\" value=\""+password+"\""+">";
    // document.getElementById("personInfo").innerHTML="<input type=\"hidden\" id=\"username\" name=\"username\" value=\""+username+"\""+">";
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }

    $("#displayUsername").append(username);

    $("#getProductByIdBtn").click(function () {
        let pId=$("#getProductByIdBox").val();
        pId=pId*1;
        getProductById(pId);
    });
    function getProductById(pid) {
        $("#productTable").find('tr').remove();
        let th='<tr>' +
            '<th>产品编号</th>' +
            '<th>产品名称</th>' +
            '<th>产品描述</th>' +
            '<th>产品价格</th>' +
            '<th>产品库存量</th>' +
            '</tr>'
        $("#productTable").append(th);
        $.ajax({
            type:'POST',
            url:'/Find',
            dataType:'json',
            data:{'object':'Product','ID':pid},
            success:function (data) {
                let product=JSON.parse(data);
                let tds='';
                tds='<td>'+product.productId+'</td>'+
                    '<td>'+product.productName+'</td>'+
                    '<td>'+product.productDescription+'</td>'+
                    '<td>'+product.productPrice+'</td>'+
                    '<td>'+product.productInventory+'</td>';
                $("#productTable").append('<tr>'+tds+'</tr>');
                $("#productTable").css("display","block");
            },
            error:function (e) {
              alert(e.errorText);
            }
        });
    }
    $("#getAllProductsBtn").click(function () {
        getAllProducts();
    });
    function getAllProducts() {
        $("#productTable").find('tr').remove();
        let th='<tr>' +
            '<th>产品编号</th>' +
            '<th>产品名称</th>' +
            '<th>产品描述</th>' +
            '<th>产品价格</th>' +
            '<th>产品库存量</th>' +
            '</tr>'
        $("#productTable").append(th);
        $.ajax({
                type:'POST',
                url:'/Query',
                dataType: 'json',
                data:{'object':'Product'},
                success:function (data){
                    for(let i in data){
                        let tds='';
                        tds='<td>'+data[i].productId+'</td>'+
                            '<td>'+data[i].productName+'</td>'+
                            '<td>'+data[i].productDescription+'</td>'+
                            '<td>'+data[i].productPrice+'</td>'+
                            '<td>'+data[i].productInventory+'</td>';
                        $("#productTable").append('<tr>'+tds+'</tr>');
                    }
                    $("#productTable").css("display","block");
                }
            }
        );
    }
});
