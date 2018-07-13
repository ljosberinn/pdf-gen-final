import swal from 'sweetalert2';
import bulmaCalendar from 'bulma-calendar';

let gearbeiteteMinuten = 0;
let arbeitszeit = 0;

/**
 * Togglet ['is-loading', 'is-warning'] des gewählten Elements
 *
 * @param {HTMLButtonElement} el
 * @param {string} mode
 */
const toggleIsLoadingWarning = (el, mode) => {
  ['is-loading', 'is-warning'].forEach(className => (mode === 'remove' ? el.classList.remove(className) : el.classList.add(className)));
};

/**
 * Scannt alle #creation-tbody-Felder nach Inhalten und gibt "true" zurück falls etwas eingegeben wurde
 *
 * @returns {boolean}
 */
const scanInputs = () => {
  let hasValue = false;

  const els = [document.getElementById('von'), document.getElementById('bis'), document.getElementById('außer-haus')];

  document.querySelectorAll('#creation-tbody input').forEach(el => els.push(el));

  els.forEach(el => {
    if (el.value !== '') {
      hasValue = true;
    }
  });

  return hasValue;
};

/**
 * Aktiviert oder deaktiviert den "Zeilen leeren"-Button sobald etwas zum leeren vorhanden ist
 *
 */
const toggleContentRemoveButton = () => {
  document.getElementById('remove-contents').disabled = !scanInputs();
};

/**
 * Färbt Tagessumme abhängig von gearbeiteteMinuten und Arbeitszeit ein
 *
 */
const updateTagessumme = () => {
  const tagessumme = document.getElementById('tagessumme').classList;

  gearbeiteteMinuten > arbeitszeit ? tagessumme.add('is-danger') : tagessumme.remove('is-danger');
};

/**
 * Aktualisiert den Posten 890
 *
 */
const update890Row = () => {
  const minuten890 = arbeitszeit - gearbeiteteMinuten;

  const row890 = document.getElementById('tr-890');
  const min890 = document.getElementById('minuten-890');

  if (row890 && min890) {
    min890.value = minuten890;

    if (minuten890 === 0) {
      row890.style.opacity = 0;
    } else {
      minuten890 < 0 ? min890.classList.add('is-danger') : min890.classList.remove('is-danger');
      row890.style.opacity = 1;
    }
  }
};

/**
 *  Gibt den Wert des Elements zurück; 0 falls 0 | NaN
 *
 * @param {HTMLElement} el
 */
