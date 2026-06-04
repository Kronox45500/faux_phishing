const guide = document.getElementById("guide");
const hack = document.getElementById("hack");
const awareness = document.getElementById("awareness");

const progressBar = document.getElementById("progressBar");
const percent = document.getElementById("percent");
const logs = document.getElementById("logs");
const status = document.getElementById("status");
const revealBtn = document.getElementById("revealBtn");
const flash = document.getElementById("flash");

revealBtn.style.display = "none";

const messages = [
    "Connexion à l'appareil...",
    "Analyse des données personnelles...",
    "Extraction des contacts...",
    "Extraction des photos...",
    "Extraction des messages...",
    "Récupération des mots de passe...",
    "Transmission vers serveur distant..."
];

setTimeout(startSimulation, 5000);

function startSimulation(){

    guide.classList.remove("active");
    hack.classList.add("active");

    triggerFlash();
    vibrate(700);

    let progress = 0;
    let logIndex = 0;

    const interval = setInterval(() => {

        progress += Math.floor(Math.random()*6)+4;

        if(progress > 100){
            progress = 100;
        }

        progressBar.style.width = progress + "%";
        percent.textContent = progress + "%";

        if(progress === 50){
            vibrate(400);
            triggerFlash();
        }

        if(logIndex < messages.length){

            const p = document.createElement("div");
            p.className = "log";
            p.textContent = "✓ " + messages[logIndex];

            logs.appendChild(p);

            status.textContent = messages[logIndex];

            logIndex++;
        }

        if(progress >= 100){

            clearInterval(interval);

            status.textContent =
                "COMPROMISSION TERMINÉE";

            vibrate([200,100,200,100,200]);

            triggerFlash();

            revealBtn.style.display = "block";
        }

    }, 900);
}

function triggerFlash(){

    flash.classList.remove("flash");
    void flash.offsetWidth;
    flash.classList.add("flash");
}

function vibrate(pattern){

    if(navigator.vibrate){
        navigator.vibrate(pattern);
    }
}

revealBtn.addEventListener("click", () => {

    hack.classList.remove("active");
    awareness.classList.add("active");

});
