# Bewerbertag – Einzelaufgabe „Operation Restore“

Offlinefähiges Aufgabenpaket für 15- bis 16-jährige Kandidat:innen ohne vorausgesetzte Informatik- oder Programmierkenntnisse.

## Inhalt

```text
Bewerbertag/
├── backup/start-original/       unveränderte Aufgaben-Vorlage (nur 3 Dateien)
├── projekt/start/               bearbeitbarer Startstand der Aufgabe
├── projekt/showcase/            erweiterte Ansichten (eigene Dateien, in der Nav verlinkt)
├── scripts/reset.ps1            Kandidatenordner erzeugen oder zurücksetzen
└── unterlagen/
```

Eine Musterlösung ist bewusst nicht Bestandteil des Pakets.

Die erweiterten Ansichten liegen unter `projekt/showcase/` und erscheinen in der
Hauptnavigation unter «Lagebild». Ihre Dateien liegen bewusst **nicht**
im Aufgabenordner, damit Kandidat:innen nicht verwirrt werden. Die Incident-Karte
nutzt MapLibre und benötigt Internet.

## Technische Voraussetzungen

- Windows-PC
- aktueller Edge-, Chrome- oder Firefox-Browser
- einfacher Code-Editor, empfohlen Visual Studio Code
- PowerShell für die Arbeitsplatzvorbereitung

Nicht benötigt werden Internetzugang, Benutzerkonto, Node.js, Paketinstallation, lokaler Server oder Build-Schritt.

## Einmalige Vorbereitung

1. Den vollständigen Ordner auf den Betreuungs-PC kopieren.
2. Prüfen, dass `backup/start-original` nur `index.html`, `style.css` und `script.js` enthält.
3. PowerShell im Projektordner öffnen.
4. Für jede Person einen neutral benannten Arbeitsplatz erzeugen:

```powershell
.\scripts\reset.ps1 -Name Kandidat-01
.\scripts\reset.ps1 -Name Kandidat-02
```

5. Im jeweiligen Ordner unter `arbeitsplaetze/<Name>/start`:
   - `index.html` im Browser öffnen,
   - den Ordner `start` im Editor öffnen,
   - Browser und Editor nebeneinander anordnen.

Keine echten Namen in Ordnernamen verwenden, wenn die Geräte gemeinsam sichtbar sind.
Den Showcase-Ordner nicht im Editor als Arbeitsprojekt öffnen.

## Start ohne Skript

Falls PowerShell nicht verfügbar ist:

1. `backup/start-original` nach `arbeitsplaetze/Kandidat-03/start` kopieren.
2. Optional `projekt/showcase` nach `arbeitsplaetze/Kandidat-03/showcase` kopieren, damit die Nav-Links funktionieren.
3. In `start` die Datei `index.html` doppelklicken.
4. Genau den Ordner `start` im Editor öffnen.

## Sicherer Reset

Der Reset löscht keinen Arbeitsstand. Existiert der angegebene Kandidatenordner bereits, wird er mit Zeitstempel umbenannt. Danach wird eine frische Kopie aus `backup/start-original` erstellt.

```powershell
.\scripts\reset.ps1 -Name Kandidat-01
```

Nach einem Reset bereits erledigte Änderungen nur dann übertragen, wenn die Person sie zuvor selbst erfolgreich umgesetzt hatte. Den technischen Reset im Beobachtungsbogen notieren.

## Durchführung

1. Gemeinsame Einführung anhand des [Betreuungsleitfadens](unterlagen/Betreuungsleitfaden.md).
2. Um 10:00 nur das [Aufgabenblatt](unterlagen/Aufgabenblatt.md) ausgeben.
3. Bei Bedarf mündlich helfen; keine Hilfekarten ausgeben.
4. Zusatzkarten nicht sichtbar auslegen. Erst nach abgeschlossener Basisaufgabe passend und freiwillig anbieten.
5. Beobachtungen laufend im [Beobachtungsbogen](unterlagen/Beobachtungsbogen.md) mit konkreten Beispielen festhalten.

## Recherche-Regel

Die Reihenfolge lautet:

1. Auftrag und Code untersuchen
2. Meldung bei der Betreuung und mündliche Hilfe
3. gezielte Web-Recherche nach Freigabe

KI-Werkzeuge werden während der Einzelphase nicht verwendet.

## Kurztest vor jedem Bewerbertag

- [ ] Startseite wird mit Gestaltung angezeigt.
- [ ] Browser-Konsole zeigt beim Laden keinen Fehler.
- [ ] Button „Systeme prüfen“ reagiert.
- [ ] Seite funktioniert bei deaktiviertem Netzwerk.
- [ ] Startstand enthält die fünf markierten Manipulationen.
- [ ] Im Editor liegt nur der Ordner `start` mit `index.html`, `style.css` und `script.js`.
- [ ] Showcase ist über die Navigation erreichbar, aber nicht Teil des Editor-Projekts.
- [ ] Reset erzeugt eine neue Kopie.
- [ ] Zweiter Reset sichert den vorherigen Stand.
- [ ] Aufgabenblatt und Beobachtungsbogen sind verfügbar.
- [ ] Zusatzkarten liegen verdeckt bereit.
- [ ] Reservegerät wurde getestet.

## Erwarteter Startzustand

Der Startstand ist absichtlich nicht korrekt:

- auffällige Hauptüberschrift,
- widersprüchlicher Hauptstatus,
- manipulierter Protokolleintrag,
- ungeeignete kritische Farbe,
- falsche Anzahl betroffener Systeme.

Diese Punkte dürfen vor der Durchführung nicht „vorsorglich“ korrigiert werden.
