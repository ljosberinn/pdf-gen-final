"use strict";

var gearbeiteteMinuten = 0;
var arbeitszeit = 0;

/**
 * Scannt alle #creation-tbody-Felder nach Inhalten und gibt "true" zurück falls etwas eingegeben wurde
 *
 * @returns {boolean}
 */
var scanInputs = function scanInputs() {
  var hasValue = false;

  var els = [
    document.getElementById("von"),
    document.getElementById("bis"),
    document.getElementById("außer-haus")
  ];

  Array.from(document.querySelectorAll("#creation-tbody input")).forEach(
    function (el) {
      return els.push(el);
    }
  );

  els.forEach(function (el) {
    if (el.value !== "") {
      hasValue = true;
    }
  });

  return hasValue;
};

/**
 * Aktiviert oder deaktiviert den "Zeilen leeren"-Button sobald etwas zum leeren vorhanden ist
 *
 */
var toggleContentRemoveButton = function toggleContentRemoveButton() {
  document.getElementById("remove-contents").disabled = !scanInputs();
};

/**
 * Färbt Tagessumme abhängig von gearbeiteteMinuten und Arbeitszeit ein
 *
 */
var updateTagessumme = function updateTagessumme() {
  var tagessumme = document.getElementById("tagessumme").classList;

  gearbeiteteMinuten > arbeitszeit
    ? tagessumme.add("is-danger")
    : tagessumme.remove("is-danger");
};

/**
 * Aktualisiert den Posten 890
 *
 */
var update890Row = function update890Row() {
  var minuten890 = arbeitszeit - gearbeiteteMinuten;

  var row890 = document.getElementById("tr-890");
  var min890 = document.getElementById("minuten-890");

  min890.value = minuten890;

  if (minuten890 === 0) {
    row890.style.opacity = 0;
  } else {
    minuten890 < 0
      ? min890.classList.add("is-danger")
      : min890.classList.remove("is-danger");
    row890.style.opacity = 1;
  }
};

/**
 *  Gibt den Wert des Elements zurück; 0 falls 0 | NaN
 *
 * @param {HTMLElement} el
 */
var extractInputVal = function extractInputVal(el) {
  var val = 0;

  val = parseInt(el.value);

  if (!isNaN(val)) {
    return val;
  }
  return 0;
};

/**
 * Summiert Minuten
 *
 */
var minutesCalculator = function minutesCalculator() {
  var resultTarget = document.getElementById("tagessumme");
  var result = 0;

  Array.from(document.querySelectorAll('[id^="minuten-"]')).forEach(function (
    el
  ) {
    if (el.id !== "minuten-890") result += extractInputVal(el);
  });

  gearbeiteteMinuten = result;

  update890Row();
  updateTagessumme();

  resultTarget.value = result;
};

/**
 *  Fügt den eigentlichen EventListener hinzu
 *
 * @param {object} el [zu verarbeitendes Element]
 */
var minutesCalculatorEventListener = function minutesCalculatorEventListener(
  el
) {
  el.addEventListener("input", function () {
    minutesCalculator();
    toggleContentRemoveButton();
  });
};

/**
 *  Sucht Zeilen ohne EventListener raus und übergibt das jeweilige Element
 *
 * @param {number} nextRowId [falls gesetzt, fügt nur der hinzugefügten Zeile einen neuen EventListener hinzu]
 */
var minutesCalculatorEventListenerHelper = function minutesCalculatorEventListenerHelper(
  nextRowId
) {
  if (nextRowId) {
    minutesCalculatorEventListener(
      document.getElementById("minuten-" + nextRowId)
    );
  } else {
    Array.from(document.querySelectorAll('[id^="minuten-"]')).forEach(function (
      el
    ) {
      if (el.id !== "minuten-890") minutesCalculatorEventListener(el);
    });
  }
};