const extractInputVal = el => {
  let val = 0;

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
const minutesCalculator = () => {
  const resultTarget = document.getElementById('tagessumme');
  let result = 0;

  document.querySelectorAll('[id^="minuten-"]').forEach(el => {
    if (el.id !== 'minuten-890') result += extractInputVal(el);
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
const minutesCalculatorEventListener = el => {
  el.addEventListener('input', () => {
    minutesCalculator();
    toggleContentRemoveButton();
  });
};

/**
 *  Sucht Zeilen ohne EventListener raus und übergibt das jeweilige Element
 *
 * @param {number} nextRowId [falls gesetzt, fügt nur der hinzugefügten Zeile einen neuen EventListener hinzu]
 */
const minutesCalculatorEventListenerHelper = nextRowId => {
  if (nextRowId) {
    minutesCalculatorEventListener(document.getElementById(`minuten-${nextRowId}`));
  } else {
    document.querySelectorAll('[id^="minuten-"]').forEach(el => {
      if (el.id !== 'minuten-890') minutesCalculatorEventListener(el);
    });
  }
};
/**
 * Aktiviert oder deaktiviert Buttons abhängig von Werten der ersten #creation-tbody-Zeile
 *
 */
const toggleSaveButtons = () => {
  const buttons = [document.getElementById('later'), document.getElementById('now')];
  const inputs = [document.getElementById('von'), document.getElementById('bis')];

  let hasRequiredValues = false;

  inputs.forEach(el => (hasRequiredValues = el.value.indexOf(':') !== -1));

  buttons.forEach(button => (button.disabled = !hasRequiredValues));
};
/**
 * Fügt der neu hinzugefügten Reihe die üblichen EventListener hinzu
 *
 * @param {number} nextRowId
 */
const addTREventListeners = nextRowId => {
  const elements = document.querySelectorAll(`[id*="-${nextRowId}"]`);

  elements.forEach(el => {
    if (elements.indexOf(el) !== 5) {
      el.addEventListener('input', () => {
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
const updateArbeitszeitValues = () => {
  document.getElementById('arbeitszeit').value = `von ${arbeitszeit}`;
  document.getElementById('tagessumme').placeholder = arbeitszeit;
};

/**
 * Prüft, ob Frühstückspause angeklickt ist und gibt Wert in Minuten zurück
 *
 * @returns {number} Wert in Minuten
 */
const returnFrühstückspauseValue = () => {
  const checkbox = document.getElementById('frühstückspause');

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
const returnMittagspauseValue = () => {
  const checkbox = document.getElementById('mittagspause');

  if (checkbox.checked) {
    return 30;
  }

  return 0;
};

/**
 * Berechnet Arbeitszeit neu
 *
 */
const arbeitszeitCalculator = () => {
  const vonValue = document.getElementById('von').value.split(':');
  const bisValue = document.getElementById('bis').value.split(':');

  const stundenToMinutes = (parseInt(bisValue[0]) - parseInt(vonValue[0])) * 60;
  const minutenToMinutes = parseInt(bisValue[1]) - parseInt(vonValue[1]);

  const newArbeitszeit = stundenToMinutes + minutenToMinutes - returnFrühstückspauseValue() - returnMittagspauseValue();

  if (!isNaN(newArbeitszeit)) arbeitszeit = newArbeitszeit;
};

const addAußerHausEventListener = () => {
  const außerHausEl = document.getElementById('außer-haus');

  if (außerHausEl) {
    außerHausEl.addEventListener('input', () => {
      const außerHausVal = extractInputVal(außerHausEl);
      if (außerHausVal > 0) {
        arbeitszeitCalculator();
        arbeitszeit -= außerHausVal;
        update890Row();
        updateArbeitszeitValues();
      }
    });
  }
};

/**

/**
 *  Fügt eine neue Zeile hinzu
 *
 */
const addTR = () => {
  const tbody = document.querySelector('#creation-tbody');

  const currentTRCount = document.querySelectorAll('#creation-tbody tr').length;
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
    tbody.insertAdjacentHTML('beforeend', template);
  } else {
    alert('Mehr als 22 Zeilen passen nicht auf einen Zettel.');
  }

  // add new event listeners
  addTREventListeners(nextRowId);
};

/**
 * Pflegt Daten des jeweiligen Zettels in Felder ein
  *
 * @param { object } response
  */
const insertEditData = response => {
  document.getElementById('nav-new').click();
  document.getElementById('datum').value = response.day;
  document.getElementById('von').value = response.startTimestamp;
  document.getElementById('bis').value = response.endTimestamp;
  document.getElementById('mittagspause').checked = response.mittagspause !== 0;
  document.getElementById('frühstückspause').checked = response.frühstückspause !== 0;

  const fieldNames = ['kostenstelle', 'auftragsnummer', 'kunde', 'leistungsart', 'minuten', 'anzahl', 'materialnummer'];

  if (response['außer-haus'] > 0) document.getElementById('außer-haus').value = response['außer-haus'];

  for (let i = 1; i <= 22; i += 1) {
    if (parseInt(response[`minuten-${i}`]) !== 0) {
      if (i > 5) addTR();

      fieldNames.forEach(fieldName => {
        const target = `${fieldName}-${i}`;
        if (response[target] !== 0) document.getElementById(target).value = response[target];
      });
    }
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
const switchActiveNavigationLink = selectedNav => {
  document.querySelectorAll('.navbar-item[data-target]').forEach(navLink => {
    const target = document.getElementById(navLink.dataset.target).classList;

    selectedNav === navLink.id ? target.add('is-active') : target.contains('is-active') ? target.remove('is-active') : void 0;
  });
};

/**
 * Verändert Sichtbarkeit der Hauptmodule
 *
 * @param {string} targetId
 */
const switchActiveModule = targetId => {
  document.querySelectorAll('main > div').forEach(moduleEl => (moduleEl.style.display = targetId === moduleEl.id ? 'block' : 'none'));
};

/**
 * Löst Stateänderungen in der Navigation und bei den Hauptmodulen aus
 *
 * @param {string} selectedNav [id des geklickten Navigationselements]
 * @param {string} targetId [data-target-Attribut des geklickten Navigationselements]
 */
const toggleTab = (selectedNav, targetId) => {
  switchActiveNavigationLink(selectedNav);
  switchActiveModule(targetId);
};

/**
 * Fügt den Checkboxen den EventListener hinzu
 *
 */
const addPausenListener = () => {
  const checkboxes = [document.getElementById('frühstückspause'), document.getElementById('mittagspause')];
  const pausenzeiten = [15, 30];

  checkboxes.forEach(el => {
    if (el) {
      el.addEventListener('change', function () {
        const i = checkboxes.indexOf(el);

        !this.checked ? (arbeitszeit += pausenzeiten[i]) : (arbeitszeit -= pausenzeiten[i]);

        minutesCalculator();
        arbeitszeitCalculator();
        updateArbeitszeitValues();
      });
    }
  });
};

/**
 * Setzt Tabelle zurück
 *
 */
const removeContent = () => {
  const elArray = [document.getElementById('von'), document.getElementById('bis'), document.getElementById('minuten-890'), document.getElementById('außer-haus')];

  document.querySelectorAll('#creation-tbody input').forEach(el => elArray.push(el));

  elArray.forEach(el => (el.value = ''));

  toggleContentRemoveButton();
  toggleSaveButtons();
};

/**
 * Initiiert Von-Bis-EventListener
 *
 */
const workEventListeners = () => {
  const von = document.getElementById('von');
  const bis = document.getElementById('bis');

  [von, bis].forEach(el => {
    if (el) {
      el.addEventListener('input', () => {
        arbeitszeitCalculator();
        minutesCalculator();
        updateArbeitszeitValues();
        toggleContentRemoveButton();
        toggleSaveButtons();
      });
    }
  });
};

/**
 * Zeigt alle unsichtbaren Table Rows an
 */
const unhidePermSaveTRs = () => {
  document.querySelectorAll('#perm-save tr').forEach(tr => {
    if (tr.classList.contains('hidden-tr')) tr.classList.remove('hidden-tr');
  });

  document.getElementById('perm-save-tr').remove();
};

/**
 *
 * Löscht temporäre oder permanente Daten
 *
 * @param {HTMLElement} el
 * @param {string} mode
 */
const addDeletionEventListener = (el, mode) => {
  el.addEventListener('click', () => {
    const tr = el.closest('tr');
    const pdfId = el.value;

    swal({
      title: 'Sicher?',
      text: 'Dieser Tageszettel wird dauerhaft gelöscht.',
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Abbrechen',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'löschen',
    }).then(result => {
      if (result.value) {
        fetch('api/deletePDF.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          credentials: 'same-origin',
          body: `pdfId=${pdfId}&mode=${mode}`,
        }).then(() => {
          tr.remove();
        });
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
const addEditEventListener = (el, mode) => {
  el.addEventListener('click', () => {
    fetch(`api/editPDF.php?pdfId=${el.value}&mode=${mode}`, { credentials: 'same-origin' })
      .then(response => response.json())
      .then(response => insertEditData(response));
  });
};

/**
 * Setzt Datepicker.value auf leer damit alle Datalist-Einträge auswählbar werden
 */
const silenceDatepicker = function () {
  this.value = '';
};

/**
 * Zeigt Dateinamen nach erfolgreichem Upload an
 */
const showUploadedFileName = function () {
  if (this.files.length > 0) {
    document.getElementsByClassName('file-name')[0].innerText = this.files[0].name;
    document.getElementById(`${this.id}-btn`).disabled = this.files.length === 0;
  }
};

/**
 * Aktiviert zugehörigen Button des Inputfeldes sobald Inhalt verfügbar ist
 */
const toggleButtonDisabledOnInput = function () {
  document.getElementById(`${this.id}-btn`).disabled = this.value.length === 0;
};

/**
 *
 * @param {string} target
 */
const adminToggleKSLAAdd = target => {
  const number = document.getElementById(`${target}-number-add`);
  const desc = document.getElementById(`${target}-desc-add`);

  if (number && desc) {
    [number, desc].forEach(el => {
      el.addEventListener('input', () => {
        document.getElementById(`${target}-btn-add`).disabled = !(number.value.length > 0 && desc.value.length > 0);
      });
    });
  }
};

/**
 *
 * @param {string} target
 */
const adminToggleKSLATarget = target => {
  const select = document.getElementById(`${target}-select`);

  if (select) {
    select.addEventListener('change', () => {
      document.getElementById(`${target}-btn-delete`).disabled = false;
    });
  }
};

/**
 *
 * @param {string} word
 */
const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);

/**
 *
 * @param {string} target
 */
const adminDeleteKSLAListener = target => {
  const deleteBtn = document.getElementById(`${target}-btn-delete`);

  if (deleteBtn) {
    deleteBtn.addEventListener('click', e => {
      e.preventDefault();

      const value = document.querySelector(`#${target}-select`).selectedOptions[0].innerText.split(' – ')[0];

      swal({
        title: 'Sicher?',
        type: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Abbrechen',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'löschen',
      }).then(result => {
        if (result.value) {
          deleteBtn.classList.remove('is-danger');
          toggleIsLoadingWarning(deleteBtn, 'remove');

          fetch('api/options/deleteKSLA.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            credentials: 'same-origin',
            body: `target=${target}&id=${value}`,
          })
            .then(response => response.json())
            .then(json => {
              toggleIsLoadingWarning(deleteBtn, 'remove');

              if (json.success) {
                const select = document.querySelector(`#${target}-select`);
                select.selectedOptions[0].remove();
                select.selectedIndex = 0;
              }

              deleteBtn.classList.add(json.success ? 'is-success' : 'is-danger');
              deleteBtn.innerText = json.success ? 'Erfolg' : `Fehler! Info: ${json.error}`;

              setTimeout(() => {
                if (deleteBtn.classList.contains('is-success')) deleteBtn.classList.replace('is-success', 'is-danger');
                deleteBtn.innerText = `${capitalize(target)} löschen`;
              }, 5000);
            });
        }
      });
    });
  }
};
/**
 *
 * @param {string} target
 */
const adminAddKSLAListener = target => {
  const btn = document.getElementById(`${target}-btn-add`);

  if (btn) {
    btn.addEventListener('click', e => {
      e.preventDefault();

      btn.classList.remove('is-success');
      toggleIsLoadingWarning(btn, 'add');

      const value = document.getElementById(`${target}-number-add`).value;
      const desc = document.getElementById(`${target}-desc-add`).value;

      fetch('api/options/addKSLA.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        credentials: 'same-origin',
        body: `target=${target}&id=${value}&desc=${desc}`,
      })
        .then(response => response.json())
        .then(json => {
          toggleIsLoadingWarning(btn, 'remove');

          btn.classList.add(json.success ? 'is-success' : 'is-danger');
          btn.innerText = json.success ? 'Erfolg' : `Fehler! Info: ${json.error}`;

          setTimeout(() => {
            if (btn.classList.contains('is-danger')) btn.classList.replace('is-danger', 'is-success');
            btn.innerText = `${capitalize(target)} hinzufügen`;
          }, 5000);
        });
    });
  }
};

/**
 * Entfernt EventListener von this
 */
const faultyElementListener = function () {
  this.classList.remove('is-danger');
  this.removeEventListener('input', faultyElementListener);
};

/**
 *
 * @param {array} elements
 * @param {HTMLButtonElement} btn
 */
const adminHighlightFaultyElements = (elements, btn) => {
  elements[0].focus();

  elements.forEach(el => {
    el.classList.add('is-danger');
    el.addEventListener('input', faultyElementListener);
  });

  toggleIsLoadingWarning(btn, 'remove');
  btn.classList.add('is-primary');
};

/**
 *
 * @param {array} inputs
 * @param {HTMLButtonElement} btn
 */
const adminCreateNewUser = (inputs, btn) => {
  let bodyString = '';

  inputs.forEach(input => {
    bodyString += `${input.name}=${input.value}&`;
  });

  bodyString = bodyString.slice(0, -1);

  fetch('api/options/createNewUser.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    credentials: 'same-origin',
    body: bodyString,
  })
    .then(response => response.json())
    .then(json => {
      toggleIsLoadingWarning(btn, 'remove');

      btn.classList.add(json.success ? 'is-success' : 'is-danger');
      btn.innerText = json.success ? 'Erfolg' : `Fehler! Info: ${json.error}`;

      setTimeout(() => {
        if (btn.classList.contains('is-success')) btn.classList.replace('is-success', 'is-primary');
        btn.innerText = 'Neuen Angestellten hinzufügen';
      }, 5000);
    });
};

/**
 *
 */
const adminCreateUserListener = () => {
  const btn = document.getElementById('create-user-btn');

  if (btn) {
    btn.addEventListener('click', e => {
      e.preventDefault();

      btn.classList.remove('is-primary');
      toggleIsLoadingWarning(btn, 'add');

      const formParent = 'form[action="api/options/createNewUser.php"]';

      const inputs = [...document.querySelectorAll(`${formParent} input, ${formParent} select`)];
      const faultyEls = inputs.filter(el => el.required && el.value.length === 0);

      faultyEls.length === 0 ? adminCreateNewUser(inputs, btn) : adminHighlightFaultyElements(faultyEls, btn);
    });
  }
};

/**
 *
 */
const adminEventListener = () => {
  ['kostenstelle', 'leistungsart'].forEach(target => {
    adminToggleKSLAAdd(target);
    adminToggleKSLATarget(target);
    adminDeleteKSLAListener(target);
    adminAddKSLAListener(target);
  });

  adminCreateUserListener();
};

/**
 * Mobile Nav Hamburger
 */
const initHamburger = () => {
  const navbarBurgers = document.querySelectorAll('.navbar-burger');

  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        [el, document.getElementById(el.dataset.target)].forEach(element => element.classList.toggle('is-active'));
      });
    });
  }
};

/**
 * Initiiert TabSwitcher...
 */
const initTabswitcher = () => {
  document.querySelectorAll('.navbar-item[data-target').forEach(el => {
    el.addEventListener('click', () => {
      toggleTab(el.id, el.dataset.target);
    });
  });
};

/**
 *
 * @param {string} id
 * @param {string} type
 * @param {string} eventListener
 */
const addEventListenerIfExists = (id, type, eventListener) => {
  const element = document.getElementById(id);
  if (element) element.addEventListener(type, eventListener);
};

/**
 *
 */
const calendarListeners = () => {
  const buttons = [document.querySelector('.calendar-nav-previous-month button'), document.querySelector('.calendar-nav-next-month button')];
  const selects = [document.getElementById('calendar-month'), document.getElementById('calendar-year')];

  const monthEl = document.getElementById('calendar-month');
  const yearEl = document.getElementById('calendar-year');

  if (monthEl && yearEl) {
    const currentMonth = parseInt(monthEl.value);
    const currentYear = parseInt(yearEl.value);

    buttons.forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        this.disabled = true;
        getCalendarData(currentYear, currentMonth + parseInt(this.dataset.action));
      });
    });

    selects.forEach(select => {
      select.addEventListener('change', function () {
        this.disabled = true;
        getCalendarData(selects[1].value, selects[0].value);
      });
    });
  }
};

/**
 *
 * @param {number} year
 * @param {number} month
 */
const getCalendarData = (year, month) => {
  fetch('api/calendar.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    credentials: 'same-origin',
    body: `year=${year}&month=${month}`,
  })
    .then(response => response.text())
    .then(response => {
      document.getElementById('calendar-container').innerHTML = response;
      calendarListeners();
    });
};

/**
 *
 */
const datePicker = () => {
  const datePickertarget = document.getElementById('datum');

  if (datePickertarget) {
    const datepickerOptions = {
      dateFormat: 'dd.mm.yyyy',
      lang: 'de',
    };

    ['#vacation-start', '#vacation-end', '#datum'].forEach(selector => bulmaCalendar.attach(selector), datepickerOptions);

    setTimeout(() => {
      datePickertarget.click();
      document.querySelector('button.date-item.is-today.is-active').click();
    }, 1000);
  }
};

/**
 *
 * @param {number} startDate
 * @param {number} endDate
 */
const getBusinessDateCount = (startDate, endDate) => {
  const ifThen = (a, b, c) => (a === b ? c : a);

  let elapsed = (endDate - startDate) / 86400000;

  const daysBeforeFirstSunday = (7 - startDate.getDay()) % 7;
  const daysAfterLastSunday = endDate.getDay();

  elapsed -= daysBeforeFirstSunday + daysAfterLastSunday;
  elapsed = elapsed / 7 * 5;
  elapsed += ifThen(daysBeforeFirstSunday - 1, -1, 0) + ifThen(daysAfterLastSunday, 6, 5);

  return Math.ceil(elapsed);
};

/**
 *
 */
const vacationDiffParser = () => {
  const startEl = document.getElementById('vacation-start');
  const endEl = document.getElementById('vacation-end');
  const daysTarget = document.getElementById('vacation-days');
  const btn = document.getElementById('vacation-btn');

  if (startEl && endEl) {
    [startEl, endEl].forEach(el => {
      el.addEventListener('blur', () => {
        setTimeout(() => {
          const diff = getBusinessDateCount(new Date(startEl.value), new Date(endEl.value));

          if (!isNaN(diff) && diff > 0) {
            daysTarget.value = diff;
            btn.disabled = false;
          } else {
            btn.disabled = true;
          }
        }, 500);
      });
    });

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      this.disabled = true;
      toggleIsLoadingWarning(this, 'add');
      this.classList.remove('is-success');

      const span = this.querySelector('span:nth-of-type(2)');

      fetch('api/vacation.php', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `start=${startEl.value}&end=${endEl.value}&days=${daysTarget.value}`,
      })
        .then(response => response.json())
        .then(response => {
          toggleIsLoadingWarning(this, 'remove');

          if (response.success) {
            this.classList.add('is-success');
            span.innerText = 'Erfolgreich eingetragen.';
          } else {
            this.classList.add('is-warning');
            span.innerText = response.error;
          }

          setTimeout(() => {
            toggleIsLoadingWarning(this, 'remove');
            this.classList.add('is-success');
            span.innerText = 'Urlaub eintragen';
            this.disabled = false;
          }, 3000);
        });
    });
  }
};

