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

L.marker([400, 350])
  .addTo(map)
  .bindPopup("Test");

atlas.addTo(map);
L.control.layers(baseLayers).addTo(map);

map.addEventListener("baselayerchange", e => mapElem.style.backgroundColor = colors[e.name], true);

window.addEventListener('resize', 
	() => map.getViewPort().resize());
