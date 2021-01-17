// jQuery

$(document).ready(function(){
    // close btn
    $(".close-btn").click(function () { 
        $(".hidden").hide(); 
    });
    
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
    $("#c1").click(function () { 
        $("iframe").attr("src", "clocks/mathclock/index.html");
        $(".hidden").hide(); 
    });
    $("#c2").click(function () { 
        $("iframe").attr("src", "clocks/partyclock/index.html");
        $(".hidden").hide(); 
    });
    $("#c3").click(function () { 
        $("iframe").attr("src", "clocks/barcodeclock/index.html");
        $(".hidden").hide(); 
    });
    $("#c4").click(function () { 
        $("iframe").attr("src", "clocks/textclock/index.html");
        $(".hidden").hide(); 
    });
    $("#c5").click(function () { 
        $("iframe").attr("src", "clocks/treeclock/index.html");
        $(".hidden").hide(); 
    });
    $("#c6").click(function () { 
        $("iframe").attr("src", "clocks/clock1/index.html");
        $(".hidden").hide(); 
    });
    $("#c7").click(function () { 
        $("iframe").attr("src", "clocks/clock2/index.html");
        $(".hidden").hide(); 
    });
    $("#c8").click(function () { 
        $("iframe").attr("src", "clocks/clock3/index.html");
        $(".hidden").hide(); 
    });
    $("#c9").click(function () { 
        $("iframe").attr("src", "clocks/clock4/index.html");
        $(".hidden").hide(); 
    });
    $("#c10").click(function () { 
        $("iframe").attr("src", "clocks/clock5/index.html");
        $(".hidden").hide(); 
    });
    $("#c11").click(function () { 
        $("iframe").attr("src", "clocks/clock6/index.html");
        $(".hidden").hide(); 
    });
})