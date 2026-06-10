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

const grayIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const yellowIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

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


L.marker([-72.40854450390432, -53.12988281250001],
  { icon: grayIcon })
	.addTo(map)
    .bindPopup("LSPD Substation - Vespucci Beach");

L.marker([-67.5902474708725, -62.31201171875],
  { icon: grayIcon })
	.addTo(map)
    .bindPopup("LSPD Substation - Del Perro (Pier)");

L.marker([-78.64483199293961, -40.34020841008464],
  { icon: redIcon })
	.addTo(map)
    .bindPopup("NOOSE - LSIA");

L.marker([-59.104606327504804, 57.14599609375],
  { icon: redIcon })
	.addTo(map)
    .bindPopup("NOOSE HQ - Palmino Highlands");

L.marker([40.341094329488506, 38.964843750000014],
  { icon: yellowIcon })
	.addTo(map)
    .bindPopup("LSSD Sheriff Station - Sandy Shores");

L.marker([73.67901687017999, -27.834472656249996],
  { icon: yellowIcon })
	.addTo(map)
    .bindPopup("LSSD Sheriff Station - Paleto Bay");

L.marker([12.424287327390914, 34.22851562499999],
  { icon: redIcon })
	.addTo(map)
    .bindPopup("SASPA - Bolingbroke Penitentiary");

map.on('click', function (e) {
    console.log(e.latlng);
});

atlas.addTo(map);
L.control.layers(baseLayers).addTo(map);

map.addEventListener("baselayerchange", e => mapElem.style.backgroundColor = colors[e.name], true);

window.addEventListener('resize', 
	() => map.getViewPort().resize());

		//.......	   
