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
        $("#resultBlock").css("display","none");
        $(".functionTable").css("display","none");
        // document.getElementById("orderTable").innerHTML=""
        // // document.getElementById("salesStaffTable").innerHTML=""
        // document.getElementById("productTable").innerHTML=""
        // document.getElementById("clientTable").innerHTML=""
        // document.getElementById("personalTable").innerHTML=""
        // alert(nm+"\n"+pwd);
        $.post("/PersonalInfo",
            {
                object: "SalesStaff",
                username:nm,
                password:pwd,
            },

            function (data, status) {
                if (status === "success") {
                    let personalList = JSON.parse(data);
                    let html ="";

                    for (let i = 0; i < personalList.length; i++) {
                        let personal = personalList[i];
                        html += "<tr>";
                        html +="<td class='label'>ID</td>"
                        html += "<td>" + personal.salesStaffId + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>密码</td>"
                        html += "<td>" + personal.salesStaffPassword + "</td>";
                        html += "</tr>";

                        html += "<tr>";
                        html +="<td class='label'>用户名</td>"
                        html += "<td>" + personal.salesStaffName + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>性别</td>"
                        html += "<td>" + personal.salesStaffGender + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>邮箱</td>"
                        html += "<td>" + personal.salesStaffEmail + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html +="<td class='label'>地址</td>"
                        html += "<td>" + personal.salesStaffAddress + "</td>";
                        html += "</tr>";
                        html +="<td class='label'>薪资</td>"
                        html += "<td>" + personal.salesStaffSalary + "</td>";
                        html += "</tr>";
                    }
                    document.getElementById("personalTable").innerHTML=html;
                    $("#personalInformation").css("display","block");
                } else {
                    alert(data + "\n" + status)
                }
            });
    });

    // $("#getClientByIdBtn").click(function () {
    //     let cId=$("#getClientByIdBox").val();
    //     cId=Number(cId);
    //     $.post(
    //         '/'
    //     )
    // });

    $("#modifySelfInformation").click(function () {
        $("#modifyPersonalInformationTable").css("display","block");
        $("#personalInformation").css("display","none");
        $("#resultBlock").css("display","none");
    });
    $("#modifyPersonalInformationBtn").click(function () {

        let ID=$("#modifyPersonalIDBox").val();
        ID=Number(ID);
        let name=$("#modifyPersonalNameBox").val();
        let psd=$("#modifyPersonalPsdBox").val();
        let gender=$("#modifyPersonalGenderBox").val();
        let email=$("#modifyPersonalEmailBox").val();
        let address=$("#modifyPersonalAddressBox").val();
        alert(gender+address);
        $.post(
            '/ModifySalesStaff',
            {
                salesStaffId:ID,
                salesStaffName: name,
                salesStaffPassword: psd,
                salesStaffGender: gender,
                salesStaffEmail: email,
                salesStaffAddress: address,
            },
            function (status) {
                if(status==="success"){
                    alert("修改信息成功");
                }
            }
        )
    }
    );
});