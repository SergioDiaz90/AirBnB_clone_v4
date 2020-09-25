$(document).ready(function () {
    const amenities = {}
    $('input[type="checkbox"]').change(function (elm) {
        if ($(this).is(":checked")) {
            amenities[$(this).attr('data-name')] = $(this).attr('data-id');
            $('.amenities h4').text(Object.keys(amenities));
        } else{
            delete amenities[$(this).attr('data-name')];	
        }
	  const dataNames = Object.keys(amenities);
    $('.amenities h4').text(dataNames.join(', '));
    });
});
