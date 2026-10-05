/* =========================================
   E-INVITE ENVELOPE
========================================= */

const envelope = document.getElementById("envelope");

const envelopeContainer =
    document.getElementById("envelopeContainer");

const tapText =
    document.getElementById("tapText");


/* =========================================
   OPEN ENVELOPE
========================================= */

function openEnvelope() {

    envelope.classList.add("open");

    envelopeContainer.classList.add("opened");

}


/* =========================================
   CLOSE ENVELOPE
========================================= */

function closeEnvelope() {

    envelope.classList.remove("open");

    envelopeContainer.classList.remove("opened");

}


/* =========================================
   TAP / CLICK
========================================= */

envelope.addEventListener("click", function () {

    const isOpen =
        envelope.classList.contains("open");


    if (!isOpen) {

        openEnvelope();

    }

});


/* =========================================
   KEYBOARD ACCESSIBILITY
========================================= */

envelope.addEventListener("keydown", function (event) {

    if (
        event.key === "Enter" ||
        event.key === " "
    ) {

        event.preventDefault();

        const isOpen =
            envelope.classList.contains("open");


        if (!isOpen) {

            openEnvelope();

        }

    }

});