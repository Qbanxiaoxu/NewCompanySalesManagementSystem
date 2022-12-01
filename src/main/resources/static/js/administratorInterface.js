$(function (){
    //点击显示员工管理
    $("#staffManagement").click("click",function () {
        $("#staffManagementBlock").css("display","block");
    });
    $("#showInsertStaffBtn").click("click",function () {
        $("#insertStaffForm").css("display","block");
    });
    $("#showModifyStaffBtn").click("click",function () {
        $("#modifyStaffForm").css("display","block");
    })
    //点击显示用户管理
    $("#clientManagement").click("click",function () {
        $("#clientManagementBlock").css("display","block");
    });
    $("#showInsertClientBtn").click("click",function(){
       $("#insertClientForm").css("display","block");
    });
    $("#showModifyClientBtn").click("click",function(){
        $("#modifyClientForm").css("display","block");
    });
    //点击显示产品管理
    $("#companyManagement").click("click",function(){
        $("#orderManagementBlock").css("display","block");
    });
    $("#showInsertProductBtn").click("click",function () {
        $("#insertProductForm").css("display","block");
    });
    $("#showModifyBtn").click("click",function () {
        $("#modifyProductForm").css("display","block");
    })
    $("#getAllBtn").click("click",function () {
        getAllProducts();
    });
    $("#getProductByIdBtn").click("click",function () {
        let pId=$("#searchBox").val();
        getProductById(pId);
    });
    $("#delProductBtn").click("click",function () {
        let pId=$("#delBox").val();
        deleteProductById(pId);
    })
    $("#modifyBtn").click("click",function () {
        modifyProduct();
    })
    $("#insertBtn").click("click",function () {
        insertProduct();
    })
    //对销售人员进行操作的函数
    function getAllStaff() {
        $.post(
            "/Query",
            {object:SalesStaff},
            function(data){
                $("#showStaffTable").find('tr').remove();
                for(i in data){
                    var tds;
                    tds='<td>'+data[i].clientId+'</td>'+
                        '<td>'+data[i].clientPassword+'</td>'+
                        '<td>'+data[i].clientName+'</td>'+
                        '<td>'+data[i].clientGender+'</td>'+
                        '<td>'+data[i].clientAddress+'</td>'+
                        '<td>'+data[i].clientEmail+'</td>';
                    $("#showStaffTable").append('<tr>'+tds+'</tr>');
                }
            }
        )
    }
    function getStaffById(){
        let sId=$("#searchClientBox").val();
        $.post(
            "/Find",
            {object:"salesStaff"},
            function (data) {
                var tds;
                tds='<td>'+data.clientId+'</td>'+
                    '<td>'+data.clientPassword+'</td>'+
                    '<td>'+data.clientName+'</td>'+
                    '<td>'+data.clientGender+'</td>'+
                    '<td>'+data.clientAddress+'</td>'+
                    '<td>'+data.clientEmail+'</td>';
                $("#showStaffTable").append('<tr>'+tds+'</tr>');
            }
        )
    }
    function deleteStaffById() {
        let sId=$("#delStaffBox").val();
        $.post(
            "/Delete",
            {object:salesStaff,ID:sId}
        )
    }
    //对产品进行操作的函数
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