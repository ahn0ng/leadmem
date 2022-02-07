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
            $("#route").stop().animate({"top":route_position},500,"linear");
        }
    });

});
var screen_height;
var drag_top_height;
var route_position;

function resize_home(){    
    screen_height =$(window).height();
    var route_height = screen_height*0.82;
    drag_top_height = route_height-0.02;
    route_position = screen_height-90;



    $("#route").css("top",route_position);
    $("#route").css("height",route_height);
}

$(function() {
    var c = 0;
    var d = 0;
    var e = 0;
    var f = 0;
  


    $("#user_btn").click(function(){
        c++;
        d=c%2;

        if(d==1){
            $("#user_icon").css('background','url("https://img.icons8.com/fluency-systems-filled/48/71d4b0/menu.png") no-repeat center').css('background-size','contain');
            $("#list_icon").css('background','url("https://img.icons8.com/material-outlined/50/000000/ingredients-list.png") no-repeat center').css('background-size','contain');
            $("#list").hide();
            e=e*0;
            f=f*0;
            $("#user").show();
            
        }else{
            $("#user_icon").css('background','url("https://img.icons8.com/fluency-systems-filled/48/000000/menu.png") no-repeat center').css('background-size','contain');
            $("#user").hide();
        }
    });
    $("#list_btn").click(function(){
        e++;
        f=e%2;

        if(f==1){
            $("#list_icon").css('background','url("https://img.icons8.com/material-outlined/50/71d4b0/ingredients-list.png") no-repeat center').css('background-size','contain');
            $("#user_icon").css('background','url("https://img.icons8.com/fluency-systems-filled/48/000000/menu.png") no-repeat center').css('background-size','contain');
            $("#user").hide();
            c=c*0;
            d=d*0;
            $("#list").show();
            
        }else{
            $("#list_icon").css('background','url("https://img.icons8.com/material-outlined/50/000000/ingredients-list.png") no-repeat center').css('background-size','contain');
            $("#list").hide();
        }
    });

    $("#home_btn").click(function(){
        c=c*0;
        d=d*0;
        e=e*0;
        f=f*0;
        $("#user").hide();
        $("#list").hide();
        $("#user_icon").css('background','url("https://img.icons8.com/fluency-systems-filled/48/000000/menu.png") no-repeat center').css('background-size','contain');
        $("#list_icon").css('background','url("https://img.icons8.com/material-outlined/50/000000/ingredients-list.png") no-repeat center').css('background-size','contain');
    });
});




