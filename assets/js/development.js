$.each($('.edit-btn'), (i, el) => {
  el.addEventListener('click', () => {
    const element = $(el);
    const pdfId = element.val();

    $.getJSON({
      url: 'api/editPDF.php',
      success: (response) => {
        console.log(response);
      },
    });
  });
});
