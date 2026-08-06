# Cyber Incident: Operation Restore

## Dein Auftrag

Das interne Status-Dashboard von **NOVA Operations** wurde verändert. Einige Texte, Anzeigen und Werte stimmen nicht mehr.

Du übernimmst die Rolle einer Junior-Entwicklerin oder eines Junior-Entwicklers. Stelle das Dashboard Schritt für Schritt wieder her. Du brauchst dafür **keine Programmiererfahrung**

Es zählt nicht, wie schnell du bist. Wichtig ist, wie du vorgehst, ausprobierst, kontrollierst und bei Bedarf nach Hilfe fragst.

## Drei Dateien – drei Aufgaben

- **HTML (**`index.html`**)** enthält Texte und den Aufbau der Seite.
- **CSS (**`style.css`**)** bestimmt Farben und Aussehen.
- **JavaScript (**`script.js`**)** bestimmt, was beim Klick auf den Button geschieht.



## Bevor du beginnst

1. Öffne den Ordner `projekt/start`.
2. Öffne `index.html` im Browser.
3. Öffne den ganzen Ordner `start` im Editor.
4. Lege Browser und Editor nebeneinander.
5. Betrachte die Seite für zwei Minuten. Was wirkt verdächtig oder unpassend?

Nach jeder Änderung gilt:

1. Datei speichern: `Ctrl` + `S`
2. Browser neu laden: `Ctrl` + `R`
3. Ergebnis kontrollieren
4. Erst danach zur nächsten Mission wechseln

---



## Mission 1 – Einsatzmeldung wiederherstellen

**Datei:** `index.html`  
**Suche nach:** `ALLES KAPUTT`

Die grosse Überschrift wurde manipuliert. Ersetze den gesamten Text durch:

> SYSTEME UNTER PRÜFUNG.

**Prüfung:** Speichern und Browser neu laden. Ist die neue Überschrift vollständig sichtbar?

- [ ] Änderung gespeichert
- [ ] Im Browser geprüft

---



## Mission 2 – Hauptstatus korrigieren

**Datei:** `index.html`  
**Suche nach:** `ALLES NORMAL`

Der Hauptstatus widerspricht den angezeigten Störungen. Ändere ihn zu:

> STÖRUNG ERKANNT

Achte darauf, nur den sichtbaren Text und nicht die Zeichen `<` und `>` zu verändern.

**Prüfung:** Der neue Status steht im oberen Vorfallbereich neben dem Prüf-Button.

- [ ] Änderung gespeichert
- [ ] Im Browser geprüft

---



## Mission 3 – Protokolleintrag bereinigen

**Datei:** `index.html`  
**Suche nach:** `H4H4`

Ersetze den manipulierten Eintrag durch eine sachliche Meldung:

> Unbekannte Änderung am Dashboard

**Prüfung:** Im Ereignisprotokoll stehen weiterhin drei Einträge.

- [ ] Änderung gespeichert
- [ ] Im Browser geprüft

---



## Mission 4 – Kritische Farbe reparieren

**Datei:** `style.css`  
**Suche nach:** `--kritisch`

Die kritischen Anzeigen sind violett. Für dieses Dashboard sollen sie rot erscheinen. Ersetze beim ersten Vorkommen von `--kritisch` nur den Farbwert durch:

> #ff5a54

**Prüfung:** Mindestens drei Stellen der Seite sind jetzt rot: der Hauptstatus, „OFFLINE“ und der letzte Protokolleintrag.

- [ ] Änderung gespeichert
- [ ] Im Browser geprüft



### Kurz erklärt: Farbcodes

Ein Farbcode beginnt mit `#` und enthält sechs Zeichen. Das Semikolon `;` dahinter muss stehen bleiben.

---



## Mission 5 – Systemprüfung korrigieren

**Datei:** `script.js`  
**Suche nach:** `anzahlBetroffeneSysteme`

Im Dashboard sind zwei Systeme betroffen: eines ist offline und eines eingeschränkt. Im JavaScript wurde jedoch die Zahl manipuliert.

Ändere in der Zeile unter dem Kommentar `Mission 5` die falsche Zahl auf die richtige Anzahl. Verändere sonst nichts.

**Prüfung:**

1. Speichern und Browser neu laden.
2. Auf „Systeme prüfen“ klicken.
3. Die Meldung muss die richtige Anzahl betroffener Systeme anzeigen.

- [ ] Änderung gespeichert
- [ ] Button getestet
- [ ] Angezeigte Anzahl kontrolliert



### Kurz erklärt: Anführungszeichen und Klammern

Texte stehen in JavaScript zwischen Anführungszeichen. Runde `()`, eckige `[]` und geschweifte `{}` Klammern gehören immer zusammen. Für diese Mission musst du keine davon verändern.

---



## Mission 6 – Abschlusskontrolle

Teste das Dashboard wie eine andere Person, die deine Änderungen nicht kennt:

- [ ] Seite neu geladen
- [ ] Überschrift verständlich
- [ ] Hauptstatus passt zu den Diensten
- [ ] Kritische Anzeigen rot
- [ ] Protokoll sachlich
- [ ] Prüf-Button funktioniert
- [ ] Keine versehentlich gelöschten Inhalte entdeckt



Wenn alles erledigt ist, melde dich bei der Betreuung. Deine Aufgabe ist damit **vollständig abgeschlossen**. Falls noch Zeit und Interesse vorhanden sind, erhältst du freiwillig eine weitere Missionskarte.

## Wenn du nicht weiterkommst

1. Lies den Auftrag nochmals langsam.
2. Prüfe Dateiname und Suchbegriff.
3. Vergleiche deine letzte Änderung mit den Zeilen rundherum.
4. Melde dich bei der Betreuung und erkläre kurz, woran du arbeitest und was nicht klappt.

Um Hilfe zu bitten ist ausdrücklich erlaubt. Die Betreuung hilft dir mündlich weiter. KI-Werkzeuge werden während dieser Einzelaufgabe nicht verwendet.