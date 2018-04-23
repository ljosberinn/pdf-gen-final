/**
 * Verändert aktuell angewähltes Navigationselement
 *
 * @param {string} selectedNav
 */
function switchActiveNavigationLink(selectedNav) {
	'use strict';

	$('.navbar-item[data-target]').each((i, navLink) => {
		if (selectedNav == navLink.id) {
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
	'use strict';

	$('main > div').each((i, moduleEl) => {
		if (targetId == moduleEl.id) {
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
	'use strict';
	switchActiveNavigationLink(selectedNav);
	switchActiveModule(targetId);
}

/**
 *  Fügt eine neue Zeile hinzu
 *
 */
function addTR() {
	let tbody = $('#creation-tbody');

	let currentTRCount = $('#creation-tbody tr').length;
	let nextRowId = currentTRCount + 1;

	let template = `
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
	minutesCalculatorEventListenerHelper(nextRowId);
}

/**
 *  Sucht Zeilen ohne EventListener raus und übergibt das jeweilige Element
 *
 * @param {number} nextRowId [falls gesetzt, fügt nur der hinzugefügten Zeile einen neuen EventListener hinzu]
 */
function minutesCalculatorEventListenerHelper(nextRowId) {
	let els = $("[id^='minuten-']");

	$.each(els, function(i, el) {
		if (nextRowId && i == nextRowId - 1) {
			minutesCalculatorEventListener(el);
		} else if (!nextRowId) {
			minutesCalculatorEventListener(el);
		}
	});
}
/**
 *  Fügt den eigentlichen EventListener hinzu
 *
 * @param {object} el [zu verarbeitendes Element]
 */
function minutesCalculatorEventListener(el) {
	el.addEventListener('input', function() {
		minutesCalculator();
	});
}

/**
 * Summiert Minuten
 *
 */
function minutesCalculator() {
	let resultTarget = $('#tagessumme');
	let result = 0;

	$.each($('[id^="minuten-"]'), function(i, el) {
		let val = parseInt($(el).val());

		if (!isNaN(val)) {
			result += val;
		}
	});

	resultTarget.val(result);
}

$(document).ready(function() {
	'use strict';
	// Get all "navbar-burger" elements
	const navbarBurgers = Array.prototype.slice.call($('.navbar-burger'), 0);

	// Check if there are any navbar burgers
	if (navbarBurgers.length > 0) {
		// Add a click event on each of them
		$.each(navbarBurgers, function(i, el) {
			el.addEventListener('click', function() {
				let target = el.dataset.target;
				let target2 = $(`#${target}`);

				$(el).toggleClass('is-active');
				$(target2).toggleClass('is-active');
			});
		});
	}

	$.each($('.navbar-item[data-target]'), function(i, el) {
		el.addEventListener('click', function() {
			toggleTab(el.id, el.dataset.target);
		});
	});

	$('#add-tr')[0].addEventListener('click', function() {
		addTR();
	});

	$('#remove-contents')[0].addEventListener('click', function() {
		$.each($('#creation-tbody input'), function(i, el) {
			$(el).val('');
		});
	});

	minutesCalculatorEventListenerHelper();

	$.datepicker.setDefaults({
		showWeek: true,
		firstDay: 1,
		changeMonth: true,
		changeYear: true,
		dateFormat: 'dd.mm.y'
	});

	$.datepicker.regional['de'] = {
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
		monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
		monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
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
		isRTL: false
	};
	$.datepicker.setDefaults($.datepicker.regional['de']);

	$('#datepicker').datepicker();
});
