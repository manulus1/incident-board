(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  function parseZiel(text) {
    const bereinigt = String(text).replace(/[^\d]/g, "");
    return bereinigt ? Number(bereinigt) : null;
  }

  function formatZahl(wert, original) {
    if (original.indexOf("'") !== -1) {
      return wert.toLocaleString("de-CH");
    }
    return String(wert);
  }

  function zaehleHoch(element, dauer) {
    const original = element.textContent.trim();
    const ziel = parseZiel(original);
    if (ziel === null) {
      return;
    }

    const start = performance.now();

    function frame(jetzt) {
      const fortschritt = Math.min((jetzt - start) / dauer, 1);
      const geglaettet = 1 - Math.pow(1 - fortschritt, 3);
      const wert = Math.round(ziel * geglaettet);
      element.textContent = formatZahl(wert, original);
      if (fortschritt < 1) {
        requestAnimationFrame(frame);
      } else {
        element.textContent = original;
      }
    }

    element.textContent = formatZahl(0, original);
    requestAnimationFrame(frame);
  }

  document
    .querySelectorAll(
      ".showcase-kennzahlen strong, .risikowert strong, .signalwert strong"
    )
    .forEach(function (element, index) {
      setTimeout(function () {
        zaehleHoch(element, 900 + index * 120);
      }, 180);
    });

  const terminal = document.querySelector(".terminalinhalt");
  if (!terminal) {
    return;
  }

  const zusatzzeilen = [
    {
      stufe: "INFO",
      klasse: "terminal-ok",
      text: "Integritätsprüfung abgeschlossen",
    },
    {
      stufe: "WARN",
      klasse: "terminal-warn",
      text: "Abweichung bleibt lokal begrenzt",
    },
    {
      stufe: "INFO",
      klasse: "terminal-ok",
      text: "Nächster Prüfschritt vorbereitet",
    },
  ];

  let index = 0;
  let totalSekunden = 28;

  setInterval(function () {
    const zeile = zusatzzeilen[index % zusatzzeilen.length];
    const absatz = document.createElement("p");
    const zeit = document.createElement("time");
    const stufe = document.createElement("span");

    totalSekunden += 2;
    const minuten = 3 + Math.floor(totalSekunden / 60);
    const sekunden = totalSekunden % 60;
    zeit.textContent =
      "10:" +
      String(minuten).padStart(2, "0") +
      ":" +
      String(sekunden).padStart(2, "0");
    stufe.className = zeile.klasse;
    stufe.textContent = zeile.stufe;
    absatz.className = "neu";
    absatz.appendChild(zeit);
    absatz.appendChild(stufe);
    absatz.appendChild(document.createTextNode(" " + zeile.text));

    const alteZeilen = terminal.querySelectorAll("p");
    if (alteZeilen.length >= 6) {
      alteZeilen[0].remove();
    }

    terminal.appendChild(absatz);
    index += 1;
  }, 3200);
})();
