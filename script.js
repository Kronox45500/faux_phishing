const lines = [
    "Connexion au téléphone...",
    "Analyse des données personnelles...",
    "Récupération des contacts...",
    "Extraction des photos...",
    "Transfert des mots de passe..."
];

let index = 0;

function displayLine() {
    if (index < lines.length) {
        document.getElementById(`line${index + 1}`).textContent = lines[index];
        index++;
        setTimeout(displayLine, 1200);
    } else {
        document.getElementById("revealBtn").classList.remove("hidden");
    }
}

displayLine();

document
    .getElementById("revealBtn")
    .addEventListener("click", () => {
        document
            .getElementById("simulation")
            .classList.add("hidden");

        document
            .getElementById("awareness")
            .classList.remove("hidden");
    });
