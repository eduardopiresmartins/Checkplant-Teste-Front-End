var platform = new H.service.Platform({
  'apikey': '6TCLHW1W6-dDXi8ErN3eBjhi-XSSeHzNkdCQTpS1HAc'
});


var defaultLayers = platform.createDefaultLayers();

function addMarkerToMap(map) {
  var coord = new nokia.maps.geo.Coordinate(52.53, 13.39),
    standardMarker = new nokia.maps.map.StandardMarker(coord);
  map.objects.add(standardMarker);
}
var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.vector.normal.map,
  {
    zoom: 14,
    center: { lat: 52.5, lng: 13.4 }
  });


var defaultLayers = platform.createDefaultLayers();

var geocodingParams;


var onResult = function (result) {
  var locations = result.Response.View[0].Result,
    position,
    marker;
  
  for (i = 0; i < locations.length; i++) {
    position = {
      lat: locations[i].Location.DisplayPosition.Latitude,
      lng: locations[i].Location.DisplayPosition.Longitude
    };
    map.setCenter(position)
    marker = new H.map.Marker(position);
    map.addObject(marker);
  }
};


var geocoder = platform.getGeocodingService();
