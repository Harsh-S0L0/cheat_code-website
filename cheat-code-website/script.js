// GTA and NFS Modal functionality
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

    window.onclick = function (event) {
        if (event.target == gtaModal) {
            gtaModal.style.display = "none";
        }
    };
}

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

    window.onclick = function (event) {
        if (event.target == nfsModal) {
            nfsModal.style.display = "none";
        }
    };
}