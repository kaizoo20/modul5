$(document).ready(function () {
    $(".gallery img").each(function (index) {
        $(this).delay(150 * index).fadeTo(500, 1);
    });

    $(".gallery img").on("click", function () {
        const imgSrc = $(this).attr("src");
        $(".modal-img").attr("src", imgSrc);
        $("#modal").fadeIn();
    });

    $(".close, #modal").on("click", function (e) {
        if ($(e.target).is(".close") || $(e.target).is("#modal")) {
            $("#modal").fadeOut();
        }
    });
});
