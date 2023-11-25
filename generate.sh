#!/bin/bash

# Generiert die HTML-Dateien basierend auf der cards.template-Datei und cards.lst-Datei.
# Die Aussagen werden aus der cards.lst-Datei gelesen und in die HTML-Dateien eingefügt.
# Es wird die Nummer generiert und eingefügt.

count=0
while read -r line
do
    count=$(( count + 1 ))
    sed -e "s|<!-- Inhalt der Karte -->|$line|g; s|<!-- Kartennummer -->|$count|g" cards.template > "$count.html"
done < cards.lst