/**
 * Aktiviert oder deaktiviert Buttons abhängig von Werten der ersten #creation-tbody-Zeile
 *
 */
var toggleSaveButtons = function toggleSaveButtons() {
  var buttons = [
    document.getElementById("later"),
    document.getElementById("now")
  ];
  var inputs = [document.getElementById("von"), document.getElementById("bis")];

  var hasRequiredValues = false;

  inputs.forEach(function (el) {
    return (hasRequiredValues = el.value.indexOf(":") !== -1);
  });

  buttons.forEach(function (button) {
    return (button.disabled = !hasRequiredValues);
  });
};
/**
 * Fügt der neu hinzugefügten Reihe die üblichen EventListener hinzu
 *
 * @param {number} nextRowId
 */
var addTREventListeners = function addTREventListeners(nextRowId) {
  var elements = Array.from(
    document.querySelectorAll('[id*="-' + nextRowId + '"]')
  );

  elements.forEach(function (el) {
    if (elements.indexOf(el) !== 5) {
      el.addEventListener("input", function () {
        toggleContentRemoveButton();
        toggleSaveButtons();
      });
    }
  });

  minutesCalculatorEventListenerHelper(nextRowId);
};

/**
 * Aktualisiert Anzeige der derzeitigen Arbeitszeit
 *
 */
var updateArbeitszeitValues = function updateArbeitszeitValues() {
  document.getElementById("arbeitszeit").value = "von " + arbeitszeit;
  document.getElementById("tagessumme").placeholder = arbeitszeit;
};

/**
 * Prüft, ob Frühstückspause angeklickt ist und gibt Wert in Minuten zurück
 *
 * @returns {number} Wert in Minuten
 */
var returnFrühstückspauseValue = function returnFrühstückspauseValue() {
  var checkbox = document.getElementById("frühstückspause");

  if (checkbox.checked) {
    return 15;
  }

  return 0;
};

/**
 * Prüft, ob Mittagspause angeklickt ist und gibt Wert in Minuten zurück
 *
 * @returns {number} Wert in Minuten
 */
var returnMittagspauseValue = function returnMittagspauseValue() {
  var checkbox = document.getElementById("mittagspause");

  if (checkbox.checked) {
    return 30;
  }

  return 0;
};

/**
 * Berechnet Arbeitszeit neu
 *
 */
var arbeitszeitCalculator = function arbeitszeitCalculator() {
  var vonValue = document.getElementById("von").value.split(":");
  var bisValue = document.getElementById("bis").value.split(":");

  var stundenToMinutes = (parseInt(bisValue[0]) - parseInt(vonValue[0])) * 60;
  var minutenToMinutes = parseInt(bisValue[1]) - parseInt(vonValue[1]);

  var newArbeitszeit =
    stundenToMinutes +
    minutenToMinutes -
    returnFrühstückspauseValue() -
    returnMittagspauseValue();

  if (!isNaN(newArbeitszeit)) arbeitszeit = newArbeitszeit;
};

var addAußerHausEventListener = function addAußerHausEventListener() {
  var außerHausEl = document.getElementById("außer-haus");

  außerHausEl.addEventListener("input", function () {
    var außerHausVal = extractInputVal(außerHausEl);
    if (außerHausVal > 0) {
      arbeitszeitCalculator();
      arbeitszeit -= außerHausVal;
      update890Row();
      updateArbeitszeitValues();
    }
  });
};

/**

/**
 *  Fügt eine neue Zeile hinzu
 *
 */
