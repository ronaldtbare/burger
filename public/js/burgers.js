$(document).ready(function () {
    console.log("document loaded");

    $("#addBurger").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgername").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".devourIt").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log("devourit button pressed.")
        var id = $(this).data("id");
        // Send the PUT request. Change devoured:false to devoured true.
        $.ajax("/api/burger/" + id, {
            type: "PUT", 
        }).then(
            function () {
                console.log("devoured burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });    
});