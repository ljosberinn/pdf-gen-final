"use strict";

var gearbeiteteMinuten = 0;
var arbeitszeit = 0;

function postData(url, data) {
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json"
    },
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // *client, no-referrer
  }).then(function (response) {
    return response.json();
  }); // parses response to JSON
}

/**
 * Scannt alle #creation-tbody-Felder nach Inhalten und gibt "true" zurück falls etwas eingegeben wurde
 *
 * @returns {boolean}
 */
function scanInputs() {
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
}

/**
 * Aktiviert oder deaktiviert den "Zeilen leeren"-Button sobald etwas zum leeren vorhanden ist
 *
 */
function toggleContentRemoveButton() {
  document.getElementById("remove-contents").disabled = !scanInputs();
}

/**
 * Färbt Tagessumme abhängig von gearbeiteteMinuten und Arbeitszeit ein
 *
 */
function updateTagessumme() {
  var tagessumme = document.getElementById("tagessumme").classList;

  gearbeiteteMinuten > arbeitszeit
    ? tagessumme.add("is-danger")
    : tagessumme.remove("is-danger");
}

/**
 * Aktualisiert den Posten 890
 *
 */
function update890Row() {
  var minuten890 = arbeitszeit - gearbeiteteMinuten;

  var row890 = document.getElementById("tr-890");
  var min890 = document.getElementById("minuten-890");

  if (minuten890 === 0) {
    row890.fadeOut();
  } else {
    row890.fadeIn();
    minuten890 < 0
      ? min890.classList.add("is-danger")
      : min890.classList.remove("is-danger");
  }

  min890.value = minuten890;
}

/**
 *  Gibt den Wert des Elements zurück; 0 falls 0 | NaN
 *
 * @param {HTMLElement} el
 */
function extractInputVal(el) {
  var val = 0;

  val = parseInt(el.value);

  if (!isNaN(val)) {
    return val;
  }
  return 0;
}

/**
 * Summiert Minuten
 *
 */
function minutesCalculator() {
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
}

/**
 *  Fügt den eigentlichen EventListener hinzu
 *
 * @param {object} el [zu verarbeitendes Element]
 */
function minutesCalculatorEventListener(el) {
  el.addEventListener("input", function () {
    minutesCalculator();
    toggleContentRemoveButton();
  });
}

/**
 *  Sucht Zeilen ohne EventListener raus und übergibt das jeweilige Element
 *
 * @param {number} nextRowId [falls gesetzt, fügt nur der hinzugefügten Zeile einen neuen EventListener hinzu]
 */
function minutesCalculatorEventListenerHelper(nextRowId) {
  if (nextRowId) {
    minutesCalculatorEventListener(
      document.getElementById("#minuten-" + nextRowId)
    );
  } else {
    Array.from(document.querySelectorAll('[id^="minuten-"]')).forEach(function (
      el
    ) {
      if (el.id !== "minuten-890") minutesCalculatorEventListener(el);
    });
  }
}
/**
 * Aktiviert oder deaktiviert Buttons abhängig von Werten der ersten #creation-tbody-Zeile
 *
 */
function toggleSaveButtons() {
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
}
/**
 * Fügt der neu hinzugefügten Reihe die üblichen EventListener hinzu
 *
 * @param {number} nextRowId
 */
function addTREventListeners(nextRowId) {
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
}

/**
 * Aktualisiert Anzeige der derzeitigen Arbeitszeit
 *
 */
function updateArbeitszeitValues() {
  document.getElementById("arbeitszeit").value = "von " + arbeitszeit;
  document.getElementById("tagessumme").placeholder = arbeitszeit;
}

/**
 * Prüft, ob Frühstückspause angeklickt ist und gibt Wert in Minuten zurück
 *
 * @returns {number} Wert in Minuten
 */
function returnFrühstückspauseValue() {
  var checkbox = document.getElementById("frühstückspause");

  if (checkbox.checked) {
    return 15;
  }

  return 0;
}

/**
 * Prüft, ob Mittagspause angeklickt ist und gibt Wert in Minuten zurück
 *
 * @returns {number} Wert in Minuten
 */
function returnMittagspauseValue() {
  var checkbox = document.getElementById("mittagspause");

  if (checkbox.checked) {
    return 30;
  }

  return 0;
}

/**
 * Berechnet Arbeitszeit neu
 *
 */
