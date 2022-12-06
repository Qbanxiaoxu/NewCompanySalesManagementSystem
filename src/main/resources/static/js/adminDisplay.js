$(function () {


    function hide(id) {
        let arr=[
            'querySalesStaffTable','delSalesStaffTable','modifySalesStaffTable',
            'queryProductTable','delProductTable','modifyProductTable',
            'queryClientTable','delClientTable','modifyClientTable',
            'queryOrderTable','delOrderTable','modifyOrderTable'
        ];
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
        hide("querySalesStaffTable");
    });
    $("#modifySalesStaff").click(function () {
        hide("modifySalesStaffTable");
    });
    $("#addSalesStaff").click(function () {
        $("#addSalesStaffModal").css("display","block");
    });
    $("#delSalesStaff").click(function () {
        hide("delSalesStaffTable");
    });
    $("#showModifySalesStaffModalBtn").click(function () {
        $("#modifySalesStaffModal").css("display","block");
    });

    //产品管理
    $("#queryProduct").click(function () {
        hide("queryProductTable");
    });
    $("#modifyProduct").click(function () {
        hide("modifyProductTable");
    });
    $("#delProduct").click(function () {
        hide("delProductTable");
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
        hide("queryClientTable");
    });
    $("#delClient").click(function () {
        hide("delClientTable");
    });
    $("#modifyClient").click(function () {
        hide("modifyClientTable");
    });
    $("#showModifyClientModalBtn").click(function () {
        $("#modifyClientModal").css("display","block");

    });
    $("#addClient").click(function () {
        $("#addClientModal").css("display","block");
    });
    //点击菜单栏触发订单管理事件
    $("#queryOrder").click(function () {
        hide("queryOrderTable");
    });
    $("#delOrder").click(function () {
        hide("delOrderTable");
    });
    $("#modifyOrder").click(function () {
        hide("modifyOrderTable");
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