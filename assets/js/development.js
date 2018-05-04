function insertValueToSameElement(target, value) {
  if (value != 0) {
    $(target).val(value);
  }
}

function addEditEventListener(el, mode) {
  el.addEventListener('click', () => {
    $.getJSON({
      url: 'api/editPDF.php',
      data: {
        pdfId: $(el).val(),
        mode,
      },
      success: (response) => {
        console.log(response);
        $('#nav-new')[0].click();

        $('#datepicker').val(response.day);
        $('#von').val(response.startTimestamp);
        $('#bis').val(response.endTimestamp);

        const [fieldNames, frühstückspause, mittagspause] = [
          [
            'kostenstelle',
            'auftragsnummer',
            'kunde',
            'leistungsart',
            'minuten',
            'anzahl',
            'materialnummer',
          ],
          $('#frühstückspause'),
          $('#mittagspause'),
        ];

        if (response.mittagspause === 0) {
          mittagspause.prop('checked', false);
        } else {
          mittagspause.prop('checked', true);
        }

        if (response.frühstückspause === 0) {
          frühstückspause.prop('checked', false);
        } else {
          frühstückspause.prop('checked', true);
        }

        if (response['außer-haus'] > 0) {
          $('#außer-haus').val(response['außer-haus']);
        }

        for (let i = 1; i <= 22; i += 1) {
          if (response[`minuten-${i}`] != 0) {
            if (i > 5) {
              addTR();
            }
            $.each(fieldNames, (k, fieldName) => {
              const target = `${fieldName}-${i}`;
              insertValueToSameElement(`#${target}`, response[target]);
            });
          }
        }

        const updateStaticFns = [
          arbeitszeitCalculator,
          updateArbeitszeitValues,
          minutesCalculator,
          toggleSaveButtons,
        ];

        $.each(updateStaticFns, (i) => {
          updateStaticFns[i]();
        });
      },
    });
  });
}
