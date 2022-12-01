//对产品进行操作的函数
$(function () {
    function getAllProducts(){
        $.post(
            "/Query",
            {object:"Product"},
            function (data) {
                $("#showTable").find('tr').remove();
                for(i in data){
                    var tds;
                    tds='<td>'+data[i].productId+'</td>'+
                        '<td>'+data[i].productName+'</td>'+
                        '<td>'+data[i].productDescription+'</td>'+
                        '<td>'+data[i].productPrice+'</td>'+
                        '<td>'+data[i].productInventory+'</td>';
                    $("#showTable").append('<tr>'+tds+'</tr>');
                }
            }
        );
    }

    function getProductById(pId) {
        pId=$("#searchProductBox").val();
        $.post(
            "/Find",
            {object:"Product",ID:pId},
            function (data) {
                if(data!=null){
                    $("#showTable").find('tr').remove();
                    let tds;
                    tds='<td>'+data.productId+'</td>'+
                        '<td>'+data.productName+'</td>'+
                        '<td>'+data.productDescription+'</td>'+
                        '<td>'+data.productPrice+'</td>'+
                        '<td>'+data.productInventory+'</td>';
                    $("#showTable").append('<tr>'+tds+'</tr>');
                }
            },
            "json"
        );
    }
    function deleteProductById(pId){
        $.get(
            "/Delete",
            {object:'Product',ID:pId}
        )
    }
    function insertProduct() {
        let name=$("#insertName").val();
        let description=$("#insertDescription").val().parseFloat();
        let price=$("#insertPrice").val();
        let inventory=$("#insertInventory").val().parseInt();
        $.post(

        )
    }
    function modifyProduct() {
        let name=$("#modifyName").val();
        let description=$("#modifyDescription").val().parseFloat();
        let price=$("#modifyPrice").val();
        let inventory=$("#modifyInventory").val().parseInt();
    }
});

