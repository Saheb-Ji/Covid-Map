function updateMap() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((rsp) => {
      rsp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;

        cases = element.infected;
        if (cases > 255) {
          color = "rgb(255, 0, 0)";
        } else {
          color = `rgb(${cases}, 0, 0)`;
        }

        // mark on the map
        new mapboxgl.Marker({
          draggable: false,
          color: color,
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}
updateMap();
setInterval(updateMap, 20000);
