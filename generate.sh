#!/bin/bash

# Generiert die HTML Dateien basierend auf der cards.template Datei.
# Die Aussagen werden aus der cards.lst Datei gelesen und in die HTML Dateien eingefügt.

count=0
while read -r line
do
    count=$(( count + 1 ))
    sed -e "s/##HTML##/$line/g" cards.template > $count.html
done < cards.lst
