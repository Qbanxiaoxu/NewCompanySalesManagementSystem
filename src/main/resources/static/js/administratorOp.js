$(function () {

    //-------------------------------进行销售人员管理
    $("#getSalesStaffByIdBtn").click(function () {
        let sId=$("#getSalesStaffByIdBox").val();
        sId=sId*1;
        getSalesStaffById(sId);
    });
    function getSalesStaffById(sid) {
        $("#salesStaffTable").find('tr').remove();
        let th='<tr>' +
            '<th>销售人员工号</th>' +
            '<th>销售人员密码</th>' +
            '<th>销售人员姓名</th>' +
            '<th>销售人员性别</th>' +
            '<th>销售人员地址</th>' +
            '<th>销售人员邮箱</th>' +
            '<th>销售人员薪资</th>' +
            '</tr>'
        $("#salesStaffTable").append(th);

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

                $("#salesStaffTable").append('<tr>'+tds+'</tr>');
                $("#salesStaffTable").css("display","block");
            }
        })
    }
    $("#getAllSalesStaffsBtn").click(function () {
        getAllSalesStaffs();
    });
    function getAllSalesStaffs() {

        $("#salesStaffTable").find('tr').remove();
        let th='<tr>' +
            '<th>销售人员工号</th>' +
            '<th>销售人员密码</th>' +
            '<th>销售人员姓名</th>' +
            '<th>销售人员性别</th>' +
            '<th>销售人员地址</th>' +
            '<th>销售人员邮箱</th>' +
            '<th>销售人员薪资</th>' +
            '</tr>'
        $("#salesStaffTable").append(th);

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

                    $("#salesStaffTable").append('<tr>'+tds+'</tr>');
                }
                $("#salesStaffTable").css("display","block");
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
                $("#salesStaffTable").find('tr').remove();
                $("#salesStaffTable").append('删除销售人员信息成功!');
            }
        });
    }
    $("#addSalesStaffBtn").click(function () {
        let name=$("#addSalesStaffNameBox").val();
        let psd=$("#addSalesStaffPsdBox").val();
        let gender=$("#addSalesStaffGenderBox").val();
        let address=$("#addSalesStaffAddressBox").val();
        let email=$("#addSalesStaffEmailBox").val();
        let salary=$("#addSalesStaffSalaryBox").val();
        salary=salary*1;
        addSalesStaff(psd,name,gender,address,email,salary);
    });
    function addSalesStaff(psd,name,gender,address,email,salary){//传的是null？？
        let salesStaff={
            'salesStaffId':null,
            'salesStaffPassword':psd,
            'salesStaffName':name,
            'salesStaffGender':gender,
            'salesStaffAddress':address,
            'salesStaffEmail':email,
            'salesStaffSalary':salary
        };
        $.ajax({
            type:'POST',
            url:'/AddSalesStaff',
            traditional:true,
            dataType:'json',
            data:JSON.stringify(salesStaff),
            contentType:'application/json;charset=UTF-8',
            success:function () {
                $("#addSalesStaffModal").css("display","none");
                getAllSalesStaffs();
            }
        });
    }

    //------------------------------进行产品管理
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
               $("#productTable").find('tr').remove();
               $("#productTable").append('删除产品信息成功!');
           }

        });
    }
    $("#addProductBtn").click(function () {
        let pName=$("#addProductName").val();
        let pDescription=$("#addProductDescription").val();
        let pPrice=$("#addProductPrice").val();
        let pInventory=$("#addProductInventory").val();
        pPrice=pPrice*1;
        pInventory=pInventory*1;
        addProduct(pName,pDescription,pPrice,pInventory);
    });
    function addProduct(name,description,price,inventory) {
        let product={
            'productId':null,
            'productName':name,
            'productDescription':description,
            'productPrice':price,
            'productInventory':inventory
        };
        $.ajax({
            type:'POST',
            url:'/AddProduct',
            traditional: true,
            data:JSON.stringify(product),
            contentType:'application/json;charset=UTF-8',
            dataType:'json',
            success:function () {
                $("#addProductModal").css("display","none");
            }
        });
    }

    //-----------------------------进行客户管理
    $("#getClientByIdBtn").click(function () {
        let cId=$("#getSalesStaffByIdBox").val();
        cId=cId*1;
        getClientById(cId);
    });
    function getClientById(cid) {
        $("#clientTable").find('tr').remove();
        let th='<tr>' +
            '<th>客户编号</th>' +
            '<th>客户密码</th>' +
            '<th>客户姓名</th>' +
            '<th>客户性别</th>' +
            '<th>客户地址</th>' +
            '<th>客户邮箱</th>' +
            '</tr>'
        $("#clientTable").append(th);

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
                $("#clientTable").append('<tr>'+tds+'</tr>');
                $("#clientTable").css("display","block");
            }
        })
    }
    $("#getAllClientsBtn").click(function () {
        getAllClients();
    });
    function getAllClients() {
        $("#clientTable").find('tr').remove();
        let th='<tr>' +
            '<th>客户编号</th>' +
            '<th>客户密码</th>' +
            '<th>客户姓名</th>' +
            '<th>客户性别</th>' +
            '<th>客户地址</th>' +
            '<th>客户邮箱</th>' +
            '</tr>'
        $("#clientTable").append(th);
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
                    $("#clientTable").append('<tr>'+tds+'</tr>');
                }
                $("#clientTable").css("display","block");
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
                $("#clientTable").find('tr').remove();
                $("#clientTable").append('删除客户信息成功!');
            }
        });
    }

    $("#addClientBtn").click(function () {
       let cPsd=$('#addClientPsd').val();
       let cName=$("#addClientName").val();
       let cGender=$("#addClientGender").val();
       let cAddress=$("#addClientAddress").val();
       let cEmail=$("#addClientEmail").val();
       addClient(cPsd,cName,cGender,cAddress,cEmail);
    });
    function addClient(psd,name,gender,address,email) {
        let client={
          'clientId':null,
          'clientPassword':psd,
          'clientName':name,
          'clientGender':gender,
          'clientAddress':address,
          'clientEmail':email
        };
        $.ajax({
            type:'POST',
            url:'AddClient',
            traditional: true,
            data:JSON.stringify(client),
            contentType:'application/json;charset=UTF-8',
            dataType:'json',
            success:function () {
                $("#addClientModal").css("display","none");
            }
        });
    }

    //-------------------------------进行订单管理-----------------------
    $("#getOrderByIdBtn").click(function () {
        let oId=$("#getOrderByIdBox").val();
        oId=oId*1;
        getOrderById(oId);
    });
    function getOrderById(oid) {
        $("#orderTable").find('tr').remove();
        let th='<tr>' +
            '<th>订单编号</th>' +
            '<th>订单时间</th>' +
            '<th>下单客户</th>' +
            '<th>负责销售人员</th>' +
            '<th>消费总金额</th>' +
            '</tr>'
        $("#orderTable").append(th);
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
                    '<td>'+data.consumption+'</td>';
                $("#orderTable").append('<tr>'+tds+'</tr>');
                $("#orderTable").css("display","block");
            }
        });
    }
    $("#getAllOrdersBtn").click(function () {
        getAllOrders();
    });
    function getAllOrders() {
        $("#orderTable").find('tr').remove();
        let th='<tr>' +
            '<th>订单编号</th>' +
            '<th>订单时间</th>' +
            '<th>下单客户</th>' +
            '<th>负责销售人员</th>' +
            '<th>消费总金额</th>' +
            '</tr>'
        $("#orderTable").append(th);
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
                        '<td>'+data[i].consumption+'</td>';
                    $("#orderTable").append('<tr>'+tds+'</tr>');
                }
                $("#orderTable").css("display","block");
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
                $("#orderTable").find('tr').remove();
                $("#orderTable").append('删除订单信息成功!');
            }
        });
    }
    $("#addOrderBtn").click(function () {
       let oTime=$("#addOrderTime").val();
       let oClient=$("#addOrderClientId").val();
       let oSales=$("#addOrderSalesStaffId").val();
       let oConsumption=$("#addOrderConsumption").val();
       oConsumption=oConsumption*1;
       addOrder(oTime,oClient,oSales,oConsumption);
    });
    function addOrder(time,client,sales,consumption) {
        let order={
            'orderId':null,
            'orderTime':time,
            'orderClientId':client,
            'orderSalesStaffId':sales,
            'orderConsumption':consumption
        };
        $.ajax({
            type:'POST',
            url:'/AddOrder',
            traditional: true,
            data:JSON.stringify(order),
            contentType:'application/json;charset=UTF-8',
            dataType:'json',
            success:function () {
                $("#addOrderModal").css("display","none");
            }
        });
    }
});

