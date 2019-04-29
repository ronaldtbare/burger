$(document).ready(function () {
    console.log("document loaded");

    $("#addBurger").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log("add a burger button pressed.")

        var newBurger = {
            name: $("#burgerName").val().trim(),
            devoured: $("[name=sleepy]:checked").val().trim()
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

    $("#devourIt").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log("devourit button pressed.")

        // Send the PUT request.
        $.ajax("/api/burger"+id, {
            type: "PUT",
            data: devoured
        }).then(
            function () {
                console.log("devoured burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });    

    
});