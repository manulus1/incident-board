const pruefenButton = document.querySelector("#systemPruefen");
const pruefErgebnis = document.querySelector("#pruefErgebnis");
const hauptstatus = document.querySelector("#hauptstatus");

pruefenButton.addEventListener("click", function () {
  // Mission 5: Zwei Systeme sind betroffen.
  const anzahlBetroffeneSysteme = 0;

  pruefErgebnis.textContent =
    "Prüfung beendet: " + anzahlBetroffeneSysteme + " Systeme betroffen.";

  hauptstatus.textContent = "PRÜFUNG BEENDET";
});
