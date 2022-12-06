$(function () {
    function hide(id) {
        let arr=[
            'queryProductTable',
            'queryClientTable', 'delClientTable','modifyClientTable',
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
    //点击菜单栏触发事件
    $("#queryProduct").click(function () {
        hide("queryProductTable");
    });
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
    //关闭功能窗口
    $(".functionTableClose").click(function () {
        $(".functionTable").css("display","none");
        $("#resultBlock").css("display","none");
    });
});