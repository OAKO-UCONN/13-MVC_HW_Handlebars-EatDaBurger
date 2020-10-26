
$(function () {
    //ajax put request to change status to "devoured" ==========
    $(".change-devour").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        // var id = $(this).data("data-id");
        console.log("Client just clicked Burger ID number: " + id);

        var newDevour = $(this).data("newdevour");
        var newDevourState = {
            devoured: newDevour
        };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newDevourState
        }).then(function () {
            location.reload();
        });
    });

    // + //Post request using AJAX to add a new Burger.++++++++++++++++++++
    $(".create-form").on("submit", () => {
        event.preventDefault();
        var newBurger = {
            name: $("#burgerInput").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            // console.log(`added new burger: ${newBurger}`);
            location.reload();
        });
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // - // Delete request using AJAX to remove a Burger.---------------------
    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax(`/api/burgers/${id}`, {
            type: "DELETE"
        }).then(function () {
            console.log("Deleted Burger with ID: ", id);
            location.reload();
        });
    });
    //------------------------------------------------------------------------
});


