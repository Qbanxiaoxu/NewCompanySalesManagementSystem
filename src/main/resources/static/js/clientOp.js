$(function () {

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

    $("#querySelfInformation").click(function () {
        document.getElementById("orderTable").innerHTML=""
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
                    let html = "<tr><th colspan=\"5\">个人信息</th></tr><tr><td>编号</td><td>姓名</td><td>性别</td><td>邮箱</td><td>住址</td></tr>"

                    for (let i = 0; i < personalList.length; i++) {
                        let personal = personalList[i];
                        html += "<tr>";
                        html += "<td>" + personal.clientId + "</td>";
                        html += "<td>" + personal.clientName + "</td>";
                        html += "<td>" + personal.clientGender + "</td>";
                        html += "<td>" + personal.clientEmail + "</td>";
                        html += "<td>" + personal.clientAddress + "</td>";
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