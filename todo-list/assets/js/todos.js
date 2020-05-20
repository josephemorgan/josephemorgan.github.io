// Check off specific todos by clicking

$("ul").on("click", "li", function() {
    $(this).toggleClass("done");
});

$("ul").on("click", ".delete-button", function(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(400, function() {
        $(this).remove();
    });
});

$("#new-item-box").keypress(function(e) { 
    if (e.which === 13) {
        let elementToAdd = $(this).val();
        $("ul").append("<li><span class=\"delete-button\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> </span>" + elementToAdd + "</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function() {
    $("#new-item-box").fadeToggle();
})