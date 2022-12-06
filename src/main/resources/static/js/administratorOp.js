$(function () {
    //进行销售人员管理
    $("#getSalesStaffByIdBtn").click(function () {
        let sId=$("#getSalesStaffByIdBox").val();
        sId=sId*1;
        getSalesStaffById(sId);
    });
    function getSalesStaffById(sid) {
        $("#resultTable").find('tr').remove();
        let th='<tr>' +
            '<th>销售人员工号</th>' +
            '<th>销售人员密码</th>' +
            '<th>销售人员姓名</th>' +
            '<th>销售人员性别</th>' +
            '<th>销售人员地址</th>' +
            '<th>销售人员邮箱</th>' +
            '<th>销售人员薪资</th>' +
            '</tr>'
        $("#resultTable").append(th);

        $.ajax({
            type:'POST',
            url:'/Find',
            data:{'object':'SalesStaff','ID':sid},
            success:function (data) {
                let tds='';
                tds='<td>'+data.salesStaffId+'</td>'+
                    '<td>'+data.salesStaffPassword+'</td>'+
                    '<td>'+data.salesStaffName+'</td>'+
                    '<td>'+data.salesStaffGender+'</td>'+
                    '<td>'+data.salesStaffAddress+'</td>'+
                    '<td>'+data.salesStaffEmail+'</td>'+
                    '<td>'+data.salesStaffSaraly+'</td>';

                $("#resultTable").append('<tr>'+tds+'</tr>');
                $("#resultTable").css("display","block");
            }
        })
    }
    $("#getAllSalesStaffsBtn").click(function () {
        getAllSalesStaffs();
    });
    function getAllSalesStaffs() {

        $("#resultTable").find('tr').remove();
        let th='<tr>' +
            '<th>销售人员工号</th>' +
            '<th>销售人员密码</th>' +
            '<th>销售人员姓名</th>' +
            '<th>销售人员性别</th>' +
            '<th>销售人员地址</th>' +
            '<th>销售人员邮箱</th>' +
            '<th>销售人员薪资</th>' +
            '</tr>'
        $("#resultTable").append(th);

        $.ajax({
            type:'POST',
            url:'/Query',
            dataType:'json',
            data:{'object':'SalesStaff'},
            success:function (data) {
                for(let i in data){
                    let tds='';
                    tds='<td>'+data[i].salesStaffId+'</td>'+
                        '<td>'+data[i].salesStaffPassword+'</td>'+
                        '<td>'+data[i].salesStaffName+'</td>'+
                        '<td>'+data[i].salesStaffGender+'</td>'+
                        '<td>'+data[i].salesStaffAddress+'</td>'+
                        '<td>'+data[i].salesStaffEmail+'</td>'+
                        '<td>'+data[i].salesStaffSaraly+'</td>';

                    $("#resultTable").append('<tr>'+tds+'</tr>');
                }
                $("#resultTable").css("display","block");
            }
        });
    }
    $("#delSalesStaffBtn").click(function () {
        let sId=$("#delSalesStaffByIdBox").val();
        sId=sId*1;
        delSalesStaffById(sId);
    });
    function delSalesStaffById(sid) {
        $.ajax({
            type:'POST',
            url:'/Delete',
            data:{'object':'SalesStaff','ID':pid},
            success:function () {
                $("#resultTable").find('tr').remove();
                $("#resultTable").append('删除销售人员信息成功!');
            }
        });
    }
    //进行产品管理

    $("#delProductBtn").click(function () {
       let pId=$("#delProductBox").val();
       pId=pId*1;
       delProductById(pId);

    });
    function delProductById(pid) {
        $.ajax({
           type:'POST',
           url:'/Delete',
           data:{'object':'Product','ID':pid},
           success:function () {
               $("#resultTable").find('tr').remove();
               $("#resultTable").append('删除产品信息成功!');
           }

        });
    }
    //进行客户管理
    $("#getClientByIdBtn").click(function () {
        let cId=$("#getSalesStaffByIdBox").val();
        cId=cId*1;
        getClientById(cId);
    });
    function getClientById(cid) {
        $("#resultTable").find('tr').remove();
        let th='<tr>' +
            '<th>客户编号</th>' +
            '<th>客户密码</th>' +
            '<th>客户姓名</th>' +
            '<th>客户性别</th>' +
            '<th>客户地址</th>' +
            '<th>客户邮箱</th>' +
            '</tr>'
        $("#resultTable").append(th);

        $.ajax({
            type:'POST',
            url:'/Find',
            dataType:'json',
            data:{'object':'Client','ID':cid},
            success:function (data) {
                let tds='';
                tds='<td>'+data.clientId+'</td>'+
                    '<td>'+data.clientPassword+'</td>'+
                    '<td>'+data.clientName+'</td>'+
                    '<td>'+data.clientGender+'</td>'+
                    '<td>'+data.clientAddress+'</td>'+
                    '<td>'+data.clientEmail+'</td>';
                $("#resultTable").append('<tr>'+tds+'</tr>');
                $("#resultTable").css("display","block");
            }
        })
    }
    $("#getAllClientsBtn").click(function () {
        getAllClients();
    });
    function getAllClients() {
        $("#resultTable").find('tr').remove();
        let th='<tr>' +
            '<th>客户编号</th>' +
            '<th>客户密码</th>' +
            '<th>客户姓名</th>' +
            '<th>客户性别</th>' +
            '<th>客户地址</th>' +
            '<th>客户邮箱</th>' +
            '</tr>'
        $("#resultTable").append(th);
        $.ajax({
            type:'POST',
            url:'/Query',
            dataType:'json',
            data:{'object':'Client'},
            success:function (data) {
                for (let i in data){
                    let tds='';
                    tds='<td>'+data[i].clientId+'</td>'+
                        '<td>'+data[i].clientPassword+'</td>'+
                        '<td>'+data[i].clientName+'</td>'+
                        '<td>'+data[i].clientGender+'</td>'+
                        '<td>'+data[i].clientAddress+'</td>'+
                        '<td>'+data[i].clientEmail+'</td>';
                    $("#resultTable").append('<tr>'+tds+'</tr>');
                }
                $("#resultTable").css("display","block");
            }
        })
    }
    $("#delClientBtn").click(function () {
        let cId=$("#getSalesStaffByIdBox").val();
        cId=cId*1;
        delClientById(cId);
    });
    function delClientById(cid) {
        $.ajax({
            type:'POST',
            url:'/Delete',
            data:{'object':'Client','ID':cid},
            success:function () {
                $("#resultTable").find('tr').remove();
                $("#resultTable").append('删除客户信息成功!');
            }
        });
    }
    //进行订单管理
    $("#getOrderByIdBtn").click(function () {
        let oId=$("#getOrderByIdBox").val();
        oId=oId*1;
        getOrderById(oId);
    });
    function getOrderById(oid) {
        $("#resultTable").find('tr').remove();
        let th='<tr>' +
            '<th>订单编号</th>' +
            '<th>订单时间</th>' +
            '<th>下单客户</th>' +
            '<th>负责销售人员</th>' +
            '<th>消费总金额</th>' +
            '</tr>'
        $("#resultTable").append(th);
        $.ajax({
            type:'POST',
            url:'/Find',
            dataType:'json',
            data:{'object':'Order','ID':oid},
            success:function (data) {
                let tds='';
                tds='<td>'+data.orderId+'</td>'+
                    '<td>'+data.orderTime+'</td>'+
                    '<td>'+data.clientId+'</td>'+
                    '<td>'+data.salesStaffId+'</td>'+
                    '<td>'+data.comsumption+'</td>';
                $("#resultTable").append('<tr>'+tds+'</tr>');
                $("#resultTable").css("display","block");
            }
        });
    }
    $("#getAllOrdersBtn").click(function () {
        getAllOrders();
    });
    function getAllOrders() {
        $("#resultTable").find('tr').remove();
        let th='<tr>' +
            '<th>订单编号</th>' +
            '<th>订单时间</th>' +
            '<th>下单客户</th>' +
            '<th>负责销售人员</th>' +
            '<th>消费总金额</th>' +
            '</tr>'
        $("#resultTable").append(th);
        $.ajax({
            type:'POST',
            url:'/Query',
            dataType:'json',
            data:{'object':'Order'},
            success:function (data) {
                for (let i in data){
                    let tds='';
                    tds='<td>'+data[i].orderId+'</td>'+
                        '<td>'+data[i].orderTime+'</td>'+
                        '<td>'+data[i].clientId+'</td>'+
                        '<td>'+data[i].salesStaffId+'</td>'+
                        '<td>'+data[i].comsumption+'</td>';
                    $("#resultTable").append('<tr>'+tds+'</tr>');
                }
                $("#resultTable").css("display","block");
            }
        });
    }
    $("#delOrderBtn").click(function () {
        let oId=$("#delOrderByIdBox").val();
        oId=oId*1;
        delOrderById(oId);
    });
    function delOrderById(oid) {
        $.ajax({
            type:'POST',
            url:'/Delete',
            data:{'object':'Client','ID':oid},
            success:function () {
                $("#resultTable").find('tr').remove();
                $("#resultTable").append('删除订单信息成功!');
            }
        });
    }
});