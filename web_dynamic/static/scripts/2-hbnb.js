$(document).ready(function () {
  const amenities = {};
  $('input[type="checkbox"]').change(function (elm) {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-name')] = $(this).attr('data-id');
      $('.amenities h4').text(Object.keys(amenities));
    } else {
      delete amenities[$(this).attr('data-name')];
    }
    const dataNames = Object.keys(amenities);
    $('.amenities h4').text(dataNames.join(', '));
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    console.log('llega')
    if (textStatus === 'success') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
