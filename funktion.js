// jQuery

$(document).ready(function(){
    //about
    $("#about_btn").click(function () { 
        $("#about").show();
        $("#grid").hide();
    });

    // grid
    $("#grid_btn").click(function () { 
        $("#grid").show();
        $("#about").hide();
    });

    $(".close").click(function () { 
        $(".hidden").hide(); 
    });

    $("#c1").click(function () { 
        $("iframe").attr("src", "clocks/mathclock/index.html");
        $(".hidden").hide(); 
    });
})