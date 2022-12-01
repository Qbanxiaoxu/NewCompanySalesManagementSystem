$(function (){
    //获取登录人的用户名和密码
    let userName=getUrlParam('username');
    let psd=getUrlParam('password');
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
    //显示个人信息
    $("#selfInformationManagement").click("click",function () {
        $("#selfInformationManagementBlock").css("display","block");
        $.post(
            "/Find",
            {object:'Administrator'},
            function (data) {
                $("#")
            }
        )

    })
    //修改个人信息
    $("#showModifyInformationForm").click("click",function () {
        $("#modifySelfInformationForm").css("display",block);

        $("#modifySelfInformationBtn").click("click",function () {
            let id=null;
            let name=$("#modifySelfName").val();
            let psd=$("#modifySelfPsd").val();
            let address=$("#modifySelfAddress").val();
            let gender=$("#modifySelfGender").val();
            $.post(
                '/ModifyAdministrator',
                {},
            )
        });
    });

    //获取所有员工信息
    $("#getAllStaffBtn").click("click",function () {
        $.post(
            "/Query",
            {object:"SalesStaff"},
            function(data){
                $("#showStaffTable").find('tr').remove();
                for(i in data){
                    var tds;
                    tds='<td>'+data[i].salesStaffId+'</td>'+
                        '<td>'+data[i].salesStaffPassword+'</td>'+
                        '<td>'+data[i].salesStaffName+'</td>'+
                        '<td>'+data[i].salesStaffGender+'</td>'+
                        '<td>'+data[i].salesStaffAddress+'</td>'+
                        '<td>'+data[i].salesStaffEmail+'</td>'+
                        '<td>'+data[i].salesStaffSalary+'</td>';
                    $("#showStaffTable").append('<tr>'+tds+'</tr>');
                }
            }
        )
    });
    //通过id获取员工信息
    $("#getStaffByIdBtn").click("click",function () {
        let sId=$("#searchStaffBox").val();
        alert(sId);
        $.post(
            "/Find",
            {object:"SalesStaff"},
            function (data) {
                var tds;
                tds='<td>'+data.salesStaffId+'</td>'+
                    '<td>'+data.salesStaffPassword+'</td>'+
                    '<td>'+data.salesStaffName+'</td>'+
                    '<td>'+data.salesStaffGender+'</td>'+
                    '<td>'+data.salesStaffAddress+'</td>'+
                    '<td>'+data.salesStaffEmail+'</td>';
                $("#showStaffTable").append('<tr>'+tds+'</tr>');
            }
        )
    });
    //通过编号删除员工
    $("#delStaffBtn").click("click",function () {
        let sId=$("#delStaffBox").val();
        $.post(
            "/Delete",
            {object:SalesStaff,ID:sId}
        )
    });
    //新增员工信息
    $("#showInsertStaffBtn").click("click",function () {
        $("#insertStaffForm").css("display","block");
        $("#insertStaffBtn").click("click",function () {
            let id=null;
            let name=$("#insertStaffName").val();
            let address=$("#insertStaffAddress").val();
            let gender=$("#insertStaffGender").val();
            let salary=$("#insertStaffSalary").val();
            $.post(
                '/AddSalesStaff',
            )
        })
    });
    //修改员工信息
    $("#showModifyStaffBtn").click("click",function () {
        $("#modifyStaffForm").css("display","block");
        $("#modifyStaffBtn").click("click",function () {
            let id=null;
            let name=$("#modifyStaffName").val();
            let address=$("#modifyStaffAddress").val();
            let salary=$("modifyStaffSalary").val();
            let email=$("modifyStaffEmail").val();
            $.post(
                '/ModifySalesStaff',
            )
        })
    });
    //显示所有客户
    $("#getAllClientBtn").click("click",function () {
        $.post(
            '/Query',
            {object:'Client'},
            function (data) {
                $("#showClientTable").find('tr').remove();
                for(i in data)
                {
                    let tds;
                    tds='<td>'+data[i].clientId+'</td>'+
                        '<td>'+data[i].clientPassword+'</td>'+
                        '<td>'+data[i].clientName+'</td>'+
                        '<td>'+data[i].clientGender+'</td>'+
                        '<td>'+data[i].clientAddress+'</td>'+
                        '<td>'+data[i].clientEmail+'</td>';
                    $("#showClientTable").append('<tr>'+tds+'</tr>');
                }
            }
        )
    });
    //通过客户编号显示客户
    $("#getClientByIdBtn").click("click",function () {
        let cId=$("#searchClientBox").val();
        $.post(
          '/Find',
            {object:"Client",ID:cId},
            function (data) {
                $("#showClientTable").find('tr').remove();
                let tds;
                tds='<td>'+data[i].clientId+'</td>'+
                    '<td>'+data[i].clientPassword+'</td>'+
                    '<td>'+data[i].clientName+'</td>'+
                    '<td>'+data[i].clientGender+'</td>'+
                    '<td>'+data[i].clientAddress+'</td>'+
                    '<td>'+data[i].clientEmail+'</td>';
                $("#showClientTable").append('<tr>'+tds+'</tr>');
            }
        );
    });
    //通过客户编号删除客户
    $("#delClientBtn").click("click",function () {
        let cId=$("#delClientBox").val();
        $.post(
            '/Delete',
            {object:"Client",ID:cId},
        );
    })
    $("#showInsertClientBtn").click("click",function(){
       $("#insertClientForm").css("display","block");
       $("#insertClientBtn").click("click",function () {
           $.post(
               '/AddClient',
           )
       })
    });
    $("#showModifyClientBtn").click("click",function(){
        $("#modifyClientForm").css("display","block");
        $("#modifyClientBtn").click("click",function () {
            $.post(
                '/ModifyClient'
            )
        })
    });

    //获取所有产品信息
    $("#getAllBtn").click("click",function () {
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
    });
    //通过产品编号获取产品信息
    $("#getProductByIdBtn").click("click",function () {
        let pId=$("#searchBox").val();$.post(
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

    });
    //通过编号删除产品信息
    $("#delProductBtn").click("click",function () {
        let pId=$("#delBox").val();
        $.get(
            "/Delete",
            {object:'Product',ID:pId}
        )
    });
    //插入新产品
    $("#showInsertProductBtn").click("click",function () {
        $("#insertProductForm").css("display","block");
    });
    $("#insertBtn").click("click",function () {
        insertProduct();
    });
    function insertProduct() {
        let name=$("#insertName").val();
        let description=$("#insertDescription").val().parseFloat();
        let price=$("#insertPrice").val();
        let inventory=$("#insertInventory").val().parseInt();
        $.post(
            '/AddProduct',
        )
    }
    //修改产品信息
    $("#showModifyBtn").click("click",function () {
        $("#modifyProductForm").css("display","block");
        $("#modifyBtn").click("click",function () {
            let name=$("#modifyName").val();
            let description=$("#modifyDescription").val().parseFloat();
            let price=$("#modifyPrice").val();
            let inventory=$("#modifyInventory").val().parseInt();
            $.post(
                '/ModifyProduct'
            )
        });
    });

    //获取所有订单
    $("#getAllOrderBtn").click("click",function () {
        $.post(
            '/Query',
            {object:"Order"},
            function (data) {
                $("#showOrderTable").find('tr').remove();
                for (i in data){
                    let tds;
                    tds='<td>'+data[i].orderId+'</td>'+
                        '<td>'+data[i].orderTime+'</td>'+
                        '<td>'+data[i].clientId+'</td>'+
                        '<td>'+data[i].salesStaffId+'</td>'+
                        '<td>'+data[i].comsumption+'</td>';
                    $("#showOrderTable").append('<tr>'+tds+'</tr>');
                }
            },
            'json');
    });
    //通过订单编号获取订单
    $("#getOrderByIdBtn").click("click",function () {
        let oId=$("#getOrderByIdBtn").val();
        $.post(
            "/Find",
            {object:'Order',ID:'oId'},
            function (data) {
                $("#showOrderTable").find('tr').remove();
                tds='<td>'+data.orderId+'</td>'+
                    '<td>'+data.orderTime+'</td>'+
                    '<td>'+data.clientId+'</td>'+
                    '<td>'+data.salesStaffId+'</td>'+
                    '<td>'+data.comsumption+'</td>';
                $("#showOrderTable").append('<tr>'+tds+'</tr>');
            },
            'json'
        );
    })
    //通过订单编号删除订单
    $("#delOrderBtn").click("click",function () {
        let oId=$("#getOrderByIdBtn").val();
        $.post(
            '/Delete',
            {object:'Order',ID:oId}
        )
    });
    //新增订单
    $("#showInsertOrderBtn").click("click",function () {
        $("#insertOrderForm").css("display","block");
        $("#insertOrderBtn").click("click",function () {
            $.post(
                '/AddOrder',
            )
        })
    })
    //修改订单
    $("#showModifyOrderBtn").click("click",function () {
        $("modifyOrderForm").css("display","block");
        $("#modifyOrderBtn").click("click",function () {
            $.post(
                '/ModifyOrder',
            )
        })
    })
});