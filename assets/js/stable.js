let gearbeiteteMinuten = 0;
let arbeitszeit = 0;

/**
 *  Fügt eine neue Zeile hinzu
 *
 */
function addTR() {
  const tbody = $('#creation-tbody');

  const currentTRCount = $('#creation-tbody tr').length;
  const nextRowId = currentTRCount + 1;

  const template = `
  <tr>
    <td data-label="Kostenstelle" title="Kostenstelle">
      <div class="field">
        <div class="control">
          <input id="kostenstelle-${nextRowId}" name="kostenstelle-${nextRowId}" min="0" pattern="^(?!0+$)\d+$" class="input" list="kostenstelle" type="number" placeholder="${nextRowId}">
        </div>
      </div>
    </td>
    <td data-label="Auftragsnummer" title="Auftragsnummer">
      <div class="field">
        <div class="control">
          <input id="auftragsnummer-${nextRowId}" name="auftragsnummer-${nextRowId}" class="input" type="number" min="0" pattern="^(?!0+$)\d+$">
        </div>
      </div>
    </td>
    <td data-label="Kunde" title="Kunde">
      <div class="field">
        <div class="control">
          <input id="kunde-${nextRowId}" name="kunde-${nextRowId}" class="input" type="text">
        </div>
      </div>
    </td>
    <td data-label="Leistungsart" title="Leistungsart">
      <div class="field">
        <div class="control">
          <input id="leistungsart-${nextRowId}" name="leistungsart-${nextRowId}" class="input" list="leistungsart" min="0" type="number" pattern="^(?!0+$)\d+$">
        </div>
      </div>
    </td>
    <td data-label="Minuten" title="Minuten">
      <div class="field">
        <div class="control">
          <input id="minuten-${nextRowId}" name="minuten-${nextRowId}" class="input" type="number" min="0" pattern="^(?!0+$)\d+$">
        </div>
      </div>
    </td>
    <td data-label="Anzahl" title="Anzahl">
      <div class="field">
        <div class="control">
          <input id="anzahl-${nextRowId}" name="anzahl-${nextRowId}" class="input" type="number" min="0" pattern="^(?!0+$)\d+$">
        </div>
      </div>
    </td>
    <td data-label="Materialnummer" title="Materialnummer">
      <div class="field">
        <div class="control">
          <input id="materialnummer-${nextRowId}" name="materialnummer-${nextRowId}" class="input" type="number" min="0" pattern="^(?!0+$)\d+$">
        </div>
      </div>
    </td>
  </tr>`;

  if (nextRowId <= 22) {
    tbody.append(template);
  } else {
    alert('Mehr als 22 Zeilen passen nicht auf einen Zettel.');
  }

  // add new event listeners
  addTREventListeners(nextRowId);
}

jQuery.fn.extend({
  disable(state) {
    return this.each(function() {
      this.disabled = state;
    });
  },
});

/**
 * Prüft, ob Frühstückspause angeklickt ist und gibt Wert in Minuten zurück
 *
 * @returns {number} Wert in Minuten
 */
