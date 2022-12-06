$(function () {

    let arrFunctionTable=[
        'querySalesStaffTable','delSalesStaffTable','modifySalesStaffTable',
        'queryProductTable','delProductTable','modifyProductTable',
        'queryClientTable','delClientTable','modifyClientTable',
        'queryOrderTable','delOrderTable','modifyOrderTable'
    ];
    let arrResultTable=['productTable','salesStaffTable','clientTable','orderTable'];
    function hide(arr,id) {

        for(let i in arr){
            if(arr[i]==id){
                $("#"+arr[i]).css("display","block");
            }
            else{
                $("#"+arr[i]).css("display","none");
            }
        }

    }

    //销售人员管理
    $("#querySalesStaff").click(function () {
        hide(arrFunctionTable,"querySalesStaffTable");
        hide(arrResultTable,"salesStaffTable");
    });
    $("#modifySalesStaff").click(function () {
        hide(arrFunctionTable,"modifySalesStaffTable");
        hide(arrResultTable,"salesStaffTable");
    });
    $("#addSalesStaff").click(function () {
        $("#addSalesStaffModal").css("display","block");
        hide(arrResultTable,"salesStaffTable");
    });
    $("#delSalesStaff").click(function () {
        hide(arrFunctionTable,"delSalesStaffTable");
        hide(arrResultTable,"salesStaffTable");
    });
    $("#showModifySalesStaffModalBtn").click(function () {
        $("#modifySalesStaffModal").css("display","block");
    });

    //产品管理
    $("#queryProduct").click(function () {
        hide(arrFunctionTable,"queryProductTable");
        hide(arrResultTable,"productTable");
    });
    $("#modifyProduct").click(function () {
        hide(arrFunctionTable,"modifyProductTable");
        hide(arrResultTable,"productTable");

    });
    $("#delProduct").click(function () {
        hide(arrFunctionTable,"delProductTable");
        hide(arrResultTable,"productTable");

    });

    $("#showModifyProductModalBtn").click(function () {
        $("#modifyProductModal").css("display","block");

    });
    $("#addProduct").click(function () {
        $("#addProductModal").css("display","block");
    });

    //关闭功能窗口
    $(".functionTableClose").click(function () {
        $(".functionTable").css("display","none");
        $("#resultBlock").css("display","none");
    });

    //客户管理
    $("#queryClient").click(function () {
        hide(arrFunctionTable,"queryClientTable");
        hide(arrResultTable,"clientTable");

    });
    $("#delClient").click(function () {
        hide(arrFunctionTable,"delClientTable");
        hide(arrResultTable,"clientTable");
    });
    $("#modifyClient").click(function () {
        hide(arrFunctionTable,"modifyClientTable");
        hide(arrResultTable,"clientTable");
    });
    $("#showModifyClientModalBtn").click(function () {
        $("#modifyClientModal").css("display","block");

    });
    $("#addClient").click(function () {
        $("#addClientModal").css("display","block");
    });
    //点击菜单栏触发订单管理事件
    $("#queryOrder").click(function () {
        hide(arrFunctionTable,"queryOrderTable");
        hide(arrResultTable,"orderTable");
    });
    $("#delOrder").click(function () {
        hide(arrFunctionTable,"delOrderTable");
        hide(arrResultTable,"orderTable");

    });
    $("#modifyOrder").click(function () {
        hide(arrFunctionTable,"modifyOrderTable");
        hide(arrResultTable,"orderTable");

    });
    $("#showModifyOrderModalBtn").click(function () {
        $("#modifyOrderModal").css("display","block");

    });
    $("#addOrder").click(function () {
        $("#addOrderModal").css("display","block");
    });

    $(".close").click(function () {
        $(".modal").css("display","none");
        $("#resultBlock").css("display","none");
    });
});