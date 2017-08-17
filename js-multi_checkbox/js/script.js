$(document).ready(function() {
    $('.chk').on('click', function() {
        checkBox();
    });

    function checkBox() {
        // new code
        /// declare an checkbox array /
        var chkArray = [];

        /// look for all checkboes that have a class 'chk' attached to it and check if it was checked /
        $(".chk:checked").each(function() {
            chkArray.push($(this).val());
        });

        /// we join the array separated by the comma /
        var selected;
        selected = chkArray.join(',') + ",";

        /// check if there is selected checkboxes, by default the length is 1 as it contains one single comma /
        if (selected.length > 1) {
            alert("You have selected ");
            $('.add-to-my-list').removeClass('dsb-list-btn');
            // $('button').prop('disabled', true);


        } else {
            alert("Please at least one of the checkbox");
            $('.add-to-my-list').addClass('dsb-list-btn');
        }
        // end here
    }
});