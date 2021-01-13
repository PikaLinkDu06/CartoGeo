$(document).ready(function() {

  navigator.geolocation.getCurrentPosition(function(position){

    // Map sous OpenStreetMap
    // Exercie 1
    var mapOSM = L.map('mapOSM').setView([position.coords.latitude, position.coords.longitude], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 15
    }).addTo(mapOSM);

    L.marker([position.coords.latitude, position.coords.longitude]).addTo(mapOSM)
    .bindPopup('Vous êtes ici !')
    .openPopup();

    L.marker([43.7013, 7.2681]).addTo(mapOSM)
    .bindPopup("Ici c'est Nice")
    .openPopup();

    // Map sous Stamen
    // Exercice 2
    const triangleCoords = [
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ];
    var layer1 = new L.StamenTileLayer("terrain");
    var bermudaTriangle = L.polygon(triangleCoords, {
      color:'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }) ;
    var mapStamenBermudes = new L.Map("mapStamenBermudes", {
      center: new L.LatLng(24.886, -70.268),
      zoom: 4,
      maxZoom: 8
    });
    mapStamenBermudes.addLayer(layer1);
    mapStamenBermudes.addLayer(bermudaTriangle) ;


    const distanceToMarseille = [
      { lat: position.coords.latitude, lng: position.coords.longitude },
      { lat: 43.29, lng: 5.37 }
    ];
    var layer2 = new L.StamenTileLayer("terrain");
    var circle = L.circle([position.coords.latitude, position.coords.longitude], {
      radius: position.coords.accuracy
    }) ;
    var marseilleRPZ = L.polygon(distanceToMarseille) ;
    var mapStamenPos = new L.Map("mapStamenPos", {
      center: new L.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 12,
      maxZoom: 15
    });

    let latLNG = L.latLng(position.coords.latitude, position.coords.longitude);
    let distance = latLNG.distanceTo(L.latLng(43.29, 5.37));

    $('#Marseille').text((distance/1000).toFixed(2) + " km") ;
    mapStamenPos.addLayer(layer2) ;
    mapStamenPos.addLayer(circle) ;
    mapStamenPos.addLayer(marseilleRPZ) ;

    // Utilisation de GeoJson
    // Exercice 3
    $.ajax({
      type: "GET",
      url: "./geojsons/signca-ec-voies-velo.geojson",
      success: function(data) {
        var mapVelos = L.map('pisteCyclable').setView([43.7013, 7.2681], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 15
        }).addTo(mapVelos);
        L.geoJSON(JSON.parse(data), {
          color: 'purple'
        }).addTo(mapVelos);
      }
    }) ;
    
  });

}) ;
