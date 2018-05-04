'use strict';

$.each($('.edit-btn'), function(i, el) {
  el.addEventListener('click', function() {
    var element = $(el),
      pdfId = element.val();
    $.getJSON({
      url: 'api/editPDF.php',
      success: function success(response) {
        console.log(response);
      },
    });
  });
});
('use strict');

var gearbeiteteMinuten = 0,
  arbeitszeit = 0;
function addAußerHausEventListener() {
  var außerHausEl = $('#außer-haus')[0];
  außerHausEl.addEventListener('input', function() {
    var außerHausVal = extractInputVal(außerHausEl);
    außerHausVal > 0 &&
      (arbeitszeitCalculator(),
      (arbeitszeit -= außerHausVal),
      update890Row(),
      updateArbeitszeitValues());
  });
}
function addTR() {
  var tbody = $('#creation-tbody'),
    currentTRCount = $('#creation-tbody tr').length,
    nextRowId = currentTRCount + 1,
    template =
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
  nextRowId <= 22
    ? tbody.append(template)
    : alert('Mehr als 22 Zeilen passen nicht auf einen Zettel.'),
    addTREventListeners(nextRowId);
}
function returnFrühstückspauseValue() {
  var checkbox = $('#frühstückspause');
  return checkbox.is(':checked') ? 15 : 0;
}
function returnMittagspauseValue() {
  var checkbox = $('#mittagspause');
  return checkbox.is(':checked') ? 30 : 0;
}
function toggleSaveButtons() {
  var buttons = [$('#later'), $('#now')],
    inputs = [$('#von'), $('#bis')];
  var hasRequiredValues = !1;
  $.each(inputs, function(i, el) {
    var elVal = $(el).val();
    hasRequiredValues = -1 !== elVal.indexOf(':');
  }),
    $.each(buttons, function(i, button) {
      $(button).disable(!hasRequiredValues);
    });
}
function scanInputs() {
  var hasValue = !1;
  var els = [$('#von')[0], $('#bis')[0], $('#außer-haus')[0]];
  return (
    $.each($('#creation-tbody input'), function(i, el) {
      els.push(el);
    }),
    $.each(els, function(i, el) {
      '' !== $(el).val() && (hasValue = !0);
    }),
    hasValue
  );
}
function toggleContentRemoveButton() {
  var hasValues = scanInputs();
  $('#remove-contents').disable(!hasValues);
}
function switchActiveNavigationLink(selectedNav) {
  $('.navbar-item[data-target]').each(function(i, navLink) {
    selectedNav === navLink.id
      ? $(navLink).addClass('is-active')
      : $(navLink).removeClass('is-active');
  });
}
function switchActiveModule(targetId) {
  $('main > div').each(function(i, moduleEl) {
    targetId === moduleEl.id
      ? $(moduleEl).css('display', 'block')
      : $(moduleEl).css('display', 'none');
  });
}
function toggleTab(selectedNav, targetId) {
  switchActiveNavigationLink(selectedNav), switchActiveModule(targetId);
}
function extractInputVal(el) {
  var val = 0;
  return (val = parseInt($(el).val(), 10)), isNaN(val) ? 0 : val;
}
function minutesCalculator() {
  var resultTarget = $('#tagessumme'),
    elements = [];
  var result = 0;
  $.each($('[id^="minuten-"]'), function(i, el) {
    elements.push(el);
  }),
    $.each(elements, function(i, el) {
      'minuten-890' !== el.id && (result += extractInputVal(el));
    }),
    (gearbeiteteMinuten = result),
    update890Row(),
    updateTagessumme(),
    resultTarget.val(result);
}
function minutesCalculatorEventListener(el) {
  el.addEventListener('input', function() {
    minutesCalculator(), toggleContentRemoveButton();
  });
}
function setDatepickerDefaultsDE() {
  $.datepicker.setDefaults({
    showWeek: !0,
    firstDay: 1,
    changeMonth: !0,
    changeYear: !0,
    dateFormat: 'dd.mm.y',
  }),
    ($.datepicker.regional.de = {
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
      isRTL: !1,
    }),
    $.datepicker.setDefaults($.datepicker.regional.de);
}
function addPausenListener() {
  var checkboxes = [$('#frühstückspause'), $('#mittagspause')],
    pausenzeiten = [15, 30];
  $.each(checkboxes, function(i, el) {
    el.change(function() {
      this.checked ? (arbeitszeit -= pausenzeiten[i]) : (arbeitszeit += pausenzeiten[i]),
        minutesCalculator(),
        arbeitszeitCalculator(),
        updateArbeitszeitValues();
    });
  });
}
function minutesCalculatorEventListenerHelper(nextRowId) {
  if (nextRowId) minutesCalculatorEventListener($('#minuten-' + nextRowId)[0]);
  else {
    var els = [];
    $.each($("[id^='minuten-']"), function(i, el) {
      els.push(el);
    }),
      $.each(els, function(i, el) {
        'minuten-890' !== el.id && minutesCalculatorEventListener(el);
      });
  }
}
function removeContent() {
  var elArray = [$('#von'), $('#bis'), $('#minuten-890'), $('#außer-haus')];
  $.each($('#creation-tbody input'), function(i, el) {
    elArray.push($(el));
  }),
    $.each(elArray, function(i, el) {
      el.val('');
    }),
    toggleContentRemoveButton(),
    toggleSaveButtons();
}
function returnFeierabend() {
  var startzeit = 480,
    endzeit = 480 + arbeitszeit + 30 + 15,
    endStunde = Math.floor(endzeit / 60),
    endMinuten = 60 * (endzeit / 60 - endStunde);
  return endStunde + ':' + endMinuten;
}
function updateTagessumme() {
  var tagessumme = $('#tagessumme');
  gearbeiteteMinuten > arbeitszeit
    ? tagessumme.addClass('is-danger')
    : tagessumme.removeClass('is-danger');
}
function initDateAndTimePicker() {
  var datepicker = $('#datepicker');
  datepicker.datepicker(), datepicker.datepicker('setDate', 'now');
  var von = $('#von'),
    bis = $('#bis'),
    feierabend = returnFeierabend();
  $.each([von, bis], function(i, el) {
    el.timepicker({ timeFormat: 'G:i', step: 5, forceRoundTime: !0 }),
      el.on('change', function() {
        arbeitszeitCalculator(),
          minutesCalculator(),
          updateArbeitszeitValues(),
          toggleContentRemoveButton(),
          toggleSaveButtons();
      });
  }),
    von.timepicker('option', { setTime: '08:00', scrollDefault: '08:05' }),
    bis.timepicker('option', { setTime: feierabend, scrollDefault: feierabend });
}
function update890Row() {
  var minuten890 = arbeitszeit - gearbeiteteMinuten;
  0 === minuten890
    ? $('#tr-890').fadeOut()
    : ($('#tr-890').fadeIn(),
      minuten890 < 0
        ? $('#minuten-890').addClass('is-danger')
        : $('#minuten-890').removeClass('is-danger')),
    $('#minuten-890').val(minuten890);
}
function updateArbeitszeitValues() {
  $('#arbeitszeit').val('von ' + arbeitszeit), $('#tagessumme').prop('placeholder', arbeitszeit);
}
function arbeitszeitCalculator() {
  var vonValue = $('#von')
      .val()
      .split(':'),
    bisValue = $('#bis')
      .val()
      .split(':'),
    stundenToMinutes = 60 * (parseInt(bisValue[0], 10) - parseInt(vonValue[0], 10)),
    minutenToMinutes = parseInt(bisValue[1], 10) - parseInt(vonValue[1], 10),
    newArbeitszeit =
      stundenToMinutes +
      minutenToMinutes -
      returnFrühstückspauseValue() -
      returnMittagspauseValue();
  isNaN(newArbeitszeit) || (arbeitszeit = newArbeitszeit);
}
function addEventListeners() {
  var navbarBurgers = Array.prototype.slice.call($('.navbar-burger'), 0);
  navbarBurgers.length > 0 &&
    $.each(navbarBurgers, function(i, el) {
      el.addEventListener('click', function() {
        var target = el.dataset.target,
          target2 = $('#' + target);
        $(el).toggleClass('is-active'), $(target2).toggleClass('is-active');
      });
    }),
    $.each($('.navbar-item[data-target]'), function(i, el) {
      el.addEventListener('click', function() {
        toggleTab(el.id, el.dataset.target);
      });
    }),
    $('#add-tr')[0].addEventListener('click', function() {
      addTR();
    }),
    $('#remove-contents')[0].addEventListener('click', function() {
      removeContent();
    }),
    (arbeitszeit = parseInt(
      $('#arbeitszeit')
        .val()
        .replace(/von /, ''),
      10,
    )),
    addPausenListener(),
    addAußerHausEventListener(),
    minutesCalculatorEventListenerHelper(),
    $('#perm-save-toggler')[0].addEventListener('click', function() {
      unhidePermSaveTRs();
    }),
    $.each($('.perm-delete-btn'), function(i, el) {
      addRemovalEventListener(el, 'permanent');
    }),
    $.each($('.temp-delete-btn'), function(i, el) {
      addRemovalEventListener(el, 'permanent');
    });
}
function addRemovalEventListener(el, mode) {
  el.addEventListener('click', function() {
    var element = $(el),
      _ref = [element.closest('tr'), element.val()],
      tr = _ref[0],
      pdfId = _ref[1];
    swal({
      title: 'Sicher?',
      text: 'Dieser Tageszettel wird dauerhaft gelöscht.',
      type: 'warning',
      showCancelButton: !0,
      cancelButtonText: 'Abbrechen',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'löschen',
    }).then(function(result) {
      result.value &&
        ($.post({ url: 'api/deletePDF.php', data: { pdfId: pdfId, mode: mode } }),
        tr.fadeOut('fast'));
    });
  });
}
function unhidePermSaveTRs() {
  $.each($('#perm-save tr'), function(i, el) {
    var tr = $(el);
    tr.hasClass('hidden-tr') && tr.removeClass('hidden-tr');
  }),
    $('#perm-save-tr').remove();
}
function addTREventListeners(nextRowId) {
  $.each($('[id*="-' + nextRowId + '"]'), function(i, el) {
    5 !== i &&
      el.addEventListener('input', function() {
        toggleContentRemoveButton(), toggleSaveButtons();
      });
  }),
    minutesCalculatorEventListenerHelper(nextRowId);
}
jQuery.fn.extend({
  disable: function disable(state) {
    return this.each(function() {
      this.disabled = state;
    });
  },
}),
  $(document).ready(function() {
    addEventListeners(), setDatepickerDefaultsDE(), initDateAndTimePicker();
  });