function arbeitszeitCalculator() {
  var vonValue = document.getElementById("von").value.split(":");
  var bisValue = document.getElementById("bis").value.split(":");

  var stundenToMinutes = (parseInt(bisValue[0]) - parseInt(vonValue[0])) * 60;
  var minutenToMinutes = parseInt(bisValue[1]) - parseInt(vonValue[1]);

  var newArbeitszeit =
    stundenToMinutes +
    minutenToMinutes -
    returnFrühstückspauseValue() -
    returnMittagspauseValue();

  if (!isNaN(newArbeitszeit)) {
    arbeitszeit = newArbeitszeit;
  }
}

function addAußerHausEventListener() {
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
}

/**

/**
 *  Fügt eine neue Zeile hinzu
 *
 */
function addTR() {
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
    tbody.append(template);
  } else {
    alert("Mehr als 22 Zeilen passen nicht auf einen Zettel.");
  }

  // add new event listeners
  addTREventListeners(nextRowId);
}

/**
 * Pflegt Daten des jeweiligen Zettels in Felder ein
 *
 * @param { object } response
 */
function insertEditData(response) {
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
}

/**
 * Verändert aktuell angewähltes Navigationselement
 *
 * @param {string} selectedNav
 */
function switchActiveNavigationLink(selectedNav) {
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
}

/**
 * Verändert Sichtbarkeit der Hauptmodule
 *
 * @param {string} targetId
 */
function switchActiveModule(targetId) {
  Array.from(document.querySelectorAll("main > div")).forEach(function (
    moduleEl
  ) {
    return (moduleEl.style.display =
      targetId === moduleEl.id ? "block" : "none");
  });
}

/**
 * Löst Stateänderungen in der Navigation und bei den Hauptmodulen aus
 *
 * @param {string} selectedNav [id des geklickten Navigationselements]
 * @param {string} targetId [data-target-Attribut des geklickten Navigationselements]
 */
function toggleTab(selectedNav, targetId) {
  switchActiveNavigationLink(selectedNav);
  switchActiveModule(targetId);
}

/**
 * Fügt den Checkboxen den EventListener hinzu
 *
 */
function addPausenListener() {
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
}

/**
 * Setzt Tabelle zurück
 *
 */
function removeContent() {
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
}

/**
 * Berechnet den Feierabend basierend auf erwarteter Arbeitszeit
 *
 * @returns {string} feierabendString
 */
function returnFeierabend() {
  var startzeit = 480;
  var endzeit = startzeit + arbeitszeit + 30 + 15;
  var endStunde = Math.floor(endzeit / 60);
  var endMinuten = (endzeit / 60 - endStunde) * 60;

  return endStunde + ":" + endMinuten;
}

/**
 * Initiiert Date & Timepicker
 *
 */
function initDateAndTimePicker() {
  var von = document.getElementById("von");
  var bis = document.getElementById("bis");

  [von, bis].forEach(function (el) {
    el.addEventListener("focus", function () {
      arbeitszeitCalculator();
      minutesCalculator();
      updateArbeitszeitValues();
      toggleContentRemoveButton();
      toggleSaveButtons();
    });
  });
}

function unhidePermSaveTRs() {
  Array.from(document.querySelectorAll("#perm-save tr")).forEach(function (tr) {
    if (tr.classList.contains("hidden-tr")) tr.classList.remove("hidden-tr");
  });

  document.getElementById("perm-save-tr").remove();
}

function addDeletionEventListener(el, mode) {
  el.addEventListener("click", function () {
    var tr = $(el).closest("tr");
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
        postData("api/deletePDF.php", { pdfId: pdfId, mode: mode });
        $(tr).fadeOut("fast");
        /*
        $.post({
          url: 'api/deletePDF.php',
          data: { pdfId, mode },
        });
        */
      }
    });
  });
}

/**
 * Holt alte Daten ab
 *
 * @param {HTMLElement} el
 * @param {string} mode
 */
function addEditEventListener(el, mode) {
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
}

/**
 * Fügt alle relevanten EventListener hinzu
 *
 */
function addEventListeners() {
  // Get all "navbar-burger" elements
  var navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if (navbarBurgers.length > 0) {
    // Add a click event on each of them
    navbarBurgers.forEach(function (el) {
      el.addEventListener("click", function () {
        var target = el.dataset.target;
        target.classList.toggle("is-active");
        document.getElementById(target).classList.toggle("is-active");
      });
    });
  }

  Array.from(document.querySelectorAll(".navbar-item[data-target")).forEach(
    function (el) {
      el.addEventListener("click", function () {
        toggleTab(el.id, el.dataset.target);
      });
    }
  );

  document.getElementById("add-tr").addEventListener("click", addTR);
  document
    .getElementById("remove-contents")
    .addEventListener("click", removeContent);

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
}

document.addEventListener("DOMContentLoaded", function () {
  addEventListeners();
  initDateAndTimePicker();
});
