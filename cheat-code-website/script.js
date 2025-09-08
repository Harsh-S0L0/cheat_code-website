// GTA Modal functionality
const gtaCard = document.getElementById("gtaCard");
const gtaModal = document.getElementById("gtaModal");
const closeModal = document.getElementById("closeModal");

if (gtaCard && gtaModal && closeModal) {
    gtaCard.onclick = function () {
        gtaModal.style.display = "block";
    };

    closeModal.onclick = function () {
        gtaModal.style.display = "none";
    };
}

// NFS Modal functionality
const nfsCard = document.getElementById("nfsCard");
const nfsModal = document.getElementById("nfsModal");
const closeNfsModal = document.getElementById("closeNfsModal");

if (nfsCard && nfsModal && closeNfsModal) {
    nfsCard.onclick = function () {
        nfsModal.style.display = "block";
    };

    closeNfsModal.onclick = function () {
        nfsModal.style.display = "none";
    };
}

// Close modals when clicking outside modal content
window.onclick = function (event) {
    if (gtaModal && event.target === gtaModal) {
        gtaModal.style.display = "none";
    }
    if (nfsModal && event.target === nfsModal) {
        nfsModal.style.display = "none";
    }
}


let waitBtnContainer = document.querySelector(".wait-btn");
let waitBtn = document.querySelector("#waitButton");
waitBtnContainer.style.display = "none";

// Handle all .btn clicks
document.querySelectorAll(".btn").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        e.preventDefault();

        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

        waitBtnContainer.style.display = "block";
        waitBtn.textContent = "Wait 5 Seconds";
        waitBtn.removeAttribute("href");
        waitBtn.style.pointerEvents = "none";
        waitBtn.style.background = "gray";

        let timer = 5;
        let interval = setInterval(function() {
            timer--;
            if (timer > 0) {
                waitBtn.textContent = `Wait ${timer} Seconds`;
            } else {
                clearInterval(interval);
                waitBtn.textContent = "Go";
                waitBtn.style.pointerEvents = "auto";
                waitBtn.style.background = "green";
                waitBtn.setAttribute("href", "./cheatsheet.html");
            }
        }, 1000);
    });
});

// Open new tab when "Go" is clicked
waitBtn.addEventListener("click", function(e) {
    if (waitBtn.textContent === "Go") {
        e.preventDefault();
        window.open(waitBtn.getAttribute("href"), "_blank");
        waitBtnContainer.style.display = "none";
    } else {
        e.preventDefault();
    }
});
