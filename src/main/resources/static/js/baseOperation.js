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
        document.getElementById("productTable").innerHTML='';
        let pId=$("#getProductByIdBox").val();
        pId=pId*1;
        alert(pId);
        $.post(
            '/Find',
            {
                object:'Product',
                ID:pId,
            },
            function (data, status) {
                if (status === "success") {
                    let productList = JSON.parse(data);
                    let html='';
                    for (let i = 0; i < productList.length; i++) {
                        let product = productList[i];
                        html += "<tr>";
                        html +=" <td class='label'>产品编号</td>"
                        html += "<td>" + product.productId+ "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +=" <td class='label'>产品名称</td>";
                        html += "<td>" + product.productName + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +=" <td class='label'>产品描述</td>";
                        html += "<td>" +product.productDescription + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +=" <td class='label'>产品价格</td>";
                        html += "<td>" + product.productPrice + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +=" <td class='label'>产品库存量</td>";
                        html += "<td>" +product.productInventory + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                    }
                    document.getElementById("productTable").innerHTML=html;
                    $("#productTable").css("display","block");
                } else {
                    alert(data + "\n" + status)
                }
            }
        );
    });

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
                    $("#resultBlock").css("display","block");
                    $("#productTable").css("display","block");
                }
            }
        );
    }
});