$(document).ready(() => {

    var nm=getUrlParam('username');
    var pwd=getUrlParam('password');
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }

    $("#queryPersonalInfo").click(function () {
        document.getElementById("orderTable").innerHTML=""
        document.getElementById("salesStaffTable").innerHTML=""
        document.getElementById("productTable").innerHTML=""
        document.getElementById("clientTable").innerHTML=""
        document.getElementById("personalTable").innerHTML=""
        // alert(nm+"\n"+pwd);
        $.post("/PersonalInfo",
            {
                object: "Administrator",
                username:nm,
                password:pwd,
            },

            function (data, status) {
                if (status === "success") {
                    let personalList = JSON.parse(data);
                    let html = "<tr><th colspan=\"5\">个人信息</th></tr><tr><td>编号</td><td>姓名</td><td>性别</td><td>邮箱</td><td>住址</td></tr>"

                    for (let i = 0; i < personalList.length; i++) {
                        let personal = personalList[i];
                        html += "<tr>";
                        html += "<td>" + personal.administratorId + "</td>";
                        html += "<td>" + personal.administratorName + "</td>";
                        html += "<td>" + personal.administratorGender + "</td>";
                        html += "<td>" + personal.administratorEmail + "</td>";
                        html += "<td>" + personal.administratorAddress + "</td>";
                        html += "</tr>";
                    }
                    document.getElementById("personalTable").innerHTML=html;
                    // $("#personalTable").append(html);
                } else {
                    alert(data + "\n" + status)
                }
            });
    });
});