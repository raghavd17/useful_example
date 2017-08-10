$(document).ready(function() {
    alert('hello');
    $('ul.tabs li').on('click', function() {
        var tab_id = $(this).data('tab');

        $('ul.tabs li').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    })

})