var map = new L.map('map').setView([0, 0.0], 2);
var mapElem = document.getElementById("map");

map.options.minZoom = 2;
map.options.maxZoom = 7;

const settings = {
    attribution: "",
    maxZoom: 8,
    id: '',
    tileSize: 256,
    zoomOffset: 0,
    detectRetina: true,
    noWrap: true
}

var editableLayers = new L.FeatureGroup();

map.addLayer(editableLayers);

const atlas     = L.tileLayer('./assets/map/tiles-atlas/{z}/{x}/{y}.png', settings);
const terrain   = L.tileLayer('./assets/map/tiles-terrain/{z}/{x}/{y}.png', settings);
const satellite = L.tileLayer('./assets/map/tiles-satellite/{z}/{x}/{y}.png', settings);

const colors = {
    'Map': '#12a7d2',
    'Terrain': '#1862ad',
    'Satellite': '#133d6b'
}

var baseLayers = {
    "Map": atlas,
    "Satellite": satellite,
    "Terrain": terrain
};

L.marker([-65.4918398785205, -46.801231304339915])
  .addTo(map)
  .bindPopup("LSPD - Vespucci");

L.marker([-55.29579867523765, -31.662597656250004])
  .addTo(map)
  .bindPopup("LSPD - Rockford Hills");

L.marker([-53.4357192066942, 0.2929687500000134])
  .addTo(map)
  .bindPopup("LSPD - Vinewood");

L.marker([-70.30150471238284, 9.448242187500002])
  .addTo(map)
  .bindPopup("LSPD - La Mesa");

L.marker([-73.1645422233497, -4.855957031250001])
  .addTo(map)
  .bindPopup("LSSD Sheriff Station - Davis");

L.marker([-67.27377816220924, -2.3291015625000004])
  .addTo(map)
  .bindPopup("LSPD - Mission Row");

const grayIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.marker([-72.40854450390432, -53.12988281250001], { icon: grayIcon }).addTo(map);


map.on('click', function (e) {
    console.log(e.latlng);
});

atlas.addTo(map);
L.control.layers(baseLayers).addTo(map);

map.addEventListener("baselayerchange", e => mapElem.style.backgroundColor = colors[e.name], true);

window.addEventListener('resize', 
	() => map.getViewPort().resize());
