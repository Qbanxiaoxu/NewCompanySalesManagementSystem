$(function () {

    // $(".menu-t2").click(function () {
    //     $("#resultBlock").css("display","block");
    // });
    let arrFunctionTable=[
        'queryProductTable','queryOrderTable','delOrderTable','addOrderTable','personalInformation'];

    let arrResultTable=['productTable','orderTable'];

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
    $("#queryOrder").click(function () {
        hide(arrFunctionTable,"queryOrderTable");
        hide(arrResultTable,"orderTable");
        $("#resultBlock").css("display","block");

    });



    // $("#addOrder").click(function () {
    //     hide(arrFunctionTable,"addOrderTable");
    //     $("#resultBlock").css("display","none");
    // });
    //
    // $("#showAddOrderModalBtn").click(function () {
    //     $("#addOrderModal").css("display","block");
    // });
    //
    // $("#showShoppingCartModalBtn").click(function () {
    //     $("#shoppingCartModal").css("display","block");
    // });
    //
    // $(".close").click(function () {
    //     $(".modal").css("display","none");
    //     $("#resultBlock").css("display","none");
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