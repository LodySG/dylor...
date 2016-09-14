"use strict";
$(function () {
    
    $(".spinner").fadeOut("slow", () => {
        $(".logo").fadeIn("slow", () => {
            setTimeout(() => {
                $(".logo").fadeOut("slow", () => {
                    $("#app").fadeIn();
                });
            }, 3000);
        });
    });

    $("#btnmenu").click(function (e) { 
        e.preventDefault();
        $("#offcanvas").animate({left: '0px'});
    });

    var client_id = "10f634fd0bb99d0cab9d0b04bf53e959";
    var client_secret = "05a345e93c4421304c2c361609e5dd14";
    
    SC.initialize({
        client_id: client_id
    });

    SC.get("/resolve", { 
        url: "https://soundcloud.com/lody-saint-germain"
    }).then((user) => {
        window.user_id = user.id;
    });

    SC.get('/users/'+window.user_id+'/playlists').then(function(playlists) {
        console.log(playlists);
    });

    SC.oEmbed("https://soundcloud.com/lody-saint-germain/sets/chill", { auto_play: false }).then(function(oEmbed) {
        console.log('oEmbed response: ', oEmbed);
        $(".zouk.channel").html(oEmbed.html);
    });

});