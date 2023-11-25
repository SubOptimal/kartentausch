# Kartentausch
Eine digitale Variante für die Kartentausch-Methode

## Was ist das hier?
Mit diesem Tool lässt sich die Methode des Kartentausch digital umsetzen. Sie funktioniert wie folgt:
1. Jede Person zieht zufällig eine Karte.
2. Alle bewegen sich durch den Raum. Wenn man eine andere Person trifft stellt man sich gegenseitig die Karte vor und erläutert die eigene Position dazu. Je nach Thema der Karten kann es z.B. darum gehen, eine Aufwachfrage zu beantworten, zu einem Statement Position zu beziehen oder darzustellen, wie man zu einer auf der Karte vorgestellten Idee steht.
3. Danach werden Karten digital getauscht. Dazu sagt man sich gegenseitig die angezeigte Kartnennummer, trägt die Nummer des jeweiligen Partners/ der Partnerin bei sich ein und klickt auf Karten tauschen. Falls beide die gleiche Karte haben, lässt sich auch erneut per Zufall eine Karte anzeigen.
4. Anschließend sucht man das nächste Gespräch.
5. Diese Gespräche können fortgesetzt werden, solange Zeit dafür zur Verfügung steht.

Das Ziel der Methode ist es, in einen intensiven Austausch zu kommen und sich einem Thema in einer Gruppe kollaborativ zu nähern.

## Wie kann ich das Tool nutzen?
In der hier veröffentlichten Variante sind fiktive Statements zum Thenma KI auf den Karten vorhanden. In den Gesprächen geht es darum, darzustellen, ob man das so ähnlich oder ganz anders sehen würde. Du kannst die Online-Variante direkt ohne weitere Änderungen nutzen, wenn Du z.B. Workshops zum Thema KI anbietest. [Hier ist die Online-Version](https://ebildungslabor.github.io/kartentausch/)

## Wie kann ich das Tool für mich anpassen?
Der Reiz der Kartentausch-Methode liegt vor allem darin, dass man für jede Gruppe und jedes Thena passende Karten vorbereiten kann. Wenn Du in diesem Sinne Deine eigenen Karten gestalten und z.B. in einem Lernangebot einsetzen willst, kannst Du Dir den Code aus diesem Repository herunterladen und dann deine eigenen Karteninhalte in die Datei 'cards.lst' eintragen. Danach führst Du die Datei generate.sh aus und erhältst auf diese Weise Dein Kartenset, das Du via Github oder auch auf einer eigenen Website veröffentlichen kannst. 

Bitte beachte: 
* Wenn Du mehr oder weniger als 30 Karten gestalten willst, musst Du in der js/common.js Datei in Zeile 32 eintragen, wieviele Karten Du hast.
* Je nachdem, wo Du die Inhalte veröffentlichst, musst Du evtl. die zu generierende URL in der js/common.js Datei in den Zeilen 24 und 34 ändern. Der Standardwert ist /kartentausch/, d.h. Du würdest das Tool unter irgendeineurl.xyz/kartentausch veröffentlichen.
* Das Design der Website nutzt das [PicoCSS](https://picocss.com/). Änderungen kannst Du im Ordner CSS vornehmen.

## Was mache ich, wenn ich Ideen zur Weiterentwicklung habe?
Ich freue mich über Änderungsvorschläge und Fehlerkorrektur. 

Danke an [Frank Dietrich](https://github.com/SubOptimal), der aus meinem sehr rudimentären Copy & Paste Code ein 'richtiges' Tool programmiert hat 😻  


