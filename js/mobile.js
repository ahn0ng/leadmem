// 최적화 
$(function() {
    var a = 0;
    var b = 0;
    
    $("#route").css("top",route_position);
    resize_home()

    $(window).resize(function() {
        resize_home()
    });
    
    $(".drag_bar").click(function(){
        a++;
        b=a%2;

        if(b==1){
            $("#route").stop().animate({"top":"80px"},500,"linear");
        }else{
            $("#route").stop().animate({"top":drag_top_height},500,"linear");
        }
    });

});
var screen_height;
var drag_top_height;
var route_position

function resize_home(){    
    screen_height =$(window).height();
    var route_height = screen_height*0.85;
    drag_top_height = route_height-0.02;
    route_position = screen_height-100;



    $("#route").css("top",route_position);
    $("#route").css("height",route_height);
}

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