var addTR = function addTR() {
  var tbody = document.querySelector("#creation-tbody");

  var currentTRCount = Array.from(
    document.querySelectorAll("#creation-tbody tr")
  ).length;
  var nextRowId = currentTRCount + 1;

  var template =
    '\n  <tr>\n    <td data-label="Kostenstelle" title="Kostenstelle">\n      <div class="field">\n        <div class="control">\n          <input id="kostenstelle-' +
    nextRowId +
    '" name="kostenstelle-' +
    nextRowId +
    '" min="0" pattern="^(?!0+$)d+$" class="input" list="kostenstelle" type="number" placeholder="' +
    nextRowId +
    '">\n        </div>\n      </div>\n    </td>\n    <td data-label="Auftragsnummer" title="Auftragsnummer">\n      <div class="field">\n        <div class="control">\n          <input id="auftragsnummer-' +
    nextRowId +
    '" name="auftragsnummer-' +
    nextRowId +
    '" class="input" type="number" min="0" pattern="^(?!0+$)d+$">\n        </div>\n      </div>\n    </td>\n    <td data-label="Kunde" title="Kunde">\n      <div class="field">\n        <div class="control">\n          <input id="kunde-' +
    nextRowId +
    '" name="kunde-' +
    nextRowId +
    '" class="input" type="text">\n        </div>\n      </div>\n    </td>\n    <td data-label="Leistungsart" title="Leistungsart">\n      <div class="field">\n        <div class="control">\n          <input id="leistungsart-' +
    nextRowId +
    '" name="leistungsart-' +
    nextRowId +
    '" class="input" list="leistungsart" min="0" type="number" pattern="^(?!0+$)d+$">\n        </div>\n      </div>\n    </td>\n    <td data-label="Minuten" title="Minuten">\n      <div class="field">\n        <div class="control">\n          <input id="minuten-' +
    nextRowId +
    '" name="minuten-' +
    nextRowId +
    '" class="input" type="number" min="0" pattern="^(?!0+$)d+$">\n        </div>\n      </div>\n    </td>\n    <td data-label="Anzahl" title="Anzahl">\n      <div class="field">\n        <div class="control">\n          <input id="anzahl-' +
    nextRowId +
    '" name="anzahl-' +
    nextRowId +
    '" class="input" type="number" min="0" pattern="^(?!0+$)d+$">\n        </div>\n      </div>\n    </td>\n    <td data-label="Materialnummer" title="Materialnummer">\n      <div class="field">\n        <div class="control">\n          <input id="materialnummer-' +
    nextRowId +
    '" name="materialnummer-' +
    nextRowId +
    '" class="input" type="number" min="0" pattern="^(?!0+$)d+$">\n        </div>\n      </div>\n    </td>\n  </tr>';

  if (nextRowId <= 22) {
    tbody.insertAdjacentHTML("beforeend", template);
  } else {
    alert("Mehr als 22 Zeilen passen nicht auf einen Zettel.");
  }

  // add new event listeners
  addTREventListeners(nextRowId);
};

/**
 * Pflegt Daten des jeweiligen Zettels in Felder ein
 *
 * @param { object } response
 */
var insertEditData = function insertEditData(response) {
  document.getElementById("nav-new").click();
  document.getElementById("datepicker").value = response.day;
  document.getElementById("von").value = response.startTimestamp;
  document.getElementById("bis").value = response.endTimestamp;
  document.getElementById("mittagspause").checked = response.mittagspause !== 0;
  document.getElementById("frühstückspause").checked =
    response.frühstückspause !== 0;

  var fieldNames = [
    "kostenstelle",
    "auftragsnummer",
    "kunde",
    "leistungsart",
    "minuten",
    "anzahl",
    "materialnummer"
  ];

  if (response["außer-haus"] > 0)
    document.getElementById("außer-haus").value = response["außer-haus"];

  var _loop = function _loop(i) {
    if (parseInt(response["minuten-" + i]) !== 0) {
      if (i > 5) addTR();

      fieldNames.forEach(function (fieldName) {
        var target = fieldName + "-" + i;
        if (response[target] !== 0)
          document.getElementById(target).value = response[target];
      });
    }
  };

  for (var i = 1; i <= 22; i += 1) {
    _loop(i);
  }

  arbeitszeitCalculator();
  updateArbeitszeitValues();
  minutesCalculator();
  toggleSaveButtons();
};

