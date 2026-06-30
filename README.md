# DSHS SnowTrex Köln - Saison 2025/26

Statische Webseite mit Spielkarten zur Saison 2025/26 von DSHS SnowTrex Köln in der Sparda 2. Liga Pro.

Die Seite enthält:

- alle 28 Saisonspiele
- Ergebnisse, Satzstände und Ballpunkte
- Tabellenplatz nach dem jeweiligen Spiel
- Spielnummern und matchIds
- Spieldauer, Zuschauer und Spielhalle
- planmäßige Uhrzeit je Spiel
- Teamlogos und Links zu Teamseiten
- MVPs mit Spielerinnenlinks
- Kurzberichte zu den Spielen
- Links zu Spielbericht, Statistik-PDF, YouTube-Video und Bildergalerie
- Punkteverlauf als Kreis-Kette
- Tabellenverlauf und Abschlusstabellen
- Kreuztabelle
- Saisonbilanz
- Kölner MVP-Auswertung
- YouTube-Aufrufe mit Stand 23.06.2026

## Dateien

Die Seite besteht nur aus statischen Dateien:

- `index.html` - HTML-Struktur
- `styles.css` - Layout und Responsive Design
- `app.js` - Rendering, Filter, Sortierung und Berechnungen
- `games.js` - Spieldaten, Links, Logos, MVPs und YouTube-Aufrufe
- `cross-table.js` - Kreuztabelle der Liga

Es gibt keinen Build-Schritt und keine Server-Abhängigkeit.

## Lokal anschauen

Im Projektordner:

```bash
python3 -m http.server 8000
```

Danach im Browser öffnen:

```text
http://localhost:8000/
```

## Veröffentlichung auf knud-zabrocki.de

Empfohlen ist eine statische Unterseite auf dem Webspace.

1. Per FTP/SFTP oder Webhosting-Dateimanager einen Ordner anlegen, zum Beispiel:

```text
/dshs-snowtrex-2025-26/
```

2. Diese fünf Dateien in den Ordner hochladen:

```text
index.html
styles.css
app.js
games.js
cross-table.js
```

3. Danach sollte die Seite erreichbar sein unter:

```text
https://knud-zabrocki.de/dshs-snowtrex-2025-26/
```

## In WordPress einbinden

Wenn die Seite als eigene statische Unterseite auf dem Webspace liegt, kann sie in WordPress per Custom-HTML-Block eingebettet werden:

```html
<iframe
  src="https://knud-zabrocki.de/dshs-snowtrex-2025-26/"
  style="width:100%; height:900px; border:0;"
  loading="lazy">
</iframe>
```

Bei sehr langer Seite kann die Hoehe erhoeht werden. Alternativ ist ein normaler Link auf die Unterseite oft sauberer.

## GitHub Pages

Das Repository kann auch direkt mit GitHub Pages veroeffentlicht werden:

Repository:

```text
https://github.com/Zappi77/dshs-snowtrex-2025-26
```

1. GitHub-Repository oeffnen.
2. `Settings` -> `Pages`.
3. `Deploy from a branch` auswaehlen.
4. Branch `main`, Ordner `/root` waehlen.
5. Speichern.

Danach stellt GitHub eine Pages-URL bereit, typischerweise:

```text
https://zappi77.github.io/dshs-snowtrex-2025-26/
```

Diese URL kann ebenfalls in WordPress verlinkt oder per iframe eingebettet werden.

## Daten aktualisieren

Die meisten Inhalte stehen in `games.js`.

Typische Anpassungen:

- YouTube-Aufrufe: `youtubeViews`
- Stichtag der YouTube-Aufrufe: `youtubeViewsDate`
- neue/andere Links: `videoUrl`, `galleryUrl`, `articleUrl`
- Spieltexte: `gameSummaries`
- MVPs: `mvps`
- Logos: `teamLogoUrls`

Nach Aenderungen:

```bash
git add .
git commit -m "Update season data"
git push
```

## Hinweise

Die Teamlogos, Bildergalerien, Spielberichte, Statistik-PDFs und YouTube-Videos werden extern verlinkt. Im Repository liegen nur die statischen Seitendateien und die strukturierten Daten.

