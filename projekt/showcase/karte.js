const standorte = [
  {
    name: "Basel",
    detail: "INC-07A · Portal",
    status: "kritisch",
    lng: 7.5886,
    lat: 47.5596,
  },
  {
    name: "Zürich",
    detail: "INC-14C · E-Mail",
    status: "warnung",
    lng: 8.5417,
    lat: 47.3769,
  },
  {
    name: "St. Gallen",
    detail: "Keine Störung",
    status: "online",
    lng: 9.3767,
    lat: 47.4245,
  },
  {
    name: "Bern",
    detail: "INC-11F · API",
    status: "kritisch",
    lng: 7.4474,
    lat: 46.948,
  },
  {
    name: "Luzern",
    detail: "INC-09B · Sync",
    status: "warnung",
    lng: 8.3093,
    lat: 47.0502,
  },
  {
    name: "Lausanne",
    detail: "Keine Störung",
    status: "online",
    lng: 6.6323,
    lat: 46.5197,
  },
];

const karte = new maplibregl.Map({
  container: "incidentKarte",
  style: "https://tiles.openfreemap.org/styles/dark",
  center: [8.2, 46.8],
  zoom: 7.1,
  minZoom: 6,
  maxZoom: 12,
  attributionControl: false,
});

karte.addControl(
  new maplibregl.NavigationControl({ showCompass: false }),
  "top-right"
);

karte.addControl(
  new maplibregl.AttributionControl({ compact: true }),
  "bottom-right"
);

karte.on("load", function () {
  standorte.forEach(function (standort, index) {
    const markerElement = document.createElement("div");
    markerElement.className = "karte-marker punkt-" + standort.status;
    markerElement.style.animationDelay = 180 + index * 120 + "ms";
    markerElement.innerHTML =
      '<span class="punkt"></span>' +
      "<div><strong>" +
      standort.name +
      "</strong><small>" +
      standort.detail +
      "</small></div>";

    new maplibregl.Marker({
      element: markerElement,
      anchor: "left",
      offset: [0, 0],
    })
      .setLngLat([standort.lng, standort.lat])
      .addTo(karte);
  });

  karte.easeTo({
    center: [8.2, 46.8],
    zoom: 7.35,
    duration: 1800,
    easing: function (t) {
      return 1 - Math.pow(1 - t, 3);
    },
  });
});
