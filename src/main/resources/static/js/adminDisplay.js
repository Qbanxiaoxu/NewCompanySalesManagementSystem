$(function () {

    // $(".menu-t2").click(function () {
    //     $("#resultBlock").css("display","block");
    // });
    let arrFunctionTable=[
        'querySalesStaffTable','delSalesStaffTable','modifySalesStaffTable','addSalesStaffTable',
        'queryProductTable','delProductTable','modifyProductTable','addProductTable',
        'queryClientTable','delClientTable','modifyClientTable','addClientTable',
        'queryOrderTable','delOrderTable','modifyOrderTable','personalInformation'
    ];
    let arrResultTable=['productTable','salesStaffTable','clientTable','orderTable','personalTable'];
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
        $("#resultBlock").css("display","block");
        $("#personalInformation").css("display","none");
    });
    $("#modifySalesStaff").click(function () {
        hide(arrFunctionTable,"modifySalesStaffTable");
        hide(arrResultTable,"salesStaffTable");
        $("#resultBlock").css("display","block");
        $("#personalInformation").css("display","none");


    });
    $("#addSalesStaff").click(function () {
       hide(arrFunctionTable,"addSalesStaffTable");
       hide(arrResultTable,"salesStaffTable");
       $("#resultBlock").css("display","none");
        $("#personalInformation").css("display","none");

    });
    $("#delSalesStaff").click(function () {
        hide(arrFunctionTable,"delSalesStaffTable");
        hide(arrResultTable,"salesStaffTable");
        $("#resultBlock").css("display","block");
        $("#personalInformation").css("display","none");


    });
    $("#showModifySalesStaffModalBtn").click(function () {
        $("#modifySalesStaffModal").css("display","block");

    });

    //产品管理
    $("#queryProduct").click(function () {
        hide(arrFunctionTable,"queryProductTable");
        hide(arrResultTable,"productTable");
        $("#resultBlock").css("display","block");
        $("#personalInformation").css("display","none");


    });
    $("#modifyProduct").click(function () {
        hide(arrFunctionTable,"modifyProductTable");
        hide(arrResultTable,"productTable");
        $("#resultBlock").css("display","block");
        $("#personalInformation").css("display","none");



    });
    $("#delProduct").click(function () {
        hide(arrFunctionTable,"delProductTable");
        hide(arrResultTable,"productTable");
        $("#resultBlock").css("display","block");
        $("#personalInformation").css("display","none");



    });
    $("#addProduct").click(function () {
        hide(arrFunctionTable,"addProductTable");
        hide(arrResultTable,"productTable");
        $("#resultBlock").css("display","none");
        $("#personalInformation").css("display","none");

    });
    $("#showModifyProductModalBtn").click(function () {
        $("#modifyProductModal").css("display","block");

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
        $("#resultBlock").css("display","block");
        $("#personalInformation").css("display","none");


    });
    $("#delClient").click(function () {
        hide(arrFunctionTable,"delClientTable");
        hide(arrResultTable,"clientTable");
        $("#resultBlock").css("display","block");
        $("#personalInformation").css("display","none");


    });
    $("#addClient").click(function () {
       hide(arrFunctionTable,"addClientTable");
       hide(arrResultTable,"clientTable");
       $("#resultBlock").css("display","none");
        $("#personalInformation").css("display","none");

    });
    $("#modifyClient").click(function () {
        hide(arrFunctionTable,"modifyClientTable");
        hide(arrResultTable,"clientTable");
        $("#resultBlock").css("display","block");
        $("#personalInformation").css("display","none");


    });
    $("#showModifyClientModalBtn").click(function () {
        $("#modifyClientModal").css("display","block");

    });

    //点击菜单栏触发订单管理事件
    $("#queryOrder").click(function () {
        hide(arrFunctionTable,"queryOrderTable");
        hide(arrResultTable,"orderTable");
        $("#resultBlock").css("display","block");
        $("#personalInformation").css("display","none");


    });
    $("#delOrder").click(function () {
        hide(arrFunctionTable,"delOrderTable");
        hide(arrResultTable,"orderTable");
        $("#resultBlock").css("display","block");
        $("#personalInformation").css("display","none");



    });
    $("#modifyOrder").click(function () {
        hide(arrFunctionTable,"modifyOrderTable");
        hide(arrResultTable,"orderTable");
        $("#resultBlock").css("display","block");
        $("#personalInformation").css("display","none");



    });
    $("#showModifyOrderModalBtn").click(function () {
        $("#modifyOrderModal").css("display","block");

    });
    $(".close").click(function () {
        $(".modal").css("display","none");
        $("#resultBlock").css("display","none");
    });
});