## Weitere Saisonseiten

- `bbsc-berlin-2025-26/`
- `bayervolleys-leverkusen-2025-26/`
- `eintracht-spontent-duesseldorf-2025-26/`
- `esa-grimma-volleys-2025-26/`
- `nawaro-straubing-2025-26/`
- `neuseenland-volleys-markkleeberg-2025-26/`
- `rote-raben-vilsbiburg-2025-26/`
- `sparkassen-wildcats-stralsund-2025-26/`
- `tv-planegg-krailling-2025-26/`
- `tv-dingolfing-2025-26/`
- `tv-waldgirmes-2025-26/`
- `tv-hoerde-2025-26/`
- `vco-dresden-2025-26/`
- `vfl-oythe-2025-26/`

## Änderungshistorie

### 23.06.2026

- statische Webseite mit 28 Spielkarten erstellt
- Einzelsatzergebnisse, Ballpunkte, Spielnummern und matchIds ergänzt
- Tabellenplatz nach jedem Spiel ergänzt
- Teamlogos und Teamseiten verlinkt
- MVPs mit Spielerinnenprofilen ergänzt
- Kurzberichte, Spielberichte, Statistik-PDFs, YouTube-Links und Bildergalerien ergänzt
- Punkteverlauf als Kreis-Kette ergänzt
- Saisonbilanz mit Satz-, Ballpunkt- und Punktekennzahlen ergänzt
- Kölner MVP-Auswertung mit Gold-/Silber-Medaillen ergänzt
- YouTube-Aufrufzahlen direkt aus YouTube-Watchdaten ausgelesen und ergänzt
- responsive Darstellung für Smartphone, Tablet und Desktop geprüft
- öffentliches GitHub-Repository erstellt
- README mit Veröffentlichungsanleitung ergänzt
- CSS- und JavaScript-Dateien per Versionsparameter gegen Browser-Cache abgesichert

### 24.06.2026

- Header-Sprungnavigation ergänzt
- Sprungnavigationen unter den Auswertungsrubriken ergänzt
- Rücksprung zu den Spielkarten in den Rubriknavigationen ergänzt
- grafischen Tabellenverlauf nach Spieltagen ergänzt
- x-Achse im Tabellenverlauf auf alle 28 Spieltage erweitert
- Abschlusstabellen inklusive Heim- und Auswärtstabelle ergänzt
- Trennlinien und Umschaltung für Normal-/Heim-/Auswärtstabelle ergänzt
- Saisonbilanz um Gesamt-/Heim-/Auswärtsumschaltung erweitert
- planmäßige Uhrzeiten in den Spielkarten ergänzt
- Kreuztabelle als eigene Rubrik ergänzt

### 25.06.2026

- externen Linkcheck fuer 156 eindeutige Links durchgeführt
- defekten Live-Statistik-PDF-Link fuer Spiel #3018 durch funktionierenden offiziellen SAMS-PDF-Link ersetzt
- Statistik-Link-Rendering um optionale `statsUrl` je Spiel erweitert

### 30.06.2026

- offizielle SAMS-Spielberichte für alle 28 Kölner Saisonspiele separat verlinkt
- zusätzliche VBL-Live-Spielstatistik nach Spielnummer für alle 28 Spiele ergänzt
- Live-Statistik für Spiel #3018 wegen HTTP 404 als nicht verfügbar gekennzeichnet; 27 Statistik-PDFs erfolgreich geprüft
- Linkraster der Spielkarten für fünf Aktionen erweitert
- alle 97 auf den 28 Spieldetailseiten hinterlegten Vor- und Spielberichte erfasst
- bisher einzelnen Artikel-Link durch eine eigene Artikelzeile mit zwei bis fünf Titellinks je Spiel ersetzt
- 26 bislang direkt verlinkte Berichte auf dshs-snowtrex-koeln.de zusätzlich in den Artikelzeilen beibehalten
- Ursprung aller Artikel anhand der VBL-Autorenangabe ermittelt und mit farbigem Vereinskürzel am Link gekennzeichnet
