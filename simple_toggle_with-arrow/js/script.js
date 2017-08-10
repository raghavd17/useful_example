$(document).ready(function() {

    $(document).on('click', '.js-toggle', function() {
        var togEle = $(this).data("toggle");
        var targetEle = $('.' + togEle);
        if (targetEle.is(':hidden')) {
            targetEle.slideDown(500);
            $(this).find(".fa").removeClass('fa-angle-down').addClass('fa-angle-up');
        } else {
            targetEle.slideUp(500);
            $(this).find(".fa").addClass('fa-angle-down');

        }
    });

})