window.onload = function() {

    var div = document.getElementById("maps");

    /* for each object in the array, create an anchor tag and append to the div */
    json_maps.forEach(createLinks);

    function createLinks(elem, index) {
        var lnk = document.createElement("a");
        lnk.href = "http://www.google.com/maps/@" + elem.primary_latitude + "," + elem.primary_longitude + ",11z";
        lnk.target = "_blank";
        lnk.innerHTML = elem.name;
        div.appendChild(lnk);
    }
}