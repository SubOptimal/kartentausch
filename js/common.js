// Funktion, um die Seitennummer aus der URL zu extrahieren
function getCurrentPageNumber() {
    var currentPage = window.location.pathname.match(/\/(\d+)\.html/);
    return currentPage ? currentPage[1] : null;
}

// Funktion, um die Seitennummer anzuzeigen
function displayCurrentPageNumber() {
    var currentPageNumber = getCurrentPageNumber();
    var displayElement = document.getElementById("currentPageNumber");

    if (currentPageNumber !== null) {
        displayElement.innerHTML = "Deine Karte hat die Nummer " + currentPageNumber + ".";
    } else {
        displayElement.innerHTML = "Du bist auf einer unbekannten Seite.";
    }
}

// Funktion, um zur nächsten Seite weiterzuleiten
function redirectToPage() {
    var enteredNumber = document.getElementById("numberInput").value;

    if (enteredNumber.trim() !== "") {
        window.location.href = "/kartentausch/" + enteredNumber + ".html";
    } else {
        alert("Bitte gebe die erhaltene Nummer ein.");
    }
}

// Funktion, um zur zufälligen Seite weiterzuleiten
function redirectToRandomPage() {
    var maxPages = 30; // Hier die maximale Seitenanzahl eintragen
    var randomPageNumber = Math.floor(Math.random() * maxPages) + 1;
    window.location.href = "/kartentausch/" + randomPageNumber + ".html";
}