/**
 *
 */
const vacationRemoveListener = () => {
  const btns = document.querySelectorAll('button.vacation-delete-btn');

  if (btns.length > 0) {
    btns.forEach(btn => {
      btn.addEventListener('click', function () {
        this.disabled = true;

        const span = this.querySelector('span:nth-of-type(2)');
        const start = this.dataset.start;

        toggleIsLoadingWarning(this, 'add');
        this.classList.remove('is-danger');

        fetch('api/deleteVacation.php', {
          method: 'POST',
          credentials: 'same-origin',
          headers: { 'Content-type': 'application/x-www-form-urlencoded' },
          body: `start=${start}`,
        })
          .then(response => response.json())
          .then(response => {
            toggleIsLoadingWarning(this, 'remove');

            if (response.success) {
              document.querySelector(`tr[data-start="${start}"`).remove();
              const today = new Date();
              const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
              const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
              if (start * 1000 > startOfMonth && start * 1000 < endOfMonth) {
                getCalendarData(document.getElementById('calendar-year').value, document.getElementById('calendar-month').value);
              }
            } else {
              this.classList.add('is-warning');
              span.innerText = response.error;

              setTimeout(() => {
                this.disabled = false;
                span.innerText = 'entfernen';
                this.classList.add('is-success');
              }, 3000);
            }
          });
      });
    });
  }
};

