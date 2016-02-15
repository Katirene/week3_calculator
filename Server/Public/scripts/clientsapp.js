var firstValue = [];
var secondValue = [];
var mathProblem = '';

$(document).ready(function() {
    console.log("working");

    $('.num-button').on('click', function() {
        if (mathProblem !== '' || $(this).val() !=='0') {
            mathProblem += $(this).val();
        }
        console.log($(this).val());
        console.log(mathProblem);
    });




    $('.num-button').on('click', function () {

        /*if ($('.display').data('id') === 'clear'
         || $('.display').data('id') === 'firstunlocked') {
            $('.display').data('id', 'firstunlocked');
            firstValue.push($(this).val());
            console.log(secondValue);
        }
        else {
            secondValue.push($(this).val());
            console.log(secondValue);
        }*/

        var $pressedNumber = $(this).val();
        $('.display').val($pressedNumber);



        //store value of each button. maybe by adding data method
        //data attr could be 1st entry, 1st entry locked.  2nd entry, 2nd entry locked

    });

    $('.func-button').on('click', function () {
        mathProblem += $(this).val();

        //if ($('.display').data('id') === 'firstunlocked') {
          //  $('.display').data('id', 'firstlocked');
        //}

        ///the func-button is used for routing in the POST request
    });

    $('.equal-button').on('click', postValues);
        //if bound event is addition, execute postValuesAddition

        ////locks the previously entered numbers as value two
        ///executes function that gets sent as an POST request. routed depending on func button




    $('.clear-button').on('click', function () {
        ////execute function that clears the display.
        $('.display').val('');
        firstValue = [];
        secondValue = [];
        console.log(firstValue, secondValue);

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


