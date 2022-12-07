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
        // $("#personalTable").css("display","block");
        // $("#resultBlock").css("display","block");
        // document.getElementById("orderTable").innerHTML=""
        // // document.getElementById("salesStaffTable").innerHTML=""
        // document.getElementById("productTable").innerHTML=""
        // // document.getElementById("clientTable").innerHTML=""
        // document.getElementById("personalTable").innerHTML=""
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
                    // $("#personalTable").append(html);
                } else {
                    alert(data + "\n" + status)
                }
            });
    });
});