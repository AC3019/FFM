var ids = ["daily", "weekly"];
var dropDown = document.getElementById("reportType");

dropDown.onchange = function () {
    for (var x = 0; x < ids.length; x++) {
        document.getElementById(ids[x]).classList.add("hidden");
    } document.getElementById(this.value).classList.remove("hidden");
}