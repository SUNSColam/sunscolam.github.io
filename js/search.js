// var mbar = "";

$(function(){

    $("#searchbar").keyup(function(){
        var search = $("#searchbar").val().toLowerCase();

        $(".committee").each(function() {
            var name = $(this).find("h3").text().toLowerCase();
            if (name.startsWith(search)) {
                $(this).css("display", "");
            } else {
                $(this).css("display", "none");
            }
        });

    });
});