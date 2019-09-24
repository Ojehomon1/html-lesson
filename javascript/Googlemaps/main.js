let btn = document.getElementById("btn");
let inputLat = document.getElementById("latitude");
let inputLong = document.getElementById("longitude");


btn.addEventListener("click", function(){
    map.setCenter(new google.maps.LatLng(parseFloat(inputLat.value), parseFloat(longitude.value)));
})

var map;
function initMap() {
map = new google.maps.Map(document.getElementById("map"), {
    center: {lat:53.5511, lng: 9.9937},
    zoom: 8
});
}