/**
 * Fügt alle relevanten EventListener hinzu
 */
const addEventListeners = () => {
  initHamburger();
  initTabswitcher();
  workEventListeners();

  const fileInput = document.querySelector('input[type="file"]');
  if (fileInput) fileInput.addEventListener('change', showUploadedFileName);

  addEventListenerIfExists('datum', 'click', silenceDatepicker);
  addEventListenerIfExists('add-tr', 'click', addTR);
  addEventListenerIfExists('remove-contents', 'click', removeContent);
  addEventListenerIfExists('perm-save-toggler', 'click', unhidePermSaveTRs);
  addEventListenerIfExists('überminuten', 'input', toggleButtonDisabledOnInput);
  datePicker();
  vacationDiffParser();
  vacationRemoveListener();

  // admin
  adminEventListener();

  const arbeitszeitEl = document.getElementById('arbeitszeit');
  if (arbeitszeitEl) arbeitszeit = parseInt(arbeitszeitEl.value.replace(/von /, ''));

  addPausenListener();
  addAußerHausEventListener();
  minutesCalculatorEventListenerHelper();

  calendarListeners();

  document.querySelectorAll('.perm-delete-btn').forEach(el => addDeletionEventListener(el, 'permanent'));
  document.querySelectorAll('.temp-delete-btn').forEach(el => addDeletionEventListener(el, 'temporary'));

  document.querySelectorAll('.perm-edit-btn').forEach(el => addEditEventListener(el, 'permanent'));
  document.querySelectorAll('.temp-edit-btn').forEach(el => addEditEventListener(el, 'temporary'));
};

document.addEventListener('DOMContentLoaded', () => {
  addEventListeners();
  update890Row();
});
