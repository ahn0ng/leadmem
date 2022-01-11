
// 최적화 
$(function() {
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;

    $(".drag_bar").click(function(){
        a++;
        b=a%2;

        if(b==1){
            $("#route").stop().animate({"bottom":"0px"},500,"linear");
        }else{
            $("#route").stop().animate({"bottom":"-600px"},500,"linear");
        }
    });

});



$(function() {
    var c = 0;
    var d = 0;

    $("#user_btn").click(function(){
        c++;
        d=c%2;

        if(d==1){
            $("#user").show();
            
        }else{
            $("#user").hide();
        }
    });
});
