$(function () {
    //获取登录人的用户名和密码
    let userName=getUrlParam('username');
    let psd=getUrlParam('password');
    function getUrlParam(name) {

        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
    $("#selfInformationManagement").click("click",function () {

        $.post(
            '/'
        )
        $("#showSelfInformationTable")

    });
    $("#showModifyInformationForm").click("click",function () {
        $("#modifySelfInformationBtn").click("click",function () {
            $.post(
                '/ModifyClient',
            )
        })
    })
    $("#searchFormerOrdersBtn").click("click",function () {
        $.post(
            '/QueryClientOrders',
            {username:userName,password:psd},
            function (data) {
                $("#showFormerOrdersTable").find('tr').remove();
                for (i in data){
                    let tds;
                    tds='<td>'+data[i].orderId+'</td>'+
                        '<td>'+data[i].orderTime+'</td>'+
                        '<td>'+data[i].clientId+'</td>'+
                        '<td>'+data[i].salesStaffId+'</td>'+
                        '<td>'+data[i].comsumotion+'</td>';
                    $("#showFormerOrdersTable").append('<tr>'+tds+'</tr>');
                }
            },
            'json'
        )
    })
})