/**
 * Verändert aktuell angewähltes Navigationselement
 *
 * @param {string} selectedNav
 */
var switchActiveNavigationLink = function switchActiveNavigationLink(
  selectedNav
) {
  Array.from(document.querySelectorAll(".navbar-item[data-target]")).forEach(
    function (navLink) {
      var target = document.getElementById(navLink.dataset.target).classList;

      selectedNav === navLink.id
        ? target.add("is-active")
        : target.contains("is-active")
          ? target.remove("is-active")
          : void 0;
    }
  );
};

/**
 * Verändert Sichtbarkeit der Hauptmodule
 *
 * @param {string} targetId
 */
var switchActiveModule = function switchActiveModule(targetId) {
  Array.from(document.querySelectorAll("main > div")).forEach(function (
    moduleEl
  ) {
    return (moduleEl.style.display =
      targetId === moduleEl.id ? "block" : "none");
  });
};

/**
 * Löst Stateänderungen in der Navigation und bei den Hauptmodulen aus
 *
 * @param {string} selectedNav [id des geklickten Navigationselements]
 * @param {string} targetId [data-target-Attribut des geklickten Navigationselements]
 */
var toggleTab = function toggleTab(selectedNav, targetId) {
  switchActiveNavigationLink(selectedNav);
  switchActiveModule(targetId);
};

/**
 * Fügt den Checkboxen den EventListener hinzu
 *
 */
var addPausenListener = function addPausenListener() {
  var checkboxes = [
    document.getElementById("frühstückspause"),
    document.getElementById("mittagspause")
  ];
  var pausenzeiten = [15, 30];

  checkboxes.forEach(function (el) {
    el.addEventListener("change", function () {
      var i = checkboxes.indexOf(el);

      !this.checked
        ? (arbeitszeit += pausenzeiten[i])
        : (arbeitszeit -= pausenzeiten[i]);

      minutesCalculator();
      arbeitszeitCalculator();
      updateArbeitszeitValues();
    });
  });
};

/**
 * Setzt Tabelle zurück
 *
 */
var removeContent = function removeContent() {
  var elArray = [
    document.getElementById("von"),
    document.getElementById("bis"),
    document.getElementById("minuten-890"),
    document.getElementById("außer-haus")
  ];

  Array.from(document.querySelectorAll("#creation-tbody input")).forEach(
    function (el) {
      return elArray.push(el);
    }
  );

  elArray.forEach(function (el) {
    return (el.value = "");
  });

  toggleContentRemoveButton();
  toggleSaveButtons();
};

/**
 * Initiiert Date & Timepicker
 *
 */
var initDateAndTimePicker = function initDateAndTimePicker() {
  var von = document.getElementById("von");
  var bis = document.getElementById("bis");

  [von, bis].forEach(function (el) {
    el.addEventListener("input", function () {
      arbeitszeitCalculator();
      minutesCalculator();
      updateArbeitszeitValues();
      toggleContentRemoveButton();
      toggleSaveButtons();
    });
  });
};

var unhidePermSaveTRs = function unhidePermSaveTRs() {
  Array.from(document.querySelectorAll("#perm-save tr")).forEach(function (tr) {
    if (tr.classList.contains("hidden-tr")) tr.classList.remove("hidden-tr");
  });

  document.getElementById("perm-save-tr").remove();
};

var addDeletionEventListener = function addDeletionEventListener(el, mode) {
  el.addEventListener("click", function () {
    var tr = el.closest("tr");
    var pdfId = el.value;

    swal({
      title: "Sicher?",
      text: "Dieser Tageszettel wird dauerhaft gelöscht.",
      type: "warning",
      showCancelButton: true,
      cancelButtonText: "Abbrechen",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "löschen"
    }).then(function (result) {
      if (result.value) {
        fetch("api/deletePDF.php", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          credentials: "same-origin",
          body: "pdfId=" + pdfId + "&mode=" + mode
        });
        tr.style.opacity = 0;
      }
    });
  });
};

