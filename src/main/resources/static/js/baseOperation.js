$(function () {
    // 隐藏二级标题
    $(".hide").hide();
    $(".menu-t1").click(function(){
        $(".hide").slideUp();
        $(this).next().slideToggle();
    });
    $(".menu-t2").click(function () {
        $("#resultBlock").css("display","block");
    });
    // 点击菜单栏触发产品管理事件
    $("#queryProduct").click(function () {
        $("#queryProductTable").css("display","block");
    });
    $("#delProduct").click(function () {
        $("#delProductTable").css("display","block");
    });
    $("#modifyProduct").click(function () {
        $("#modifyProductTable").css("display","block");
    });
    $("#showModifyProductModalBtn").click(function () {
        $("#modifyProductModal").css("display","block");

    });
    $("#addProduct").click(function () {
        $("#addProductModal").css("display","block");
    });

    //点击菜单栏触发客户管理事件
    $("#queryClient").click(function () {
        $("#queryClientTable").css("display","block");
    });
    $("#delClient").click(function () {
        $("#delClientTable").css("display","block");
    });
    $("#modifyClient").click(function () {
        $("#modifyClientTable").css("display","block");
    });
    $("#showModifyClientModalBtn").click(function () {
        $("#modifyClientModal").css("display","block");

    });
    $("#addClient").click(function () {
        $("#addClientModal").css("display","block");
    });
    //点击菜单栏触发订单管理事件
    $("#queryOrder").click(function () {
        $("#queryOrderTable").css("display","block");
    });
    $("#delOrder").click(function () {
        $("#delOrderTable").css("display","block");
    });
    $("#modifyOrder").click(function () {
        $("#modifyOrderTable").css("display","block");
    });
    $("#showModifyOrderModalBtn").click(function () {
        $("#modifyOrderModal").css("display","block");

    });
    $("#addOrder").click(function () {
        $("#addOrderModal").css("display","block");
    });
    $(".close").click(function () {
        // $("#updateProductModal").css("display","none");
        $(".modal").css("display","none");
        $("#resultBlock").css("display","none");
    });
    $(".functionTableClose").click(function () {
        $(".functionTable").css("display","none");
        $("#resultBlock").css("display","none");
    });

    $(".resultClose").click(function () {
        $("#resultBlock").css("display","none");
    });

    let username=getUrlParam('username');
    let psd=getUrlParam('password');
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
    $("#displayUsername").append(username);

    $("#getProductByIdBtn").click(function () {
        let pId=$("#getProductByIdBox").val();
        pId=pId*1;
        getProductById(pId);
    });
    function getProductById(pid) {
        $("#resultTable").find('tr').remove();
        let th='<tr>' +
            '<th>产品编号</th>' +
            '<th>产品名称</th>' +
            '<th>产品描述</th>' +
            '<th>产品价格</th>' +
            '<th>产品库存量</th>' +
            '</tr>'
        $("#resultTable").append(th);

        $.ajax({
            type:'POST',
            url:'/Find',
            dataType:'json',
            data:{'object':'Product','ID':pid},
            success:function (data) {
                //alert(data);

                let tds='';
                tds='<td>'+data.productId+'</td>'+
                    '<td>'+data.productName+'</td>'+
                    '<td>'+data.productDescription+'</td>'+
                    '<td>'+data.productPrice+'</td>'+
                    '<td>'+data.productInventory+'</td>';
                $("#resultTable").append('<tr>'+tds+'</tr>');
                $("#resultTable").css("display","block");
            },
            error:function (err) {
                console.log(err.statusText);
                console.log('fucking error');
            }
        });
    }
    $("#getAllProductsBtn").click(function () {
        getAllProducts();
    });
    function getAllProducts() {
        $("#resultTable").find('tr').remove();
        let th='<tr>' +
            '<th>产品编号</th>' +
            '<th>产品名称</th>' +
            '<th>产品描述</th>' +
            '<th>产品价格</th>' +
            '<th>产品库存量</th>' +
            '</tr>'
        $("#resultTable").append(th);
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
                        $("#resultTable").append('<tr>'+tds+'</tr>');
                    }
                    $("#resultTable").css("display","block");
                }
            }
        );
    }
})