let gearbeiteteMinuten = 0;
let arbeitszeit = 0;

/**
 * Scannt alle #creation-tbody-Felder nach Inhalten und gibt "true" zurück falls etwas eingegeben wurde
 *
 * @returns {boolean}
 */
const scanInputs = () => {
  let hasValue = false;

  const els = [document.getElementById('von'), document.getElementById('bis'), document.getElementById('außer-haus')];

  [...document.querySelectorAll('#creation-tbody input')].forEach(el => els.push(el));

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

  [...document.querySelectorAll('[id^="minuten-"]')].forEach(el => {
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
    [...document.querySelectorAll('[id^="minuten-"]')].forEach(el => {
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
  const elements = [...document.querySelectorAll(`[id*="-${nextRowId}"]`)];

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

  const currentTRCount = [...document.querySelectorAll('#creation-tbody tr')].length;
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
  document.getElementById('datepicker').value = response.day;
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
  [...document.querySelectorAll('.navbar-item[data-target]')].forEach(navLink => {
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
  [...document.querySelectorAll('main > div')].forEach(moduleEl => (moduleEl.style.display = targetId === moduleEl.id ? 'block' : 'none'));
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

  [...document.querySelectorAll('#creation-tbody input')].forEach(el => elArray.push(el));

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

const unhidePermSaveTRs = () => {
  [...document.querySelectorAll('#perm-save tr')].forEach(tr => {
    if (tr.classList.contains('hidden-tr')) tr.classList.remove('hidden-tr');
  });

  document.getElementById('perm-save-tr').remove();
};

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

const adminToggleKSLATarget = target => {
  const select = document.getElementById(`${target}-select`);

  if (select) {
    select.addEventListener('change', () => {
      document.getElementById(`${target}-btn-delete`).disabled = false;
    });
  }
};

const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);

const adminDeleteKSLAListener = target => {
  const deleteBtn = document.getElementById(`${target}-btn-delete`);

  if (deleteBtn) {
    const btnCL = deleteBtn.classList;
    deleteBtn.addEventListener('click', e => {
      e.preventDefault();

      const value = [...document.querySelector(`#${target}-select`).selectedOptions][0].innerText.split(' – ')[0];

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
          btnCL.remove('is-danger');
          ['is-loading', 'is-warning'].forEach(className => btnCL.add(className));

          fetch('api/options/deleteKSLA.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            credentials: 'same-origin',
            body: `target=${target}&id=${value}`,
          })
            .then(response => response.json())
            .then(json => {
              ['is-loading', 'is-warning'].forEach(className => btnCL.remove(className));

              if (json.success) {
                const select = document.querySelector(`#${target}-select`);
                [...select.selectedOptions][0].remove();
                select.selectedIndex = 0;
              }

              btnCL.add(json.success ? 'is-success' : 'is-danger');
              deleteBtn.innerText = json.success ? 'Erfolg' : `Fehler! Info: ${json.error}`;

              setTimeout(() => {
                if (btnCL.contains('is-success')) btnCL.replace('is-success', 'is-danger');
                deleteBtn.innerText = `${capitalize(target)} löschen`;
              }, 5000);
            });
        }
      });
    });
  }
};

const adminAddKSLAListener = target => {
  const btn = document.getElementById(`${target}-btn-add`);

  if (btn) {
    const btnCL = btn.classList;

    btn.addEventListener('click', e => {
      e.preventDefault();

      btnCL.remove('is-success');
      ['is-loading', 'is-warning'].forEach(className => btnCL.add(className));

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
          ['is-loading', 'is-warning'].forEach(className => btnCL.remove(className));

          btnCL.add(json.success ? 'is-success' : 'is-danger');
          btn.innerText = json.success ? 'Erfolg' : `Fehler! Info: ${json.error}`;

          setTimeout(() => {
            if (btnCL.contains('is-danger')) btnCL.replace('is-danger', 'is-success');
            btn.innerText = `${capitalize(target)} hinzufügen`;
          }, 5000);
        });
    });
  }
};

const faultyElementListener = function () {
  this.classList.remove('is-danger');
  this.removeEventListener('input', faultyElementListener);
};

