$(function() {
    $('#filterSelect').change(function() {
        var optionSelected = $("option:selected", this).val();
        $('.filter').hide();
        if (this.value == 'all') {
            $('.filter').show();
        } else {
            $('.filter[data-client="' + optionSelected + '"]').show();
        }
    }).change();
});