var X = true; 

$(document).ready(function() {
    $("div").click(function(event) {
        var id = $(this).attr("id");
        if(id >=0 && id <= 9) {
            console.log($(this).attr("id"));
            
            if(X) {
                X = false;
                $(this).addClass("selectedX");
            }
            else {
                X = true;
                $(this).addClass("selectedO");
            }
        }
    });
})