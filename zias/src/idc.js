$("#submit-button").click(function (event) {
    event.preventDefault();

    var query = $("#query").val();

    if ((query) !== "") {

        window.location.replace("chart.html");
    } else {
        alert("Invalid Product! Please try again!");
    }
});