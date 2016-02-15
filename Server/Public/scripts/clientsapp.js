var firstValue = [];
var secondValue = [];
$(document).ready(function() {
    console.log("working");
    $('.num-button').on('click', function () {

        if ($('.display').data('id') == 'clear') {
            $('.display').data('id', 'first-unlocked');
            firstValue.push($(this).val());
            console.log(firstValue);
        }


        else if ($('.display').data('id') == 'first-locked') {
            secondValue.push($(this).val());
            console.log(secondValue);
        }

        var $pressedNumber = $(this).val();
        $('.display').val($pressedNumber);



        //store value of each button. maybe by adding data method
        //data attr could be 1st entry, 1st entry locked.  2nd entry, 2nd entry locked

    });

    $('.func-button').on('click', function () {
        if ($('.display').data('id', 'first-unlocked')) {
            $('.display').data('id', 'first-locked');
        }

        ///locks the first num-buttons clicked as value one.
        ///the func-button is used for routing in the POST request
    });

    $('.equal-button').on('click', postValues);
        ////locks the previously entered numbers as value two
        ///executes function that gets sent as an POST request. routed depending on func button




    $('.clear-button').on('click', function () {
        ////execute function that clears the display.
        ('.display').replaceWith('[placeholder]')

    });

    function appendResult() {

    }


    function postValues() {
        event.preventDefault();
        var mergedfirstValue = {};
        //var mergedsecondValue = {};
        mergedfirstValue = (firstValue.join(''));
        //mergedsecondValue = (secondValue.join(''));
        console.log('inside function:', mergedfirstValue);
        //console.log('inside function:', mergedsecondValue);

            $.ajax({
            type: 'POST',
            url: '/addition',
            data: {firstvalue: mergedfirstValue},
            success: function (data) {
                console.log('made the return trip with addition')
                console.log(data);
                //need append DOM function

                }
            });
    }

});


