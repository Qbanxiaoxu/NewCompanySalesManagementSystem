$(document).ready(() => {



    // $("#displayPersonalInfo").click(function(){
    //     $.post("CompanyBusinessInformationManagement",
    //         {
    //             operation:"queryAdministratorInformation",
    //             identity:"administrator",
    //             ID:document.getElementById("id").value()
    //         },
    //         function(data,status){
    //             if (status =="success") {
    //                 $("#display").html("");
    //                 let personalList = JSON.parse(data);
    //                 let html = "<table style=\"width: 100%\" border='1px'> <tr><th colspan=\"5\">个人信息</th></tr><tr><td>编号</td><td>姓名</td><td>性别</td><td>邮箱</td><td>住址</td></tr>"
    //                 for (let i = 0; i < personalList.length; i++) {
    //                     let personal = personalList[i];
    //                     html += "<tr>";
    //                     html += "<td>" + personal.aid + "</td>";
    //                     html += "<td>" + personal.aname + "</td>";
    //                     html += "<td>" + personal.agender + "</td>";
    //                     html += "<td>" + personal.aemail + "</td>";
    //                     html += "<td>" + personal.aaddress + "</td>";
    //                     html += "</tr>";
    //                 }
    //                 html += "</table>"
    //                 document.getElementById("display").innerHTML = html;
    //             } else {
    //                 alert(data + "\n" + status)
    //             }
    //         });
    // });
    //
    // $("#displayProductsInfo").click(function(){
    //     $.post("ProductInformationManagement",
    //         {
    //             operation:"queryProductInformation",
    //             identity:"administrator"
    //         },
    //         function(data,status){
    //             if(status==="success") {
    //                 $("#display").html("");
    //                 let productsList = JSON.parse(data);
    //                 let html="<table style=\"width: 100%\" border=\"1px\"> <tr><th colspan=\"5\">产品信息</th></tr><tr><td>编号</td><td>名称</td><td>描述</td><td>价格</td><td>库存量</td></tr>"
    //                 for (let i = 0; i < productsList.length; i++) {
    //                     let products = productsList[i]
    //                     html += "<tr>";
    //                     html += "<td>" + products.pid + "</td>";
    //                     html += "<td>" + products.pname + "</td>";
    //                     html += "<td>" + products.pdescription + "</td>";
    //                     html += "<td>" + products.pprice + "</td>";
    //                     html += "<td>" + products.pinventory + "</td>";
    //                     html += "</tr>";
    //                 }
    //                 html+="</table>"
    //                 document.getElementById("display").innerHTML = html;
    //             }
    //             else {alert( data + "\n" + status)}
    //         });
    // });
    // $("#findProductInfo").click(() => {
    //     $("#display").html("");
    //     document.getElementById("display").innerHTML="产品编号：<input type='number' placeholder='请输入产品编号' id='productID'><input type='button' value='查询产品信息' name='findProductInfo' id='findProductInformation'>";
    //     $("#findProductInformation").click(function(){
    //         $.post("ProductInformationManagement",
    //             {
    //                 operation:"findProductInformation",
    //                 identity:"administrator",
    //                 id:document.getElementById("productID").value()
    //             },
    //             function(data,status){
    //                 if(status==="success") {
    //                     let productList = JSON.parse(data);
    //                     let html="<table style=\"width: 100%\" border='1px'> <tr><th colspan=\"5\">产品信息</th></tr><tr><td>编号</td><td>名称</td><td>描述</td><td>价格</td><td>库存量</td></tr>"
    //                     for (let i = 0; i < productList.length; i++) {
    //                         let product = productList[i];
    //                         html += "<tr>";
    //                         html += "<td>" + product.pid + "</td>";
    //                         html += "<td>" + product.pname + "</td>";
    //                         html += "<td>" + product.pdescription + "</td>";
    //                         html += "<td>" + product.pprice + "</td>";
    //                         html += "<td>" + product.pinventory + "</td>";
    //                         html += "</tr>";
    //                     }
    //                     html+="</table>"
    //                     document.getElementById("display").innerHTML = html;
    //                 }
    //                 else {alert( data + "\n" + status)}
    //             });
    //     });
    // });
    //
    // $("#displayOrdersInfo").click(function(){
    //     $.post("OrderManagement",
    //         {
    //             operation:"queryOrderInformation",
    //             identity:"administrator",
    //         },
    //         function(data,status){
    //             if(status==="success") {
    //                 $("#display").html("");
    //                 let ordersList = JSON.parse(data);
    //                 let html="<table style=\"width: 100%\" border='1px'> <tr><th colspan=\"5\">订单信息</th></tr><tr><td>订单编号</td><td>下单时间</td><td>客户编号</td><td>销售人员编号</td><td>消费额</td></tr>"
    //                 for (let i = 0; i < ordersList.length; i++) {
    //                     let orders = ordersList[i];
    //                     html += "<tr>";
    //                     html += "<td>" + orders.oid + "</td>";
    //                     html += "<td>" + orders.otime + "</td>";
    //                     html += "<td>" + orders.oclients + "</td>";
    //                     html += "<td>" + orders.osales + "</td>";
    //                     html += "<td>" + orders.ototalAmount + "</td>";
    //                     html += "</tr>";
    //                 }
    //                 html+="</table>"
    //                 document.getElementById("display").innerHTML = html;
    //             }
    //             else {alert( data + "\n" + status)}
    //         });
    // });
});