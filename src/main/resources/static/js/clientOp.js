$(function () {
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
    $("#")
});