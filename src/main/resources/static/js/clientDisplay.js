$(function () {

    $(".menu-t2").click(function () {
        $("#resultBlock").css("display","block");
    });
    function hide(id) {
        let arr=[
            'queryProductTable',
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
    $("#queryProduct").click(function () {
        $("#resultBlock").css("display","block");
        hide("queryProductTable");
    });
    $("#queryOrder").click(function () {
        hide("queryOrderTable");
    });
    $("#delOrder").click(function () {
        hide("delOrderTable");
    });
    $(".functionTableClose").click(function () {
        $(".functionTable").css("display","none");
        $("#resultBlock").css("display","none");
    });
});