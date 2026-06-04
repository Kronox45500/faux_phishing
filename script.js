const guide = document.getElementById("guide");
const hack = document.getElementById("hack");
const awareness = document.getElementById("awareness");

const progressBar = document.getElementById("progress-bar");
const percentage = document.getElementById("percentage");
const logs = document.getElementById("logs");
const statusText = document.getElementById("status");
const revealBtn = document.getElementById("revealBtn");

const overlay = document.querySelector(".overlay-flash");

const messages = [
    "Connexion au téléphone...",
    "Analyse des données personnelles...",
    "Extraction des contacts...",
    "Extraction des photos...",
    "Récupération des mots de passe...",
    "Transmission vers serveur distant...",
    "Téléchargement terminé."
];

setTimeout(startHackSimulation, 7000);

function startHackSimulation() {

    guide.classList.add("hidden");
    hack.classList.remove("hidden");

    let progress = 0;
    let msgIndex = 0;

    const interval = setInterval(() => {

        progress += Math.floor(Math.random() * 7) + 3;

        if(progress > 100){
            progress = 100;
        }

        progressBar.style.width = progress + "%";
        percentage.textContent = progress + "%";

        if(navigator.vibrate){
            navigator.vibrate([100, 50, 100]);
        }

        overlay.classList.remove("flash");
        void overlay.offsetWidth;
        overlay.classList.add("flash");

        if(msgIndex < messages.length){

            const line = document.createElement("p");
            line.classList.add("log");
            line.textContent = "✓ " + messages[msgIndex];

            logs.appendChild(line);

            statusText.textContent = messages[msgIndex];

            msgIndex++;
        }

        if(progress >= 100){

            clearInterval(interval);

            statusText.textContent =
                "COMPROMISSION TERMINÉE";

            revealBtn.classList.remove("hidden");
        }

    }, 500);
}

revealBtn.addEventListener("click", () => {

    hack.classList.add("hidden");
    awareness.classList.remove("hidden");

    if(navigator.vibrate){
        navigator.vibrate(0);
    }
});