/**
 * Holt alte Daten ab
 *
 * @param {HTMLElement} el
 * @param {string} mode
 */
var addEditEventListener = function addEditEventListener(el, mode) {
  el.addEventListener("click", function () {
    fetch("api/editPDF.php?pdfId=" + el.value + "&mode=" + mode, {
      credentials: "same-origin"
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        return insertEditData(response);
      });
  });
};

/**
 * Setzt Datepicker.value auf leer damit alle Datalist-Einträge auswählbar werden
 */
var silenceDatepicker = function silenceDatepicker() {
  this.value = "";
};

/**
 * Zeigt Dateinamen nach erfolgreichem Upload an
 */
var showUploadedFileName = function showUploadedFileName() {
  if (this.files.length > 0) {
    document.getElementsByClassName(
      "file-name"
    )[0].innerText = this.files[0].name;
    document.getElementById(this.id + "-btn").disabled =
      this.files.length === 0;
  }
};

/**
 * Aktiviert zugehörigen Button des Inputfeldes sobald Inhalt verfügbar ist
 */
var toggleButtonDisabledOnInput = function toggleButtonDisabledOnInput() {
  document.getElementById(this.id + "-btn").disabled = this.value.length === 0;
};

var adminToggleKSLAAdd = function adminToggleKSLAAdd(target) {
  var number = document.getElementById(target + "-number-add");
  var desc = document.getElementById(target + "-desc-add");

  if (number && desc) {
    [number, desc].forEach(function (el) {
      el.addEventListener("input", function () {
        document.getElementById(target + "-btn-add").disabled = !(
          number.value.length > 0 && desc.value.length > 0
        );
      });
    });
  }
};

var adminToggleKSLATarget = function adminToggleKSLATarget(target) {
  var select = document.getElementById(target + "-select");

  if (select) {
    select.addEventListener("change", function () {
      document.getElementById(target + "-btn-delete").disabled = false;
    });
  }
};

var capitalize = function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

var adminDeleteKSLAListener = function adminDeleteKSLAListener(target) {
  var deleteBtn = document.getElementById(target + "-btn-delete");
  var btnCL = deleteBtn.classList;

  if (deleteBtn) {
    deleteBtn.addEventListener("click", function (e) {
      e.preventDefault();

      var value = Array.from(
        document.querySelector("#" + target + "-select").selectedOptions
      )[0].innerText.split(" – ")[0];

      swal({
        title: "Sicher?",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "Abbrechen",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "löschen"
      }).then(function (result) {
        if (result.value) {
          deleteBtn.disabled = true;
          btnCL.remove("is-danger");
          ["is-loading", "is-warning"].forEach(function (className) {
            return btnCL.add(className);
          });

          fetch("api/options/deleteKSLA.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            credentials: "same-origin",
            body: "target=" + target + "&id=" + value
          })
            .then(function (response) {
              return response.json();
            })
            .then(function (json) {
              ["is-loading", "is-warning"].forEach(function (className) {
                return btnCL.remove(className);
              });

              if (json.success) {
                var select = document.querySelector("#" + target + "-select");
                Array.from(select.selectedOptions)[0].remove();
                select.selectedIndex = 0;
              }

              btnCL.add(json.success ? "is-success" : "is-danger");
              deleteBtn.innerText = json.success
                ? "Erfolg"
                : "Fehler! Info: " + json.error;
              deleteBtn.disabled = false;

              setTimeout(function () {
                if (btnCL.contains("is-success"))
                  btnCL.replace("is-success", "is-danger");
                deleteBtn.innerText = capitalize(target) + " l\xF6schen";
              }, 5000);
            });
        }
      });
    });
  }
};

