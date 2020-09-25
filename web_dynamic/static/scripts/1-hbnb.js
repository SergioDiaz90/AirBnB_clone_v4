$(document).ready(function() {
    const amenites = []
    $('#amenity.id').click((dict) => {
        if ($(this).is(':checked')) {
            amenites.push(dict);
        }
        console.log(amenites);
    });
});