function returnFrühstückspauseValue() {
  const checkbox = $('#frühstückspause');

  if (checkbox.is(':checked')) {
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
  const checkbox = $('#mittagspause');

  if (checkbox.is(':checked')) {
    return 30;
  }

  return 0;
}

/**
 * Scannt erste #creation-tbody-Zeile nach Inhalten und gibt true zurück, falls alle benötigten Felder ausgefüllt sind
 *
 * @returns {boolean}
 */
function scanFirstCreationTbodyRow() {
  const idTemplates = ['kostenstelle-1', 'leistungsart-1', 'minuten-1', 'von', 'bis'];
  let counter = 0;

  $.each(idTemplates, (i, template) => {
    if ($(`#${template}`).val() !== '') {
      counter += 1;
    }
  });

  if (counter === idTemplates.length) {
    return true;
  }

  return false;
}

/**
 * Aktiviert oder deaktiviert Buttons abhängig von Werten der ersten #creation-tbody-Zeile
 *
 */
function toggleSaveButtons() {
  const hasRequiredValues = scanFirstCreationTbodyRow();
  const buttons = [$('#later'), $('#now')];
  const isOverCap = gearbeiteteMinuten - arbeitszeit;

  if (hasRequiredValues && isOverCap > 0) {
    $.each(buttons, (i, button) => {
      $(button).disable(true);
    });
  } else {
    $.each(buttons, (i, button) => {
      $(button).disable(!hasRequiredValues);
    });
  }
}

/**
 * Scannt alle #creation-tbody-Felder nach Inhalten und gibt "true" zurück falls etwas eingegeben wurde
 *
 * @returns {boolean}
 */
function scanInputs() {
  let hasValue = false;

  const els = [$('#von')[0], $('#bis')[0], $('#außer-haus')[0]];

  $.each($('#creation-tbody input'), (i, el) => {
    els.push(el);
  });

  $.each(els, (i, el) => {
    if ($(el).val() !== '') {
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
  const hasValues = scanInputs();
  $('#remove-contents').disable(!hasValues);
}

/**
 * Verändert aktuell angewähltes Navigationselement
 *
 * @param {string} selectedNav
 */
function switchActiveNavigationLink(selectedNav) {
  $('.navbar-item[data-target]').each((i, navLink) => {
    if (selectedNav === navLink.id) {
      $(navLink).addClass('is-active');
    } else {
      $(navLink).removeClass('is-active');
    }
  });
}

/**
 * Verändert Sichtbarkeit der Hauptmodule
 *
 * @param {string} targetId
 */
function switchActiveModule(targetId) {
  $('main > div').each((i, moduleEl) => {
    if (targetId === moduleEl.id) {
      $(moduleEl).css('display', 'block');
    } else {
      $(moduleEl).css('display', 'none');
    }
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
 * Summiert Minuten
 *
 */
function minutesCalculator() {
  const resultTarget = $('#tagessumme');
  const elements = [$('#außer-haus')];
  let result = 0;

  $.each($('[id^="minuten-"]'), (i, el) => {
    elements.push(el);
  });

  $.each(elements, (i, el) => {
    if (el.id !== 'minuten-890') {
      let val = 0;

      val = parseInt($(el).val(), 10);

      if (!isNaN(val)) {
        result += val;
      }
    }
  });

  gearbeiteteMinuten = result;

  update890Row();
  updateTagessumme();
  toggleSaveButtons();

  resultTarget.val(result);
}

/**
 *  Fügt den eigentlichen EventListener hinzu
 *
 * @param {object} el [zu verarbeitendes Element]
 */
function minutesCalculatorEventListener(el) {
  el.addEventListener('input', () => {
    minutesCalculator();
    toggleContentRemoveButton();
  });
}

/**
 * Definiert deutsche Grundvariablen für den jQueryUI Datepicker
 *
 */
function setDatepickerDefaultsDE() {
  $.datepicker.setDefaults({
    showWeek: true,
    firstDay: 1,
    changeMonth: true,
    changeYear: true,
    dateFormat: 'dd.mm.y',
  });

  $.datepicker.regional.de = {
    clearText: 'löschen',
    clearStatus: 'aktuelles Datum löschen',
    closeText: 'schließen',
    closeStatus: 'ohne Änderungen schließen',
    prevText: '<zurück',
    prevStatus: 'letzten Monat zeigen',
    nextText: 'Vor>',
    nextStatus: 'nächsten Monat zeigen',
    currentText: 'heute',
    currentStatus: '',
    monthNames: [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mär',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dez',
    ],
    monthStatus: 'anderen Monat anzeigen',
    yearStatus: 'anderes Jahr anzeigen',
    weekHeader: 'Wo',
    weekStatus: 'Woche des Monats',
    dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    dayStatus: 'Setze DD als ersten Wochentag',
    dateStatus: 'Wähle D, M d',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    initStatus: 'Wähle ein Datum',
    isRTL: false,
  };
  $.datepicker.setDefaults($.datepicker.regional.de);
}

/**
 * Fügt den Checkboxen den EventListener hinzu
 *
 */
function addPausenListener() {
  const checkboxes = [$('#frühstückspause'), $('#mittagspause')];
  const pausenzeiten = [15, 30];

  $.each(checkboxes, (i, el) => {
    el.change(function() {
      if (!this.checked) {
        arbeitszeit += pausenzeiten[i];
      } else {
        arbeitszeit -= pausenzeiten[i];
      }

      minutesCalculator();
      arbeitszeitCalculator();
      updateArbeitszeitValues();
    });
  });
}

/**
 *  Sucht Zeilen ohne EventListener raus und übergibt das jeweilige Element
 *
 * @param {number} nextRowId [falls gesetzt, fügt nur der hinzugefügten Zeile einen neuen EventListener hinzu]
 */
function minutesCalculatorEventListenerHelper(nextRowId) {
  if (nextRowId) {
    minutesCalculatorEventListener($(`#minuten-${nextRowId}`)[0]);
  } else {
    const els = [$('#außer-haus')[0]];

    $.each($("[id^='minuten-']"), (i, el) => {
      els.push(el);
    });

    $.each(els, (i, el) => {
      if (el.id !== 'minuten-890') {
        minutesCalculatorEventListener(el);
      }
    });
  }
}

/**
 * Fügt der neu hinzugefügten Reihe die üblichen EventListener hinzu
 *
 * @param {number} nextRowId
 */
function addTREventListeners(nextRowId) {
  $.each($(`[id*="-${nextRowId}"]`), (i, el) => {
    if (i !== 5) {
      el.addEventListener('input', () => {
        toggleContentRemoveButton();
        toggleSaveButtons();
      });
    }
  });
  minutesCalculatorEventListenerHelper(nextRowId);
}

/**
 * Setzt Tabelle zurück
 *
 */
function removeContent() {
  const elArray = [$('#von'), $('#bis'), $('#minuten-890'), $('#außer-haus')];

  $.each($('#creation-tbody input'), (i, el) => {
    elArray.push($(el));
  });

  $.each(elArray, (i, el) => {
    el.val('');
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
  const startzeit = 480;
  const endzeit = startzeit + arbeitszeit + 30 + 15;
  const endStunde = Math.floor(endzeit / 60);
  const endMinuten = (endzeit / 60 - endStunde) * 60;

  return `${endStunde}:${endMinuten}`;
}

/**
 * Färbt Tagessumme abhängig von gearbeiteteMinuten und Arbeitszeit ein
 *
 */
function updateTagessumme() {
  const tagessumme = $('#tagessumme');
  if (gearbeiteteMinuten > arbeitszeit) {
    tagessumme.addClass('is-danger');
  } else {
    tagessumme.removeClass('is-danger');
  }
}

/**
 * Initiiert Date & Timepicker
 *
 */
function initDateAndTimePicker() {
  const datepicker = $('#datepicker');
  datepicker.datepicker();
  datepicker.datepicker('setDate', 'now');

  const von = $('#von');
  const bis = $('#bis');
  const feierabend = returnFeierabend();

  $.each([von, bis], (i, el) => {
    el.timepicker({
      timeFormat: 'G:i',
      step: 5,
      forceRoundTime: true,
    });

    el.on('change', () => {
      arbeitszeitCalculator();
      minutesCalculator();
      updateArbeitszeitValues();
      toggleContentRemoveButton();
    });
  });

  von.timepicker('option', {
    setTime: '08:00',
    scrollDefault: '08:05',
  });

  bis.timepicker('option', {
    setTime: feierabend,
    scrollDefault: feierabend,
  });
}

/**
 * Aktualisiert den Posten 890
 *
 */
function update890Row() {
  const minuten890 = arbeitszeit - gearbeiteteMinuten;

  if (minuten890 === 0) {
    $('#tr-890').fadeOut();
  } else {
    $('#tr-890').fadeIn();

    if (minuten890 < 0) {
      $('#minuten-890').addClass('is-danger');
    } else {
      $('#minuten-890').removeClass('is-danger');
    }
  }

  $('#minuten-890').val(minuten890);
}
/**
 * Aktualisiert Anzeige der derzeitigen Arbeitszeit
 *
 */
function updateArbeitszeitValues() {
  $('#arbeitszeit').val(`von ${arbeitszeit}`);
  $('#tagessumme').prop('placeholder', arbeitszeit);
}

/**
 * Berechnet Arbeitszeit neu
 *
 */
function arbeitszeitCalculator() {
  const vonValue = $('#von')
    .val()
    .split(':');
  const bisValue = $('#bis')
    .val()
    .split(':');

  const stundenToMinutes = (parseInt(bisValue[0], 10) - parseInt(vonValue[0], 10)) * 60;
  const minutenToMinutes = parseInt(bisValue[1], 10) - parseInt(vonValue[1], 10);

  const newArbeitszeit =
    stundenToMinutes + minutenToMinutes - returnFrühstückspauseValue() - returnMittagspauseValue();

  if (!isNaN(newArbeitszeit)) {
    arbeitszeit = newArbeitszeit;
  }
}

/**
 * Fügt alle relevanten EventListener hinzu
 *
 */
function addEventListeners() {
  // Get all "navbar-burger" elements
  const navbarBurgers = Array.prototype.slice.call($('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if (navbarBurgers.length > 0) {
    // Add a click event on each of them
    $.each(navbarBurgers, (i, el) => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const target2 = $(`#${target}`);

        $(el).toggleClass('is-active');
        $(target2).toggleClass('is-active');
      });
    });
  }

  $.each($('.navbar-item[data-target]'), (i, el) => {
    el.addEventListener('click', () => {
      toggleTab(el.id, el.dataset.target);
    });
  });

  $('#add-tr')[0].addEventListener('click', () => {
    addTR();
  });

  $('#remove-contents')[0].addEventListener('click', () => {
    removeContent();
  });

  $.each($('#creation-tbody input'), (i, el) => {
    el.addEventListener('input', () => {
      toggleContentRemoveButton();
      if (el.id.indexOf('minuten') == -1) {
        toggleSaveButtons();
      }
    });
  });

  arbeitszeit = parseInt(
    $('#arbeitszeit')
      .val()
      .replace(/von /, ''),
    10,
  );

  addPausenListener();

  minutesCalculatorEventListenerHelper();
}

$(document).ready(() => {
  addEventListeners();

  setDatepickerDefaultsDE();

  initDateAndTimePicker();
});
