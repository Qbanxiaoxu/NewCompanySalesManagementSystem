$(document).ready(() => {

    var nm=getUrlParam('username');
    var pwd=getUrlParam('password');
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }

    $("#querySelfInformation").click(function () {
        $("#personalTable").css("display","block");
        $("#resultBlock").css("display","none");
        $("#modifyPersonalInformationTable").css("display","none");
        // document.getElementById("orderTable").innerHTML=""
        // document.getElementById("salesStaffTable").innerHTML=""
        document.getElementById("productTable").innerHTML=""
        // document.getElementById("clientTable").innerHTML=""
        document.getElementById("personalTable").innerHTML=""
        // alert(nm+"\n"+pwd);
        $.post("/PersonalInfo",
            {
                object: "Client",
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
                        html +=" <td class='label'>编号</td>"
                        html += "<td>" + personal.clientId + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +=" <td class='label'>密码</td>";
                        html += "<td>" + personal.clientPassword + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +=" <td class='label'>姓名</td>";
                        html += "<td>" + personal.clientName + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +=" <td class='label'>性别</td>";
                        html += "<td>" + personal.clientGender + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +=" <td class='label'>邮箱</td>";
                        html += "<td>" + personal.clientEmail + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +=" <td class='label'>地址</td>";
                        html += "<td>" + personal.clientAddress + "</td>";
                        html += "</tr>";
                    }
                    document.getElementById("personalTable").innerHTML=html;
                    $("#personalInformation").css("display","block");
                } else {
                    alert(data + "\n" + status)
                }
            });
    });

    $("#modifySelfInformation").click(function () {
       $("#modifyPersonalInformationTable").css("display","block");
       // $("#queryFormerOrderTable").css("display","none");
       // $("#personalInformation").css("display","none");
    });

    $("#modifyPersonalInformationBtn").click(function () {
       let ID=$("#modifyIDBox").val();
       ID=Number(ID);
       let name=$("#modifyNameBox").val();
       let psd=$("#modifyPsdBox").val();
       let gender=$("#modifyGenderBox").val();
       let address=$("#modifyAddressBox").val();
       let email=$("#modifyEmailBox").val();
       alert(gender+address);
       $.post(
           '/ModifyClient',
           {
               clientId:ID,
               clientName:name,
               clientPassword: psd,
               clientAddress: address,
               clientGender: gender,
               clientEmail:email,
           },
           function (status) {
               if(status=="success"){
                   alert("成功");
               }
           }

       )
    });

    $("#queryFormerOrder").click(function () {
        $("#resultBlock").css("display","none");
        $("#personalTable").css("display","none");
        $("#modifyPersonalInformationTable").css("display","none");
        $.post(
            '/QueryClientOrders',
            {
                username: nm,
                password: pwd,
            },
            function (data,status) {
                let html="<tr><th>订单编号</th><th>订单时间</th><th>下单顾客</th><th>负责销售</th><th>总消费金额</th></tr>";
               if(status==="success"){

                   let orderList=JSON.parse(data);
                   for(let i in orderList){
                       let order=orderList[i];
                       html+='<tr>';
                       html+='<td>'+order.orderId+'</td>';
                       html+='<td>'+order.orderTime+'</td>';
                       html+='<td>'+order.clientId+'</td>';
                       html+='<td>'+order.salesStaffId+'</td>';
                       html+='<td>'+order.consumption+'</td>';
                       html+='</tr>';
                   }
                   document.getElementById("orderTable").innerHTML=html;
                   $("#queryFormerOrderTable").css("display","block");
                   $("#orderTable").css("display","block");
               }
               else {
                   alert("error");
               }
            }
        )
    });});