var adminAddKSLAListener = function adminAddKSLAListener(target) {
  var btn = document.getElementById(target + "-btn-add");
  var btnCL = btn.classList;

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    btn.disabled = true;
    btnCL.remove("is-success");
    ["is-loading", "is-warning"].forEach(function (className) {
      return btnCL.add(className);
    });

    var value = document.getElementById(target + "-number-add").value;
    var desc = document.getElementById(target + "-desc-add").value;

    fetch("api/options/addKSLA.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      credentials: "same-origin",
      body: "target=" + target + "&id=" + value + "&desc=" + desc
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        ["is-loading", "is-warning"].forEach(function (className) {
          return btnCL.remove(className);
        });

        btnCL.add(json.success ? "is-success" : "is-danger");
        btn.innerText = json.success ? "Erfolg" : "Fehler! Info: " + json.error;
        btn.disabled = false;

        setTimeout(function () {
          if (btnCL.contains("is-danger"))
            btnCL.replace("is-danger", "is-success");
          btn.innerText = capitalize(target) + " hinzuf\xFCgen";
        }, 5000);
      });
  });
};

var adminEventListener = function adminEventListener() {
  var targets = ["kostenstelle", "leistungsart"];

  targets.forEach(function (target) {
    adminToggleKSLAAdd(target);
    adminToggleKSLATarget(target);
    adminDeleteKSLAListener(target);
    adminAddKSLAListener(target);
  });
};

/**
 * Mobile Nav Hamburger
 */
var initHamburger = function initHamburger() {
  var navbarBurgers = Array.from(document.querySelectorAll(".navbar-burger"));

  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach(function (el) {
      el.addEventListener("click", function () {
        [el, document.getElementById(el.dataset.target)].forEach(function (
          element
        ) {
          return element.classList.toggle("is-active");
        });
      });
    });
  }
};

/**
 * Initiiert TabSwitcher...
 */
var initTabswitcher = function initTabswitcher() {
  Array.from(document.querySelectorAll(".navbar-item[data-target")).forEach(
    function (el) {
      el.addEventListener("click", function () {
        toggleTab(el.id, el.dataset.target);
      });
    }
  );
};

/**
 * Fügt alle relevanten EventListener hinzu
 */
var addEventListeners = function addEventListeners() {
  initHamburger();
  initTabswitcher();

  var fileInput = document.querySelector('input[type="file"]');
  if (fileInput) fileInput.addEventListener("change", showUploadedFileName);

  document
    .getElementById("datepicker")
    .addEventListener("click", silenceDatepicker);
  document.getElementById("add-tr").addEventListener("click", addTR);
  document
    .getElementById("remove-contents")
    .addEventListener("click", removeContent);

  // options Listeners
  document
    .getElementById("überminuten")
    .addEventListener("input", toggleButtonDisabledOnInput);

  // admin
  adminEventListener();

  arbeitszeit = parseInt(
    document.getElementById("arbeitszeit").value.replace(/von /, "")
  );

  addPausenListener();
  addAußerHausEventListener();
  minutesCalculatorEventListenerHelper();

  document
    .getElementById("perm-save-toggler")
    .addEventListener("click", unhidePermSaveTRs);

  Array.from(document.querySelectorAll(".perm-delete-btn")).forEach(function (
    el
  ) {
    return addDeletionEventListener(el, "permanent");
  });
  Array.from(document.querySelectorAll(".temp-delete-btn")).forEach(function (
    el
  ) {
    return addDeletionEventListener(el, "temporary");
  });

  Array.from(document.querySelectorAll(".perm-edit-btn")).forEach(function (el) {
    return addEditEventListener(el, "permanent");
  });
  Array.from(document.querySelectorAll(".temp-edit-btn")).forEach(function (el) {
    return addEditEventListener(el, "temporary");
  });
};

document.addEventListener("DOMContentLoaded", function () {
  addEventListeners();
  initDateAndTimePicker();
});
