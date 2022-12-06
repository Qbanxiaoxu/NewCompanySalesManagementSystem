$(function () {

    $(".menu-t2").click(function () {
        $("#resultBlock").css("display","block");
    });
    let arrFunctionTable=[
        'queryProductTable',
        'queryOrderTable','delOrderTable','modifyOrderTable'
    ];
    let arrResultTable=['productTable','orderTable']
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
    $("#queryProduct").click(function () {
        $("#resultBlock").css("display","block");
        hide(arrFunctionTable,"queryProductTable");
        hide(arrResultTable,"productTable");
    });
    $("#queryOrder").click(function () {
        hide(arrFunctionTable,"queryOrderTable");
        hide(arrResultTable,"orderTable");
    });
    $("#delOrder").click(function () {
        hide(arrFunctionTable,"delOrderTable");
        hide(arrResultTable,"orderTable");
    });
    $(".functionTableClose").click(function () {
        $(".functionTable").css("display","none");
        $("#resultBlock").css("display","none");
    });
});