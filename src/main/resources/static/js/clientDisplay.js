$(function () {

    // $(".menu-t2").click(function () {
    //     $("#resultBlock").css("display","block");
    // });
    let arrFunctionTable=[
        'queryProductTable','queryOrderTable','delOrderTable','addOrderTable','personalInformation'];

    let arrResultTable=['productTable','orderTable','personalTable'];

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
        hide(arrFunctionTable,"queryProductTable");
        hide(arrResultTable,"productTable");
        $("#resultBlock").css("display","block");
        $("#personalInformation").css("display","none");
    });
    // $("#queryFormerOrder").click(function () {
    //     hide(arrFunctionTable,"queryOrderTable");
    //     hide(arrResultTable,"orderTable");
    //     $("#resultBlock").css("display","block");
    //
    // });
    $("#delOrder").click(function () {
        hide(arrFunctionTable,"delOrderTable");
        hide(arrResultTable,"orderTable");
    });
    $(".functionTableClose").click(function () {
        $(".functionTable").css("display","none");
        $("#resultBlock").css("display","none");
    });

});