const adminHighlightFaultyElements = (elements, btn) => {
  elements[0].focus();
  elements.forEach(el => {
    el.classList.add('is-danger');
    el.addEventListener('input', faultyElementListener);
  });
  ['is-loading', 'is-warning'].forEach(className => btn.classList.remove(className));
  btn.classList.add('is-primary');
};

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
      ['is-loading', 'is-warning'].forEach(className => btn.classList.remove(className));

      btn.classList.add(json.success ? 'is-success' : 'is-danger');
      btn.innerText = json.success ? 'Erfolg' : `Fehler! Info: ${json.error}`;

      setTimeout(() => {
        if (btn.classList.contains('is-success')) btn.classList.replace('is-success', 'is-primary');
        btn.innerText = 'Neuen Angestellten hinzufügen';
      }, 5000);
    });
};

const adminCreateUserListener = () => {
  const btn = document.getElementById('create-user-btn');

  if (btn) {
    btn.addEventListener('click', e => {
      e.preventDefault();

      btn.classList.remove('is-primary');
      ['is-loading', 'is-warning'].forEach(className => btn.classList.add(className));

      const formParent = 'form[action="api/options/createNewUser.php"]';

      const inputs = [...document.querySelectorAll(`${formParent} input, ${formParent} select`)];
      const faultyEls = inputs.filter(el => el.required && el.value.length === 0);

      faultyEls.length === 0 ? adminCreateNewUser(inputs, btn) : adminHighlightFaultyElements(faultyEls, btn);
    });
  }
};

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
  const navbarBurgers = [...document.querySelectorAll('.navbar-burger')];

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
  [...document.querySelectorAll('.navbar-item[data-target')].forEach(el => {
    el.addEventListener('click', () => {
      toggleTab(el.id, el.dataset.target);
    });
  });
};

const addEventListenerIfExists = (id, type, eventListener) => {
  const element = document.getElementById(id);
  if (element) element.addEventListener(type, eventListener);
};

const calendarListeners = () => {
  const buttons = [document.querySelector('.calendar-nav-previous-month button'), document.querySelector('.calendar-nav-next-month button')];
  const selects = [document.getElementById('calendar-month'), document.getElementById('calendar-year')];

  const currentMonth = parseInt(document.getElementById('calendar-month').value);
  const currentYear = parseInt(document.getElementById('calendar-year').value);

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
};

const getCalendarData = (year, month) => {
  fetch('api/calendar.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    credentials: 'same-origin',
    body: `year=${year}&month=${month}`,
  })
    .then(response => response.text())
    .then(response => {
      document.getElementById('vacation').innerHTML = response;
      calendarListeners();
    });
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

  addEventListenerIfExists('datepicker', 'click', silenceDatepicker);
  addEventListenerIfExists('add-tr', 'click', addTR);
  addEventListenerIfExists('remove-contents', 'click', removeContent);
  addEventListenerIfExists('perm-save-toggler', 'click', unhidePermSaveTRs);
  addEventListenerIfExists('überminuten', 'input', toggleButtonDisabledOnInput);

  // admin
  adminEventListener();

  const arbeitszeitEl = document.getElementById('arbeitszeit');
  if (arbeitszeitEl) arbeitszeit = parseInt(arbeitszeitEl.value.replace(/von /, ''));

  addPausenListener();
  addAußerHausEventListener();
  minutesCalculatorEventListenerHelper();

  calendarListeners();

  [...document.querySelectorAll('.perm-delete-btn')].forEach(el => addDeletionEventListener(el, 'permanent'));
  [...document.querySelectorAll('.temp-delete-btn')].forEach(el => addDeletionEventListener(el, 'temporary'));

  [...document.querySelectorAll('.perm-edit-btn')].forEach(el => addEditEventListener(el, 'permanent'));
  [...document.querySelectorAll('.temp-edit-btn')].forEach(el => addEditEventListener(el, 'temporary'));
};

// const returnDateWithLeadingZero = timestamp => `${`0${timestamp.getDate()}`.slice(-2)}.${`0${timestamp.getMonth() + 1}`.slice(-2)}.${timestamp.getFullYear()}`;

const datePicker = () => {
  const datePickertarget = document.querySelector('[name="datum"]');

  if (datePickertarget) {
    const datepickerOptions = {
      dateFormat: 'dd.mm.yyyy',
      lang: 'de',
    };

    bulmaCalendar.attach('[name="datum"]', datepickerOptions);

    setTimeout(() => {
      document.querySelector('[name="datum"]').click();
      document.querySelector('button.date-item.is-today.is-active').click();
    }, 1000);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  addEventListeners();
  datePicker();
  update890Row();
});
