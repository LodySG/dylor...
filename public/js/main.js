$(function () {
    
    var $el = $("#offcanvas").offcanvas();
 
    $(".offcanvas-trigger").on("click", function() {
        $el.offcanvas("toggle");
    });
    
    $(".spinner").fadeOut("slow", () => {
        $(".logo").fadeIn("slow", () => {
            setTimeout(() => {
                $(".logo").fadeOut("slow", () => {
                    $("#app").fadeIn();
                });
            }, 4000);
        });
    });
});