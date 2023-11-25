// Funktion, um zur nächsten Seite weiterzuleiten
function redirectToPage() {
    var enteredNumber = document.getElementById("numberInput").value;

    if (enteredNumber.trim() !== "") {
        window.location.href = "/kartentest5/" + enteredNumber + ".html";
    } else {
        alert("Bitte gebe die erhaltene Nummer ein.");
    }
}

// Funktion, um zur zufälligen Seite weiterzuleiten
function redirectToRandomPage() {
    var maxPages = 30; // Hier die maximale Seitenanzahl eintragen
    var randomPageNumber = Math.floor(Math.random() * maxPages) + 1;
    window.location.href = "/kartentest5/" + randomPageNumber + ".html";
}
