$(function () {
    $(".menu-t1").click(function () {
        $("#resultBlock").css("display","block");
    });
    let arrFunctionTable=[
        'queryProductTable',
        'queryClientTable',
        'queryOrderTable'
    ];
    let arrResultTable=['productTable','clientTable','orderTable','personalTable'];
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
    //点击菜单栏触发事件
    $("#queryProduct").click(function () {
        hide(arrFunctionTable,"queryProductTable");
        hide(arrResultTable,"productTable");
    });
    $("#queryClient").click(function () {
        hide(arrFunctionTable,"queryClientTable");
        hide(arrResultTable,"clientTable");

    });
    $("#queryOrder").click(function () {
        hide(arrFunctionTable,"queryOrderTable");
        hide(arrResultTable,"orderTable");
    });
    //关闭功能窗口
    $(".functionTableClose").click(function () {
        $(".functionTable").css("display","none");
        $("#resultBlock").css("display","none");
    });
});