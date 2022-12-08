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
        $("#personalTable").css("display","block");
        // document.getElementById("orderTable").innerHTML=""
        // document.getElementById("salesStaffTable").innerHTML=""
        // document.getElementById("productTable").innerHTML=""
        // document.getElementById("clientTable").innerHTML=""
        // document.getElementById("personalTable").innerHTML=""
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
                    let html='';
                    for (let i = 0; i < personalList.length; i++) {
                        let personal = personalList[i];
                        html += "<tr>";
                        html +="<td class='label'>ID</td>"
                        html += "<td>" + personal.administratorId + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>密码</td>"
                        html += "<td>" + personal.administratorPassword + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>用户名</td>"
                        html += "<td>" + personal.administratorName + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>性别</td>"
                        html += "<td>" + personal.administratorGender + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>邮箱</td>"
                        html += "<td>" + personal.administratorEmail + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>地址</td>"
                        html += "<td>" + personal.administratorAddress + "</td>";
                        html += "</tr>";
                    }
                    document.getElementById("personalTable").innerHTML=html;
                    $("#personalInformation").css("display","block");
                    // $("#personalTable").append(html);
                } else {
                    alert(data + "\n" + status)
                }
            });
    });

    $("#modifyPersonalInformationBtn").click(function () {
       let ID=$("#modifyPersonalIDBox").val();
       ID=Number(ID);
       let name=$("#modifyPersonalNameBox").val();
       let psd=$("#modifyPersonalPsdBox").val();
       let gender=$("#modifyPersonalGenderBox").val();
       let address=$("#modifyAddressBox").val();
       let email=$("#modifyPersonalEmailBox").val();
       $.post(
           '/ModifyAdministrator',
           {
               administratorId:ID,
               administratorPassword:psd,
               administratorName:name,
               administratorGender:gender,
               administratorAddress:address,
               administratorEmail:email,
           },
           function (status) {
               if(status==="success"){
                   alert("修改信息成功");
               }
           }
       );
    });
    //-------------------------------进行销售人员管理
    $("#getSalesStaffByIdBtn").click(function () {
        // document.getElementById("salesStaffTable").innerHTML='';
        let sId=$("#getSalesStaffByIdBox").val();
        sId=sId*1;
        $.post(
            '/Find',
            {
                object:'SalesStaff',
                ID:sId
            },
            function (data,status) {
                if (status === "success") {
                    let salesStaffList = JSON.parse(data);
                    // let html = "<tr><th colspan=\"5\">个人信息</th></tr><tr><td>编号</td><td>姓名</td><td>性别</td><td>邮箱</td><td>住址</td></tr>"
                    let html='';
                    for (let i = 0; i < salesStaffList.length; i++) {
                        let salesStaff = salesStaffList[i];
                        html += "<tr>";
                        html +="<td class='label'>ID</td>"
                        html += "<td>" + salesStaff.salesStaffId + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>密码</td>"
                        html += "<td>" + salesStaff.salesStaffPassword + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +=" <td class='label'>用户名</td>"
                        html += "<td>" + salesStaff.salesStaffName + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>性别</td>"
                        html += "<td>" + salesStaff.salesStaffGender + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>邮箱</td>"
                        html += "<td>" + salesStaff.salesStaffEmail + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>地址</td>"
                        html += "<td>" + salesStaff.salesStaffAddress+ "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>薪水</td>"
                        html += "<td>" + salesStaff.salesStaffSalary + "</td>";
                        html += "</tr>"
                    }
                    document.getElementById("salesStaffTable").innerHTML=html;
                    $("#salesStaffTable").css("display","block");
                } else {
                    alert(data + "\n" + status)
                }
            }
        );
    });


    $("#getAllSalesStaffsBtn").click(function () {
        alert("查询所有销售人员");
        $("#salesStaffTable").css("display","block");
        getAllSalesStaffs();
    });
    function getAllSalesStaffs() {

        $("#salesStaffTable").find('tr').remove();
        let th='<tr>' +
            '<th>销售人员工号   </th>' +
            '<th>销售人员密码   </th>' +
            '<th>销售人员姓名   </th>' +
            '<th>销售人员性别   </th>' +
            '<th>销售人员地址   </th>' +
            '<th>销售人员邮箱   </th>' +
            '<th>销售人员薪资   </th>' +
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
                        '<td>'+data[i].salesStaffSalary+'</td>';

                    $("#salesStaffTable").append('<tr>'+tds+'</tr>');
                }
                $("#salesStaffTable").css("display","block");
            }
        });
    }
    $("#delSalesStaffBtn").click(function () {
        document.getElementById("salesStaffTable").innerHTML='';
        let sId=$("#delSalesStaffByIdBox").val();
        sId=sId*1;
        $.post(
            '/Delete',
            {
                object:'SalesStaff',
                ID:sId,
            },
            function (status) {
                if(status==="success"){
                    alert("删除销售人员信息成功");
                    $("#salesStaffTable").append("删除销售人员信息成功！");
                    $("#salesStaffTable").css("display","block");
                }
            }
        )
    });

    $("#addSalesStaffBtn").click(function () {
        let name=$("#addSalesStaffNameBox").val();

        let psd=$("#addSalesStaffPsdBox").val();
        let gender=$("#addSalesStaffGenderBox").val();
        let address=$("#addSalesStaffAddressBox").val();
        let email=$("#addSalesStaffEmailBox").val();
        let salary=$("#addSalesStaffSalaryBox").val();
        salary=Number(salary);
        alert(gender+address);
        $.post(
            '/AddSalesStaff',
            {
                salesStaffName: name,
                salesStaffPassword:psd,
                salesStaffEmail: email,
                salesStaffGender: gender,
                salesStaffAddress: address,
                salesStaffSalary: salary,
            },
            function (status) {
                if(status==="success"){
                    alert("新增销售人员成功！")
                }
            }
        )
    });

    $("#modifySalesStaffBtn").click(function () {
        let ID=$("#modifySalesStaffIdBox").val();
        ID=Number(ID);
        let name=$("#modifySalesStaffNameBox").val();

        let psd=$("#modifySalesStaffPsdBox").val();
        let gender=$("#modifySalesStaffGenderBox").val();
        let address=$("#modifySalesStaffAddressBox").val();
        let email=$("#modifySalesStaffEmailBox").val();
        let salary=$("#modifySalesStaffSalaryBox").val();
        salary=Number(salary);
        alert(gender+address);
        $.post(
            '/ModifySalesStaff',
            {
                salesStaffId: ID,
                salesStaffName: name,
                salesStaffPassword:psd,
                salesStaffEmail: email,
                salesStaffGender: gender,
                salesStaffAddress: address,
                salesStaffSalary: salary,
            },
            function (status) {
                if(status==="success"){
                    alert("新增销售人员成功！")
                }
            }
        )
    });


    //------------------------------进行产品管理
    $("#delProductBtn").click(function () {
        let pId=$("#delProductByIdBox").val();
        pId=pId*1;
        alert(pId);
        document.getElementById("productTable").innerHTML='';
        $.post(
            '/Delete',
            {
                object:'Product',
                ID:pId,
            },
            function (status) {
                if(status==="success"){
                    alert("删除产品信息成功");
                    $("#productTable").append("删除产品信息成功！");
                    $("#product Table").css("display","block");
                }
            }
        );
    });
    $("#addProductBtn").click(function () {
        let pName=$("#addProductNameBox").val();
        let pDescription=$("#addProductDescriptionBox").val();
        let pPrice=$("#addProductPriceBox").val();
        let pInventory=$("#addProductInventoryBox").val();
        pPrice=Number(pPrice);
        pInventory=Number(pInventory);
        $.post(
            '/AddProduct',
            {
                productName: pName,
                productDescription:pDescription,
                productPrice: pPrice,
                pInventory:pInventory,
            },
            function (status) {
                if(status==="success"){
                    alert("插入产品信息成功！")
                }
            }
        );
    });

    $("#modifyProductBtn").click(function () {
        let pId=$("#modifyProductIdBox").val();
        let pName=$("#modifyProductNameBox").val();
        let pDescription=$("#modifyProductDescriptionBox").val();
        let pPrice=$("#modifyProductPriceBox").val();
        let pInventory=$("#modifyProductInventoryBox").val();
        pPrice=Number(pPrice);
        pInventory=Number(pInventory);
        $.post(
            '/ModifyProduct',
            {
                productId:pId,
                productName: pName,
                productDescription:pDescription,
                productPrice: pPrice,
                pInventory:pInventory,
            },
            function (status) {
                if(status==="success"){
                    alert("更改产品信息成功！")
                }
            }
        );
    });


    //-----------------------------进行客户管理
    $("#getClientByIdBtn").click(function () {
        document.getElementById("clientTable").innerHTML='';
        let cId=$("#getClientByIdBox").val();
        cId=cId*1;
        $.post(
            '/Find',
            {
                object:'Client',
                ID:cId,
            },
            function (data, status) {
                if (status === "success") {
                    let clientList = JSON.parse(data);
                    let html='';
                    for (let i = 0; i < clientList.length; i++) {
                        let client = clientList[i];
                        html += "<tr>";
                        html +=" <td class='label'>编号</td>"
                        html += "<td>" + client.clientId + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +=" <td class='label'>密码</td>";
                        html += "<td>" + client.clientPassword + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +=" <td class='label'>姓名</td>";
                        html += "<td>" + client.clientName + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +=" <td class='label'>性别</td>";
                        html += "<td>" + client.clientGender + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +=" <td class='label'>邮箱</td>";
                        html += "<td>" + client.clientEmail + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +=" <td class='label'>地址</td>";
                        html += "<td>" + client.clientAddress + "</td>";
                        html += "</tr>";
                    }
                    document.getElementById("clientTable").innerHTML=html;
                    $("#clientTable").css("display","block");
                } else {
                    alert(data + "\n" + status)
                }
            }
        );
    });
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
        let cId=$("#delClientByIdBox").val();
        cId=cId*1;
        document.getElementById("clientTable").innerHTML='';
        $.post(
            '/Delete',
            {
                object:'Client',
                ID:cId,
            },
            function (status) {
                if(status==="success"){
                    alert("删除客户信息成功");
                    $("#clientTable").append("删除客户信息成功！");
                    $("#clientTable").css("display","block");
                }
            }
        )
    });

    $("#modifyClientBtn").click(function () {
        let ID=$("#modifyClientIdBox").val();
        ID=Number(ID);
        let name=$("#modifyClientNameBox").val();
        let psd=$("#modifyClientPsdBox").val();
        let gender=$("#modifyClientGenderBox").val();
        let address=$("#modifyClientGenderBox").val();
        let email=$("#modifyClientEmailBox").val();
        $.post(
            '/ModifyClient',
            {
                clientId:ID,
                clientPassword: psd,
                clientName: name,
                clientGender: gender,
                clientAddress: address,
                clientEmail: email,
            },
            function (status){
                if(status === "success"){
                    alert("更改成功！");
                }
            }

        )
    })
    $("#addClientBtn").click(function () {
        let cPsd=$('#addClientPsdBox').val();
        let cName=$("#addClientNameBox").val();
        let cGender=$("#addClientGenderBox").val();
        let cAddress=$("#addClientAddressBox").val();
        let cEmail=$("#addClientEmailBox").val();
        $.post(
            '/AddClient',
            {
                clientPassword:cPsd,
                clientName:cName,
                clientGender:cGender,
                clientAddress:cAddress,
                cEmail:cEmail
            },
            function (status) {
                if(status==="success"){
                    alert("添加客户信息成功！");
                }
            }
        )

    });

    //-------------------------------进行订单管理-----------------------
    $("#getOrderByIdBtn").click(function () {
        document.getElementById("orderTable").innerHTML='';
        let oId=$("#getOrderByIdBox").val();
        oId=oId*1;
        $.post(
            '/Find',
            {
                object:'Order',
                ID:oId
            },
            function (data,status) {
                if (status === "success") {
                    let orderList = JSON.parse(data);
                    let html='';
                    for (let i = 0; i < orderList.length; i++) {
                        let order= orderList[i];
                        html += "<tr>";
                        html +="<td class='label'>ID</td>"
                        html += "<td>" +order.orderId + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>时间</td>"
                        html += "<td>" + order.orderTime+ "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +=" <td class='label'>下单客户</td>"
                        html += "<td>" + order.clientId + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>负责销售</td>"
                        html += "<td>" + order.salesStaffId + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>总消费金额</td>"
                        html += "<td>" + order.consumption + "</td>";
                        html += "</tr>";
                    }
                    document.getElementById("orderTable").innerHTML=html;
                    $("#orderTable").css("display","block");
                } else {
                    alert(data + "\n" + status)
                }
            }
        );

    });

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
        alert(oId);
        document.getElementById("orderTable").innerHTML='';
        $.post(
            '/Delete',
            {
                object:'Order',
                ID:oId,
            },
            function (status) {
                if(status==="success"){
                    alert("删除订单信息成功");
                    $("#orderStaffTable").append("删除订单信息成功！");
                    $("#orderStaffTable").css("display","block");
                }
            }
        )
    });

    $("#modifyOrderBtn").click(function () {
       let id=$("#modifyOrderIdBox").val();
       let time=$("#modifyOrderTimeBox").val();
       let client=$("#modifyOrderClientBox").val();
       let sales=$("#modifyOrderSalesBox").val();
       let consumption=$("#modifyOrderConsumptionBox").val();
       consumption=Number(consumption);
       $.post(
           '/ModifyOrder',
           {
               orderId:id,
               orderTime:time,
               clientId:client,
               salesStaffId:sales,
               consumption:consumption,
           },
           function (status) {
               if(status ==="success"){
                   alert("成功");
               }
           }
       )
    });
});